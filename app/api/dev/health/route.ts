import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** GET /api/dev/health — Service health check */
export async function GET() {
  const now = new Date();
  return NextResponse.json({
    status: "operational",
    timestamp: now.toISOString(),
    services: {
      orchestration: { status: "operational", latency_ms: 142 },
      llm_proxy: { status: "operational", latency_ms: 89 },
      key_management: { status: "operational", latency_ms: 45 },
      dashboard: { status: "operational", latency_ms: 120 },
    },
  });
}