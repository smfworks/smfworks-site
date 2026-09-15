# SMF Works

**Live Site:** [smfworks.com](https://smfworks.com)

The umbrella brand site for SMF Works — a human-AI research lab that publishes findings, ships open agent tools, and offers fixed-scope Agent Setup packages.

## What is SMF Works?

SMF Works is a human-AI research lab led by Michael Gannotti (Principal AI). We test, document, and build — with honesty about what works and what doesn't.

This site is the **parent brand site**:

- **[AI Clearinghouse](https://www.smfclearinghouse.com/)** — practitioner research (canonical research lives there, not here)
- **[WisdomForge](https://smfwisdomforge.com)** — parent-operated academy
- **Hermes** — open agent runtime work (Hermes-on-Omarchy, LAR, skills)
- **Praxis** — governed autonomous colleague experiment
- **SMF AI Weekly** — weekly letter
- **Books** — direct-from-author titles
- **Agent Setup** — Starter $2,000 · Standard $3,500 · Keep-alive $300/mo

## Site Structure

```
/                 homepage — thesis, proof, surfaces, shipped work, services, about
/work             public catalog (not a second homepage)
/services         Agent Setup packages and boundaries
/research         gateway to Clearinghouse research — no hosted research posts
/about            Michael Gannotti / lab
/contact          intake
/newsletter       SMF AI Weekly archive + signup
/books            bookstore (Amazon titles + Stripe storefront)
/privacy
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Deployment | Vercel |
| Payments | Stripe (bookstore) |

## Development

```bash
npm install
npm run dev     # dev server at localhost:3000
npm run build   # production build
npm test        # hero-script + secret-scan contracts
```

Copy `.env.example` to `.env.local` for local secrets. Hero generation requires `TOGETHER_API_KEY` and fails closed without it. See [SECURITY.md](./SECURITY.md).

## Design System

Charcoal field (#0B0D10), ember CTAs (#E86A2B / #ea580c), teal (#3DB8A8) for agent/code, paper headings (#F4F1EA).
Inter (body) + Space Grotesk (display) + JetBrains Mono (code).
Tokens: `app/globals.css` `@theme` and `DESIGN.md`.

## Content

Markdown under `content/` where that pattern exists. Lab surfaces, accomplishments, and Agent Setup SKUs are structured data in `content/lib/`.

## Architecture Decision

SMFWorks.com is the **brand umbrella** — it does NOT host technical blog content.
All research, benchmarks, guides, and practitioner content lives at the
[AI Clearinghouse](https://www.smfclearinghouse.com/). The `/blog` route redirects
to `/research`, which links to the Clearinghouse.
