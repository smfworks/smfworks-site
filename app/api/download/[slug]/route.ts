import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createHmac } from 'crypto';
import { getBookBySlug } from '@/lib/books';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
let stripe: Stripe | null = null;

if (stripeSecretKey) {
  stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2026-02-25.clover',
  });
}

// Download links are valid for 15 minutes.
const DOWNLOAD_LINK_TTL_SECONDS = 15 * 60;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!stripe) {
    return NextResponse.json(
      { error: 'Stripe not configured' },
      { status: 503 }
    );
  }

  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return NextResponse.json(
      { error: 'Book not found' },
      { status: 404 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json(
      { error: 'Missing session_id' },
      { status: 400 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items'],
    });

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 403 }
      );
    }

    const metadata = session.metadata || {};
    if (metadata.type !== 'book' || metadata.bookSlug !== slug) {
      return NextResponse.json(
        { error: 'Session does not match this book' },
        { status: 403 }
      );
    }

    // Build signed URLs for every available format — buyer gets all of them.
    const links = [];
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://smfworks.com';

    for (const format of book.availableFormats) {
      const filename = book.files[format];
      if (!filename) continue;

      const expiresAt = Math.floor(Date.now() / 1000) + DOWNLOAD_LINK_TTL_SECONDS;
      const signedUrl = `${baseUrl}/api/file/${encodeURIComponent(filename)}?token=${generateFileToken(filename, expiresAt)}`;

      links.push({
        format,
        url: signedUrl,
        expiresAt,
      });
    }

    return NextResponse.json({ links });

  } catch (error: unknown) {
    console.error('Download verification error:', error);
    const message = error instanceof Error ? error.message : 'Failed to verify purchase';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

function generateFileToken(filename: string, expiresAt: number): string {
  const secret = process.env.DOWNLOAD_TOKEN_SECRET;
  if (!secret) {
    throw new Error('DOWNLOAD_TOKEN_SECRET not configured');
  }

  const payload = `${filename}:${expiresAt}`;
  return `${expiresAt}:${createHmac('sha256', secret).update(payload).digest('hex')}`;
}