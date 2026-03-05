import { NextRequest, NextResponse } from "next/server";

const TO_ADDRESS = "michael@smfworks.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, business, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Call Resend REST API directly — no SDK, no module-level init
    const from = process.env.RESEND_FROM || "SMF Works <noreply@smfworks.com>";
    const subject = `New Inquiry from ${name}${business ? ` — ${business}` : ""}`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [TO_ADDRESS],
        reply_to: email,
        subject,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#1E1E1E;padding:24px;border-radius:8px 8px 0 0;">
              <h2 style="color:#C87941;margin:0;font-size:20px;">New Contact Inquiry</h2>
              <p style="color:#F8F5F0;margin:8px 0 0;font-size:14px;">via smfworks.com</p>
            </div>
            <div style="background:#F8F5F0;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e5e1db;">
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0;color:#666;font-size:14px;width:120px;"><strong>Name</strong></td>
                  <td style="padding:8px 0;font-size:14px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#666;font-size:14px;"><strong>Email</strong></td>
                  <td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#C87941;">${email}</a></td>
                </tr>
                ${business ? `<tr>
                  <td style="padding:8px 0;color:#666;font-size:14px;"><strong>Business</strong></td>
                  <td style="padding:8px 0;font-size:14px;">${business}</td>
                </tr>` : ""}
                <tr><td colspan="2" style="padding:16px 0 8px;color:#666;font-size:14px;"><strong>Message</strong></td></tr>
                <tr>
                  <td colspan="2">
                    <div style="background:white;border:1px solid #ddd;border-radius:4px;padding:16px;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</div>
                  </td>
                </tr>
              </table>
              <div style="margin-top:24px;padding-top:16px;border-top:1px solid #ddd;">
                <a href="mailto:${email}?subject=Re: Your SMF Works inquiry"
                   style="background:#C87941;color:white;padding:12px 24px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:14px;">
                  Reply to ${name} →
                </a>
              </div>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend API error:", err);
      return NextResponse.json(
        { error: "Failed to send message. Please try again or email michael@smfworks.com directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Message sent!" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
