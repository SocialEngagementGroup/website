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
    const { email, leadFrom, recaptchaToken } = await req.json();

    // 1) reCAPTCHA token required
    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, error: "Missing reCAPTCHA token" },
        { status: 400 }
      );
    }

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

    if (!verifyData.success || verifyData.score < 0.5) {
      console.log("reCAPTCHA REJECTED - success:", verifyData.success, "score:", verifyData.score, "error-codes:", verifyData["error-codes"]);
      return NextResponse.json(
        {
          success: false,
          error: "reCAPTCHA verification failed",
          score: verifyData.score,
          details: verifyData,
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

    const queryParams = new URLSearchParams({
      Email: email,
      "Lead From": leadFrom,
      Date: new Date().toISOString().split("T")[0],
    }).toString();

    const n8nRes = await fetchWithTimeout(
      `${webhookUrl}?${queryParams}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
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
