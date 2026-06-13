/**
 * Simple session-based auth for the SMF Works Developer Platform.
 *
 * Strategy: signed cookies with HMAC-SHA256. No external auth provider needed.
 * Sessions contain: { sub, email, plan, iat, exp }
 *
 * In production, replace with NextAuth.js or Clerk for OAuth flows.
 * This provides a working auth layer that can be upgraded later.
 */

import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const SECRET = process.env.SMF_AUTH_SECRET || "dev-secret-change-in-production";
const COOKIE_NAME = "smf_dev_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export interface DevSession {
  sub: string;
  email: string;
  plan: "free" | "pro";
  iat: number;
  exp: number;
}

function sign(payload: string): string {
  const mac = createHmac("sha256", SECRET).update(payload).digest("hex");
  return `${payload}.${mac}`;
}

function verify(token: string): string | null {
  const idx = token.lastIndexOf(".");
  if (idx === -1) return null;
  const payload = token.slice(0, idx);
  const sig = token.slice(idx + 1);
  const expected = createHmac("sha256", SECRET).update(payload).digest("hex");
  try {
    if (timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) {
      return payload;
    }
  } catch {
    return null;
  }
  return null;
}

export function encodeSession(session: DevSession): string {
  const payload = Buffer.from(JSON.stringify(session)).toString("base64url");
  return sign(payload);
}

export function decodeSession(token: string): DevSession | null {
  const payload = verify(token);
  if (!payload) return null;
  try {
    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf-8")
    ) as DevSession;
    if (session.exp < Math.floor(Date.now() / 1000)) return null;
    return session;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<DevSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return decodeSession(token);
}

export function sessionCookie(token: string): string {
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_MAX_AGE}`;
}

export function clearSessionCookie(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}