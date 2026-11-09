import { NextRequest, NextResponse } from 'next/server';

/**
 * DISABLED ENDPOINT — see the explanation below before re-enabling.
 *
 * POST /api/token/issue used to sign attacker-chosen claims into a
 * 365-day RS256 JWT with no authentication: any anonymous caller could
 * mint a paid-tier token (hernes-security scan_2396002a8603794567266b8b,
 * high finding authz.unauthenticated-token-issuance, confirmed live on
 * production 2026-11-09).
 *
 * It has no caller in this repository — its only intended consumer was
 * the /dashboard page removed in the 229a394 rebrand. The subscription
 * download flow does not use tokens (it re-verifies the Stripe session
 * server-side), so disabling this endpoint breaks nothing that exists.
 *
 * When the subscriber auth system is actually designed, the issuing
 * path must:
 *   1. Authenticate the request (Stripe webhook or a verified session),
 *      never trust a body-provided stripeCustomerId/tier/skills.
 *   2. Derive claims server-side from the verified Stripe state.
 *   3. Check a real revocation store at validation time (the other open
 *      scan finding), with short-enough expiry that revocation matters.
 * Until then this route stays closed. — 2026-11-09
 */
export async function POST(request: NextRequest) {
  return NextResponse.json(
    {
      error: 'Token issuance is disabled. This endpoint previously allowed unauthenticated minting of subscriber tokens; it will return when a verified issuance path exists.',
    },
    { status: 503 }
  );
}

export async function GET() {
  return NextResponse.json(
    { error: 'Token issuance is disabled.' },
    { status: 503 }
  );
}
