import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  
  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: 'Stripe not configured' },
      { status: 503 }
    );
  }

  try {
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2026-02-25.clover',
    });
    const baseUrl = request.headers.get('origin') || 'https://smfworks.com';

    const priceId = (process.env.STRIPE_PRICE_ID || '').trim();
    if (!priceId || priceId === 'price_example') {
      return NextResponse.json(
        { error: 'STRIPE_PRICE_ID is required' },
        { status: 503 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/newsletter?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/books?canceled=true`,
      metadata: {
        tier: 'pro',
        skills: '*',
      },
      subscription_data: {
        metadata: {
          tier: 'pro',
          skills: '*',
        },
      },
    });

    return NextResponse.json({ url: session.url });

  } catch (error: unknown) {
    console.error('Checkout session error:', error);
    const message = error instanceof Error ? error.message : 'Failed to create checkout session';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
