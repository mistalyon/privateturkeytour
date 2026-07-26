import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site";

type EnquiryBody = {
  name?: string;
  email?: string;
  dates?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: EnquiryBody;

  try {
    body = (await request.json()) as EnquiryBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const dates = String(body.dates || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email." },
      { status: 400 },
    );
  }

  const payload = {
    source: "privateturkeytour.com/plan-your-trip",
    receivedAt: new Date().toISOString(),
    name,
    email,
    dates,
    message,
    notify: siteConfig.email,
  };

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        return NextResponse.json(
          {
            ok: false,
            error: "Webhook failed. Please email us directly.",
          },
          { status: 502 },
        );
      }

      return NextResponse.json({ ok: true, mode: "webhook" });
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error: "Could not reach the enquiry webhook. Please email us.",
        },
        { status: 502 },
      );
    }
  }

  // Ready for Coolify env later: ENQUIRY_WEBHOOK_URL → Make/n8n/Zapier/Resend bridge
  console.info("[enquiry]", JSON.stringify(payload));
  return NextResponse.json({ ok: true, mode: "logged" });
}
