import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const pubId = process.env.BEEHIIV_PUBLICATION_ID;

  let body: { email?: string; name?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = body.email?.trim();
  const name = body.name?.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!apiKey || !pubId) {
    return NextResponse.json(
      { error: "Newsletter signup isn't configured yet — check back soon." },
      { status: 503 },
    );
  }

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: "aspivak.com",
        referring_site: "https://aspivak.com",
        ...(name
          ? { custom_fields: [{ name: "First Name", value: name }] }
          : {}),
      }),
    },
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Couldn't subscribe right now — please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
