import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import * as yup from "yup";

const contactSchema = yup.object({
  name: yup.string().required().max(100),
  phone: yup.string().max(20).optional(),
  email: yup.string().email().required().max(150),
  message: yup.string().required().max(2000),
  business: yup.string().max(100).optional(),
  pageUrl: yup.string().max(500).optional(),
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
      validatedData = await contactSchema.validate(body, { abortEarly: false });
    } catch (validationError) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: validationError.errors },
        { status: 400 }
      );
    }
    
    const { name, phone, email, message, business, recaptchaToken, pageUrl } = validatedData;

    // 2) Verify reCAPTCHA
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing RECAPTCHA_SECRET_KEY in environment variables",
        },
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
      20000
    );

    if (!verifyRes.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "reCAPTCHA verify request failed",
          status: verifyRes.status,
        },
        { status: 502 }
      );
    }

    const verifyData = await verifyRes.json();

    if (
      !verifyData.success ||
      verifyData.score < 0.5 ||
      verifyData.action !== "contact_form"
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "reCAPTCHA verification failed",
        },
        { status: 400 }
      );
    }

    // 3) Trigger n8n webhook (DEBUG: await so we know if it actually worked)
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Server configuration error",
        },
        { status: 500 }
      );
    }


    const payload = {
      name,
      phone,
      email,
      business,
      message,
      pageUrl,
      submittedAt: new Date().toISOString(),
    };


    const n8nRes = await fetchWithTimeout(
      webhookUrl,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
      20000
    );

    const n8nText = await n8nRes.text();

    if (!n8nRes.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "Submission failed. Please try again later.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    const isAbort = error?.name === "AbortError";
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: isAbort ? "Request timed out" : "An unexpected error occurred",
      },
      { status: isAbort ? 504 : 500 }
    );
  }
}
