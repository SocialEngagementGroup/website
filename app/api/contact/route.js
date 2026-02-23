import { NextResponse } from "next/server";

function fetchWithTimeout(url, options = {}, timeoutMs = 20000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  return fetch(url, { ...options, signal: controller.signal }).finally(() =>
    clearTimeout(timer)
  );
}

export async function POST(req) {
  try {
    const { name, phone, email, message, business, recaptchaToken, pageUrl } =
      await req.json();


    // 1) reCAPTCHA token required
    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, error: "Missing reCAPTCHA token" },
        { status: 400 }
      );
    }

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

    if (!verifyData.success) {
      return NextResponse.json(
        {
          success: false,
          error: "reCAPTCHA verification failed",
          verifyData, // ✅ shows exact reason codes
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
          error: "Missing N8N_WEBHOOK_URL in environment variables",
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
          error: "n8n webhook failed",
          n8nStatus: n8nRes.status,
          n8nBody: n8nText,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      n8nTriggered: true,
      n8nStatus: n8nRes.status,
    });
  } catch (error) {
    const isAbort = error?.name === "AbortError";
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: isAbort ? "Request timed out" : error?.message || "Unknown error",
      },
      { status: isAbort ? 504 : 500 }
    );
  }
}
