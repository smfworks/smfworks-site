# SMF Works — Form Setup Guide

This document covers the one-time setup required to activate the newsletter signup and contact forms.

---

## Overview

| Form | Backend | What it does |
|------|---------|--------------|
| Newsletter signup | Google Sheets API | Adds email + timestamp to subscriber sheet |
| Contact inquiry | Resend | Emails michael@smfworks.com with inquiry details |

---

## Step 1 — Resend API Key (Already done ✅)

The Resend API key is configured. Forms will work immediately using `onboarding@resend.dev` as the sender.

**To upgrade to `noreply@smfworks.com` as sender:**

1. Go to [resend.com/domains](https://resend.com/domains)
2. Click **Add Domain** → enter `smfworks.com`
3. Resend will give you DNS records to add (DKIM TXT records)
4. Go to **GoDaddy DNS** for smfworks.com and add those records
5. Click **Verify** in Resend — takes 1–5 minutes
6. In Vercel, update `RESEND_FROM` to: `SMF Works <noreply@smfworks.com>`

---

## Step 2 — Google Service Account (Required for newsletter signup)

The newsletter form needs a service account to write to Google Sheets without OAuth token expiry.

### 2a. Create the service account

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Select project **mikesmoltbot1**
3. Navigate to **IAM & Admin → Service Accounts**
4. Click **Create Service Account**
   - Name: `smfworks-site`
   - Description: `SMF Works website — Sheets access`
5. Click **Create and Continue** → skip role assignment → **Done**
6. Click the new service account → **Keys** tab → **Add Key → Create new key → JSON**
7. A JSON file downloads — keep it safe

### 2b. Share the subscriber sheet

1. Open the JSON key file — copy the `client_email` value (looks like `smfworks-site@mikesmoltbot1.iam.gserviceaccount.com`)
2. Open the Google Sheet: [SMF AI Weekly Subscribers](https://docs.google.com/spreadsheets/d/1SEyilU8t9iWmR1kCuT6RTccql3jQGRPYorP9MRQuLbs)
3. Click **Share** → paste the service account email → set role to **Editor** → **Send**

### 2c. Add to Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard) → smfworks-site → **Settings → Environment Variables**
2. Add: `GOOGLE_SERVICE_ACCOUNT_KEY`
   - Value: the **entire contents** of the JSON file (all on one line — paste the raw JSON)
3. Add: `RESEND_API_KEY` = your Resend API key
4. Optionally add: `RESEND_FROM` (only needed after domain verification)
5. Click **Save** → go to **Deployments** → trigger a **Redeploy**

---

## Step 3 — Local Development (Optional)

```bash
cp .env.example .env.local
# Fill in GOOGLE_SERVICE_ACCOUNT_KEY and RESEND_API_KEY
npm run dev
```

---

## Troubleshooting

**Newsletter form returns 500:**
- Check that `GOOGLE_SERVICE_ACCOUNT_KEY` is set in Vercel and is valid JSON
- Check that the service account email has Editor access to the sheet

**Contact form returns 500:**
- Check that `RESEND_API_KEY` is set in Vercel
- Check Resend dashboard for send logs and errors

**Emails landing in spam:**
- Complete domain verification in Resend (Step 1 above)
- This ensures emails come from `noreply@smfworks.com` with proper DKIM signing

---

## Architecture Notes

```
Browser → POST /api/subscribe → Google Sheets API (service account) → append row
Browser → POST /api/contact   → Resend API → email to michael@smfworks.com
```

All API routes are Next.js Route Handlers deployed as Vercel serverless functions.
No third-party form services. No data stored outside your own Google Sheet.
