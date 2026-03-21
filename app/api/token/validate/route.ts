import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_PUBLIC_KEY = process.env.SMF_JWT_PUBLIC_KEY;

export async function POST(request: NextRequest) {
  try {
    if (!JWT_PUBLIC_KEY) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { error: 'Token is required' },
        { status: 400 }
      );
    }

    try {
      const payload = jwt.verify(token, JWT_PUBLIC_KEY, {
        algorithms: ['RS256'],
      }) as jwt.JwtPayload;

      return NextResponse.json({
        valid: true,
        subscriberId: payload.sub,
        tier: payload.tier,
        skills: payload.skills,
        expires: payload.exp,
      });
    } catch (jwtError) {
      if (jwtError instanceof jwt.TokenExpiredError) {
        return NextResponse.json({
          valid: false,
          error: 'Token expired',
        }, { status: 401 });
      }

      return NextResponse.json({
        valid: false,
        error: 'Invalid token',
      }, { status: 401 });
    }

  } catch (error) {
    console.error('Token validation error:', error);
    return NextResponse.json(
      { error: 'Validation failed' },
      { status: 500 }
    );
  }
}
