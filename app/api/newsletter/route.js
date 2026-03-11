import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import * as yup from "yup";

const newsletterSchema = yup.object({
  email: yup.string().email().required().max(150),
  leadFrom: yup.string().max(150).optional(),
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
  // Rate Limit: Max 5 requests per 1 minute per IP
  const rateLimitError = rateLimit(req, 5, 60 * 1000);
  if (rateLimitError) return rateLimitError;

  try {
    const body = await req.json();
    let validatedData;
    
    try {
      validatedData = await newsletterSchema.validate(body, { abortEarly: false });
    } catch (validationError) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: validationError.errors },
        { status: 400 }
      );
    }
    
    const { email, leadFrom, recaptchaToken } = validatedData;

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
    console.log("reCAPTCHA verify response:", JSON.stringify(verifyData));

    if (
      !verifyData.success ||
      verifyData.score < 0.5 ||
      verifyData.action !== "newsletter"
    ) {
      console.log("reCAPTCHA REJECTED - success:", verifyData.success, "score:", verifyData.score, "action:", verifyData.action, "hostname:", actualHostname);
      return NextResponse.json(
        {
          success: false,
          error: "reCAPTCHA verification failed",
        },
        { status: 400 }
      );
    }

    // 3) Forward to n8n webhook
    const webhookUrl = process.env.N8N_NEWSLETTER_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const n8nRes = await fetchWithTimeout(
      webhookUrl,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Email: email,
          "Lead From": leadFrom,
          Date: new Date().toISOString().split("T")[0],
        }),
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
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: isAbort ? "Request timed out" : "Server error",
      },
      { status: isAbort ? 504 : 500 }
    );
  }
}
