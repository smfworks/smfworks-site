# SMF Works — Bookstore Setup Guide

This document covers the setup required to sell ebooks and PDFs directly from `smfworks.com/books` using Stripe.

---

## What is built

| Route | Purpose |
|-------|---------|
| `/books` | Bookstore index page |
| `/books/{slug}` | Individual book landing page |
| `/books/{slug}/download` | Post-purchase download page |
| `POST /api/checkout/book` | Creates a Stripe Checkout session for a book |
| `POST /api/webhook/stripe` | Handles Stripe events (subscriptions + book purchases) |
| `GET /api/download/{slug}` | Verifies a Stripe session and returns signed download links |
| `GET /api/file/{filename}` | Serves the actual file behind a signed, expiring token |

---

## Step 1 — Stripe products and prices

1. Go to [dashboard.stripe.com/products](https://dashboard.stripe.com/products)
2. Create one Stripe **Price** per book per format (e.g., one for PDF, one for ePub).
3. Copy each `price_...` ID.

---

## Step 2 — Configure environment variables

Add these to your Vercel project (and to `.env.local` for local dev):

```bash
# Existing
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# New — optional for client-side diagnostics, not strictly required yet
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# New — required for download signing
DOWNLOAD_TOKEN_SECRET=any-long-random-string-min-32-characters

# New — one env var per Stripe price ID
STRIPE_PRICE_ID_BOOK_1_PDF=price_...
STRIPE_PRICE_ID_BOOK_1_EPUB=price_...
STRIPE_PRICE_ID_BOOK_2_PDF=price_...
```

> **Important:** `DOWNLOAD_TOKEN_SECRET` must be at least 32 characters and kept secret. Generate it with `openssl rand -hex 32`.

---

## Step 3 — Add your book files

Place PDF/ePub files in the repo-root `downloads/` directory (created at `smfworks-site/downloads/`). The filenames must match the `files` map in `lib/books.ts`.

Example layout:

```
smfworks-site/
├── downloads/
│   ├── my-book.pdf
│   └── my-book.epub
```

And in `lib/books.ts`:

```ts
files: {
  pdf: "my-book.pdf",
  epub: "my-book.epub",
},
```

---

## Step 4 — Update the book catalog

Edit `lib/books.ts`:

- Replace placeholder slugs, titles, descriptions, and cover images.
- Map each format to its real `STRIPE_PRICE_ID_*` env var.
- Add related posts from SMFClearinghouse or WisdomForge under `relatedPosts`.

---

## Step 5 — Test the purchase flow locally

1. Start the dev server:

   ```bash
   npm run dev
   ```

2. Use Stripe test mode keys and test price IDs.
3. Visit `http://localhost:3000/books`.
4. Click **Buy PDF** — complete Stripe Checkout with test card `4242 4242 4242 4242`.
5. You will be redirected to `/books/{slug}/download?session_id=...`.
6. Download buttons should appear and files should download.

---

## Step 6 — Configure Stripe webhook endpoint in production

1. In Stripe, set the webhook endpoint to `https://smfworks.com/api/webhook/stripe`.
2. Select the event `checkout.session.completed`.
3. Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`.

The webhook handler currently logs book purchases and can be extended to send email receipts.

---

## Step 7 — Optional: email receipts

To send buyers a backup download link via email, wire the existing Resend setup into the webhook handler at `app/api/webhook/stripe/route.ts` in `handleCheckoutSessionCompleted()`.

---

## Security notes

- Files are never exposed at a guessable public URL. They are served only through `/api/file/{filename}` with a signed, expiring token.
- The download API verifies the Stripe Checkout `payment_status === 'paid'` before issuing tokens.
- File serving is scoped to the `downloads/` directory and protected against directory traversal.
- Download links expire after 15 minutes.

---

## Migrating to S3 / R2 later

If storage needs outgrow local files:

1. Replace `app/api/file/[filename]/route.ts` with a presigned-URL generator for your bucket.
2. Keep `/api/download/{slug}` unchanged — it remains the gatekeeper that verifies Stripe payment.
3. Update `lib/books.ts` so `files` points to S3 object keys instead of local filenames.

The buyer flow stays identical.

---

## Files you may customize

- `lib/books.ts` — catalog, pricing, file names
- `public/images/books/` — cover images
- `downloads/` — actual ebook/PDF files
- `app/books/page.tsx` — bookstore index layout
- `app/books/[slug]/page.tsx` — book detail page
- `components/BuyButton.tsx` — checkout button
- `components/BookCard.tsx` — card on index page
- `components/DownloadPageClient.tsx` — post-purchase UI

---

## Troubleshooting

**Checkout button shows "Checkout failed":**
- Verify `STRIPE_SECRET_KEY` is set.
- Verify the `STRIPE_PRICE_ID_*` for the selected format resolves to a real Stripe Price ID.

**Download page says "Payment not completed":**
- The Stripe session may not be paid yet, or you are using a test session with live keys (or vice versa).
- Make sure `STRIPE_SECRET_KEY` matches the mode of the Checkout session.

**Download link 403 / expired:**
- Links expire after 15 minutes. Refresh the download page to get fresh links.
- Verify `DOWNLOAD_TOKEN_SECRET` is set and matches between generation and verification.

**Files not found:**
- Confirm the files exist in `downloads/` and filenames match `lib/books.ts` exactly.
- On Vercel, persistent local filesystem is not available; use `BOOK_DOWNLOADS_DIR` to point to a mounted volume, or migrate to S3/R2 for production file hosting.

> **Vercel note:** Serverless functions do not have persistent local storage. For production, either use Vercel Blob / S3 / R2, or mount files into the function at build time by placing them in `public/` or `downloads/` and reading via the file API. This implementation reads from the `downloads/` directory created at the project root, which works for local builds and some static-hosting setups. For true serverless scale, plan the S3 migration above.
