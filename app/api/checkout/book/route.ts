import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getBookBySlug } from '@/lib/books';

export async function POST(request: NextRequest) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: 'Stripe not configured' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { bookSlug, priceId } = body as {
      bookSlug?: string;
      priceId?: string;
    };

    if (!bookSlug || !priceId) {
      return NextResponse.json(
        { error: 'Missing bookSlug or priceId' },
        { status: 400 }
      );
    }

    const book = getBookBySlug(bookSlug);
    if (!book) {
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }

    if (book.stripePriceId !== priceId) {
      return NextResponse.json(
        { error: 'Price ID does not match this book' },
        { status: 400 }
      );
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2026-02-25.clover',
    });
    const baseUrl = request.headers.get('origin') || 'https://smfworks.com';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/books/${bookSlug}/download?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/books/${bookSlug}?canceled=true`,
      metadata: {
        type: 'book',
        bookSlug,
      },
    });

    return NextResponse.json({ url: session.url });

  } catch (error: unknown) {
    console.error('Book checkout session error:', error);
    const message = error instanceof Error ? error.message : 'Failed to create checkout session';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}