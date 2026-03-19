# SMF Works Website

**Live Site:** [smfworks.com](https://smfworks.com)

The official SMF Works website — a Next.js application showcasing AI automation services, blog content, and lead generation systems for small businesses.

## What is SMF Works?

SMF Works helps small businesses automate their operations using AI. We build custom systems that handle everything from lead generation to customer follow-up, so business owners can focus on what they do best.

**Core Services:**
- 🤖 AI Agent Development - Custom AI assistants for your business
- 📈 Lead Generation Systems - Automated prospecting and outreach
- 🔄 Workflow Automation - Connect your tools, eliminate busywork
- 📊 Business Intelligence - Data dashboards and reporting
- 📝 Content Automation - SEO-optimized content at scale

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui |
| Deployment | Vercel |
| Forms | React Hook Form + Zod |
| Email | Resend API |
| Analytics | Vercel Analytics |

## Features

- **Responsive Design** - Mobile-first, optimized for all devices
- **Newsletter Signup** - Integrated with Google Sheets API
- **Contact Forms** - Direct email delivery via Resend
- **Blog System** - SEO-optimized articles with automatic OG images
- **Performance Optimized** - 100/100 Lighthouse scores
- **SEO Ready** - Meta tags, structured data, sitemap generation

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mikesmoltbot-hub/smfworks-site.git
cd smfworks-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Setup

Copy the example environment file:

```bash
cp .env.example .env.local
```

Required environment variables:

```bash
# Resend API for contact forms
RESEND_API_KEY=re_xxxxxxxx
RESEND_FROM=SMF Works <michael@smfworks.com>

# Google Service Account for newsletter
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
```

See [SETUP.md](./SETUP.md) for detailed setup instructions.

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Project Structure

```
smfworks-site/
├── app/                    # Next.js App Router
│   ├── (main)/            # Main route group
│   │   ├── page.tsx       # Homepage
│   │   ├── layout.tsx     # Root layout
│   │   └── ...
│   ├── api/               # API routes
│   │   ├── subscribe/     # Newsletter signup
│   │   └── contact/       # Contact form
│   └── blog/              # Blog pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── sections/         # Page sections
├── lib/                   # Utility functions
├── public/               # Static assets
└── ...
```

## Content Management

### Adding Blog Posts

1. Create a new file in `app/blog/posts/`
2. Add post metadata to `app/blog/posts/index.ts`
3. Write content using Markdown
4. The post will automatically appear on `/blog`

### Updating Services

Edit the service data in `app/(main)/page.tsx` to add or modify service offerings.

## Deployment

This site is automatically deployed to Vercel on every push to the `main` branch.

```bash
# Deploy manually
vercel --prod
```

## Performance

- **Lighthouse Score:** 100/100/100/100
- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Bundle Size:** Optimized with Tree Shaking

## License

MIT License - See [LICENSE](./LICENSE) for details.

## Connect

- **Website:** [smfworks.com](https://smfworks.com)
- **GitHub:** [@mikesmoltbot-hub](https://github.com/mikesmoltbot-hub)
- **Location:** Pittsboro, NC

---

*Built with Next.js, Tailwind CSS, and ☕ by SMF Works*