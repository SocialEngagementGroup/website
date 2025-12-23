import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, phone, email, message, business, recaptchaToken } =
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

    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: recaptchaToken }),
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // 3) Trigger n8n webhook (fire-and-forget)
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { success: false, error: "Missing N8N_WEBHOOK_URL in environment variables" },
        { status: 500 }
      );
    }

    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email,
        business,
        message,
        source: "website-contact-form",
        submittedAt: new Date().toISOString(),
      }),
    }).catch((e) => {
      console.error("n8n trigger failed:", e);
    });

    // Respond immediately so the request never times out
    return NextResponse.json({ success: true, n8nTriggered: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
