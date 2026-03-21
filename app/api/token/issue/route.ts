import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_PRIVATE_KEY = process.env.SMF_JWT_PRIVATE_KEY;

export async function POST(request: NextRequest) {
  try {
    if (!JWT_PRIVATE_KEY) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { stripeCustomerId, tier = 'pro', skills = '*' } = body;

    if (!stripeCustomerId) {
      return NextResponse.json(
        { error: 'stripeCustomerId is required' },
        { status: 400 }
      );
    }

    const payload = {
      sub: stripeCustomerId,
      tier: tier,
      skills: skills,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (365 * 24 * 60 * 60),
    };

    const token = jwt.sign(payload, JWT_PRIVATE_KEY, {
      algorithm: 'RS256',
    });

    return NextResponse.json({
      success: true,
      token: token,
      expires: payload.exp,
      tier: tier,
    });

  } catch (error) {
    console.error('Token issuance error:', error);
    return NextResponse.json(
      { error: 'Failed to issue token' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const JWT_PUBLIC_KEY = process.env.SMF_JWT_PUBLIC_KEY;
  
  if (!JWT_PUBLIC_KEY) {
    return NextResponse.json(
      { error: 'Public key not configured' },
      { status: 500 }
    );
  }

  return NextResponse.json({
    publicKey: JWT_PUBLIC_KEY,
    algorithm: 'RS256',
  });
}
