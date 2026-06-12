import { NextResponse } from "next/server";
import { getSession } from "@/lib/dev-auth";
import { listApiKeys, generateApiKey, revokeApiKey } from "@/lib/api-keys";

export const dynamic = "force-dynamic";

/** GET /api/dev/keys — List user's API keys */
export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const keys = listApiKeys(session.sub);
  return NextResponse.json({ keys });
}

/** POST /api/dev/keys — Create a new API key */
export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const name = (body.name as string) || "Default";
  const result = generateApiKey(session.sub, name);

  return NextResponse.json(
    { id: result.id, key: result.key },
    { status: 201 }
  );
}

/** DELETE /api/dev/keys — Revoke an API key */
export async function DELETE(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const keyId = body.id as string;
  if (!keyId) {
    return NextResponse.json({ error: "Key id required" }, { status: 400 });
  }

  const ok = revokeApiKey(session.sub, keyId);
  if (!ok) {
    return NextResponse.json({ error: "Key not found" }, { status: 404 });
  }
  return NextResponse.json({ revoked: true });
}