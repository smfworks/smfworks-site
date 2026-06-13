import { NextResponse } from "next/server";
import { getSession } from "@/lib/dev-auth";

export const dynamic = "force-dynamic";

/** GET /api/dev/me — Current session info */
export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  return NextResponse.json({
    authenticated: true,
    sub: session.sub,
    email: session.email,
    plan: session.plan,
  });
}