import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import * as yup from "yup";

const auditSchema = yup.object({
  url: yup.string().required().max(500),
  name: yup.string().required().max(100),
  email: yup.string().email().required().max(150),
  recaptchaToken: yup.string().required(),
});

function fetchWithTimeout(url, options = {}, timeoutMs = 20000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { ...options, signal: controller.signal }).finally(() =>
    clearTimeout(timer)
  );
}

export async function POST(req) {
  // Rate Limit: Max 3 requests per 1 minute per IP
  const rateLimitError = rateLimit(req, 3, 60 * 1000);
  if (rateLimitError) return rateLimitError;

  try {
    const body = await req.json();
    let validatedData;
    
    try {
      validatedData = await auditSchema.validate(body, { abortEarly: false });
    } catch (validationError) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: validationError.errors },
        { status: 400 }
      );
    }
    
    const { url, name, email, recaptchaToken } = validatedData;

    // 2) Verify reCAPTCHA with Google
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const verifyRes = await fetchWithTimeout(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: recaptchaToken }),
      },
      10000
    );

    const verifyData = await verifyRes.json();

    if (
      !verifyData.success ||
      verifyData.score < 0.5 ||
      verifyData.action !== "website_audit"
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "reCAPTCHA verification failed",
        },
        { status: 400 }
      );
    }

    // 3) Forward to n8n webhook
    const webhookUrl = process.env.N8N_AUDIT_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const targetUrl = new URL(webhookUrl);

    const n8nRes = await fetchWithTimeout(
      targetUrl.toString(),
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ url, name, email }),
      },
      20000
    );

    if (!n8nRes.ok) {
      return NextResponse.json(
        { success: false, error: "Webhook request failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const isAbort = error?.name === "AbortError";
    console.error("Audit API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: isAbort ? "Request timed out" : "Server error",
      },
      { status: isAbort ? 504 : 500 }
    );
  }
}
