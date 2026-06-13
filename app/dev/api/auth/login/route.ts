import { NextResponse } from "next/server";
import { encodeSession, sessionCookie, DevSession } from "@/lib/dev-auth";

/** POST /api/dev/auth/login — Demo login (replace with OAuth in production) */
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email = body.email as string;

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const session: DevSession = {
    sub: `user_${email.split("@")[0]}`,
    email,
    plan: "free",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 days
  };

  const token = encodeSession(session);
  const response = NextResponse.json({ ok: true, sub: session.sub });
  response.headers.set("Set-Cookie", sessionCookie(token));
  return response;
}