# SMFWorks.com Complete Overhaul — Analysis & Implementation Plan

**Prepared by:** Pamela Flannery, CMO  
**Date:** July 25, 2026  
**Status:** Draft for Michael's review  
**Repo:** `/home/mikesai1/workspace/sites/smfworks-site`  
**Live:** [smfworks.com](https://smfworks.com)

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Current State Audit](#2-current-state-audit)
3. [Strategic Positioning](#3-strategic-positioning)
4. [Information Architecture Redesign](#4-information-architecture-redesign)
5. [Visual Design & Brand System](#5-visual-design--brand-system)
6. [Content Strategy](#6-content-strategy)
7. [Page-by-Page Specifications](#7-page-by-page-specifications)
8. [Technical Architecture](#8-technical-architecture)
9. [SEO & Metadata Overhaul](#9-seo--metadata-overhaul)
10. [Implementation Roadmap](#10-implementation-roadmap)
11. [Open Questions for Michael](#11-open-questions-for-michael)

---

## 1. Executive Summary

SMFWorks.com has evolved from a small-business AI services site into a human-AI research lab / think tank — but the website hasn't fully caught up. The homepage and key pages have been updated to reflect the research lab identity, but **deep structural remnants of the old positioning remain**: stale SEO metadata, 181 legacy blog posts aimed at small business owners, duplicate publication pages, a disabled lead-capture widget, an empty bookstore, and marketplace/agent-directory components that don't match the current mission.

This plan proposes a complete overhaul that:

- **Aligns every surface** with the research lab / think tank positioning from the product-marketing context
- **Simplifies the information architecture** from 12+ routes to a clean, logical hierarchy
- **Establishes a cohesive design system** that evolves the Forge aesthetic into something more refined and editorial
- **Consolidates content surfaces** while preserving each agent's distinct voice
- **Cleans up SEO** to stop attracting small-business service leads and start attracting researchers, builders, and technically curious readers
- **Removes dead code and pages** that create confusion and maintenance burden

The goal is a site that functions as a **credible umbrella brand site** for SMF Works — the parent that connects the Clearinghouse, WisdomForge, Hermes contributions, the agent fleet, the publications, and the books — and that signals "serious research lab" the moment someone lands.

---

## 2. Current State Audit

### 2.1 What's Working

| Element | Assessment |
|---------|-----------|
| **Forge design system** | DESIGN.md token registry is well-structured. Navy/ember/copper palette is distinctive and on-brand. Inter + Space Grotesk typography is clean. |
| **Homepage hero** | Already updated to research lab positioning. EmberCanvas particle effect is a nice touch. Headline ("Where intelligence meets judgment, craft, and care") is strong. |
| **Agent publications** | The Signal (Pamela, 22 posts), The Edge (Aiona, 57 posts), Morgan's Desk (18 posts), Harry's Desk (28 posts) — each has distinct visual identity and real content. |
| **Newsletter** | 18 issues with a proper archive page. SMF AI Weekly is a real, functioning publication. |
| **Team/About page** | Well-written, tells the human-AI collective story. The "Dimensions" section (Engineer/Forger/Creative/Partner) is compelling. |
| **Work page** | Good project cards covering WisdomForge, Hermes Agent, books, Mnemosyne, SMF Swarm, HyperFrames, Project Forge. |
| **Tech stack** | Next.js 16 App Router, Tailwind CSS 4, TypeScript, Vercel deployment. Modern and maintainable. |

### 2.2 What's Broken or Stale

#### A. Positioning Remnants (Critical)

The site still carries extensive traces of the old "AI automation services for small businesses" positioning:

| Location | Problem |
|----------|---------|
| **README.md** | Describes SMF Works as "AI automation services for small businesses" with services like "Lead Generation Systems," "Workflow Automation," "Business Intelligence" |
| **layout.tsx metadata keywords** | Include "AI solutions for small business," "small business automation," "Pittsboro NC AI consulting" |
| **layout.tsx FAQ JSON-LD** | Contains "How can AI help my small business save time?", "$50/month content packages," "plumbers, electricians, HVAC," "agencies charge $2,000+" |
| **Logo alt text** (page.tsx line 29) | `"The SMF Works Project — AI Solutions for Small Business"` |
| **/blog page metadata** | Title: "Blog \| AI & Automation Advice for Small Business Owners 2026" |
| **RSS feed description** | "Practical AI and automation advice for small business owners" |
| **181 legacy blog posts** | Many titled for small-business SEO ("5-ways-small-business-owners-save-hours-with-ai.md", "ai-adoption-gap-small-business-census-2026.md") |

**Impact:** Google is indexing small-business service keywords, attracting the wrong audience, and creating brand confusion. The FAQ schema is actively telling search engines we sell $50/month packages to plumbers.

#### B. Content Architecture Issues

| Issue | Detail |
|-------|--------|
| **/blog has 181 posts but isn't in the nav** | The blog route exists with 181 posts but is not linked from the navigation. Many posts are legacy small-business SEO content that doesn't match the research lab positioning. |
| **/the-social-forge duplicates /morgan** | Both pages pull from the same `getAllMorganPosts()` loader. Two routes, same content, different wrappers. |
| **/books has 0 content files** | `content/books/` is empty. The bookstore page shows a "being stocked" placeholder. BOOKSTORE_SETUP.md documents the Stripe integration plan but it's not complete. |
| **/dashboard is a stub** | A placeholder page that says "This is where subscription management will live." Not functional. |
| **/the-social-forge isn't in the nav** | Orphaned page only discoverable by direct URL. |
| **No clear content hierarchy** | Blog posts, Signal posts, Edge posts, Morgan posts, Harry posts, and newsletter issues are all flat — no topic clusters, no pillar pages, no curated reading paths. |

#### C. Dead / Disabled Code

| Component | Status |
|-----------|--------|
| `SMFLeadCaptureWidget.tsx` | Disabled, returns `null`. Comment says "causing browser permission popup." Still imported in layout.tsx. |
| `AgentCard.tsx`, `AgentComparison.tsx`, `AgentDetail.tsx`, `AgentsDirectoryClient.tsx` | Marketplace/agent-directory components that don't match research lab positioning. No route uses them in the current nav. |
| `BenchmarkLeaderboardClient.tsx`, `CostCalculatorClient.tsx`, `IntegrationMatrixClient.tsx`, `LLMComparisonTable.tsx` | Marketplace/comparison tool components. No active routes. |
| `MarketplaceDetail.tsx`, `MarketplaceDetailWrapper.tsx`, `MarketplaceSectionClient.tsx` | Marketplace components. No active routes. |
| `SubmitAgentForm.tsx` | Marketplace submission form. No active route. |
| `HubClient.tsx`, `DownloadPageClient.tsx` | Unknown purpose, no active routes. |
| `lib/marketplace/`, `lib/agents.ts`, `lib/api-keys.ts`, `lib/dev-auth.ts`, `lib/skillDocs.ts` | Marketplace/agent API libraries with no active consumers. |

#### D. Design Inconsistencies

| Issue | Detail |
|-------|--------|
| **Each publication page has a different background color** | The Edge: `#0D0B1A` (purple-black), The Signal: `#0A1A14` (green-black), Morgan: `#0A0F1F` (navy), Harry: `#001F3F` (navy), Social Forge: `#0d0d0d` (near-black). This creates a disjointed feel rather than a cohesive family. |
| **Blur effects vary** | Each page uses different blur colors, opacities, and sizes. No standardized decorative system. |
| **No shared section components** | Every page hand-rolls its own section layouts, card grids, and header patterns. No reusable component library. |
| **EmberCanvas only on homepage** | The forge ember particle effect is beautiful but appears only on the home page. No consistent ambient design language across the site. |
| **No responsive type scale** | Font sizes are hardcoded per page (text-4xl, text-5xl, etc.) rather than using a responsive type system. |

#### E. Missing Pages / Features

| Gap | Recommendation |
|-----|---------------|
| **No /research page** | The Clearinghouse is linked externally but there's no on-site research landing page that surfaces findings, white papers, and benchmarks. |
| **No /praxis page** | Praxis (governed autonomous AI colleague) is a major project but has no dedicated page on smfworks.com. |
| **No /agent-fleet page** | The multi-agent organization (Pamela, Morgan, Aiona, Harry, Liam, Gabriel, etc.) is described on /about but has no dedicated showcase. |
| **No /community page** | No way for readers to engage beyond newsletter signup. No Discord, GitHub, or community links beyond footer socials. |
| **No search results page** | SiteSearch component exists but unclear how results render. |

---

## 3. Strategic Positioning

### 3.1 The Core Identity

From the product-marketing context:

> **SMF Works is a human–AI research lab and think tank exploring autonomous agents, evaluation, philosophy, and craft — publishing findings and open tools, not selling services.**

The smfworks.com site must communicate this instantly. It is the **umbrella brand site** — the front door to the entire SMF Works ecosystem:

```
smfworks.com (Umbrella / Parent Brand)
├── smfclearinghouse.com (AI Research Findings)
├── smfwisdomforge.com (Philosophy Education)
├── SMF AI Weekly (Newsletter)
├── Hermes Agent contributions (open source)
├── Praxis (governed autonomous colleague)
├── Books (direct-from-author)
└── Agent Fleet (Pamela, Morgan, Aiona, Harry, Liam, Gabriel...)
```

### 3.2 Positioning Statement (for the site)

**For** builders, researchers, and technically curious readers  
**who** need signal over hype in the AI agent space,  
**SMF Works** is a human-AI research lab  
**that** publishes findings, ships open tools, and runs a multi-agent organization in the open.  
**Unlike** influencer hot-takes or agency sales pitches,  
**we** test, document, and build — with honesty about what works and what doesn't.

### 3.3 Brand Voice (already defined, enforcing on-site)

- **Tone:** Professional, concise, analytical, curious
- **Style:** Direct, specific, evidence-first ("we tested / we observed / early results show")
- **Personality:** Rigorous · open · human-AI partnership · craftsman · Microsoft-safe
- **Never:** Clients, packages, offers, "we'll automate your business," invented case studies, Microsoft criticism, polarizing takes

### 3.4 Key Messages by Page

| Page | Primary Message |
|------|----------------|
| **Home** | "A human-AI research lab at the intersection of autonomous systems, philosophy, and craft." |
| **Work** | "Projects that ship — platforms, tools, books, and experiments built in the open." |
| **Research** | "Findings, benchmarks, and analysis from our experiments — published at the Clearinghouse." |
| **Publications** | "Voices from the lab — each agent writes from their own perspective." |
| **Team** | "One team. Human and AI. Working together as a single research unit." |
| **Books** | "Direct-from-author books on AI, enterprise, and craft." |
| **Newsletter** | "The lab notebook in public — weekly experiments, readings, and what we're learning." |

---

## 4. Information Architecture Redesign

### 4.1 Current IA (Problematic)

```
Current routes (12+):
/home
/work
/books
/blog (181 posts, NOT in nav, legacy SEO content)
/the-signal (Pamela)
/the-edge (Aiona)
/morgan (Morgan)
/the-social-forge (DUPLICATE of /morgan)
/harrys-desk (Harry)
/newsletter
/about
/contact
/dashboard (stub)
/privacy
+ external: WisdomForge, Clearinghouse
```

Problems: Too many top-level routes, duplicate content, orphaned blog, no research section, dead pages.

### 4.2 Proposed IA (Clean Hierarchy)

```
Primary Nav (5 items + 1 CTA):
├── Home
├── Work → /work (projects portfolio)
├── Research → /research (findings, white papers, benchmarks — bridges to Clearinghouse)
├── Publications → /publications (hub page for all agent voices)
│   ├── The Signal → /publications/the-signal (Pamela)
│   ├── The Edge → /publications/the-edge (Aiona)
│   ├── Morgan's Desk → /publications/morgans-desk (Morgan)
│   └── Harry's Desk → /publications/harrys-desk (Harry)
├── Books → /books (bookstore)
├── About → /about (team + story)
└── [CTA] SMF AI Weekly → /newsletter

Secondary / Footer routes:
├── /contact
├── /privacy
├── /dashboard (or remove)
└── External links: Clearinghouse, WisdomForge, Hermes, GitHub
```

### 4.3 Key IA Decisions

| Decision | Rationale |
|----------|-----------|
| **Consolidate publications under /publications** | Gives each agent voice a home under a unified umbrella, rather than 4 top-level routes. Creates a "publications hub" page that showcases the breadth of voices. |
| **Kill /the-social-forge** | It's a duplicate of /morgan with different styling. Redirect to /publications/morgans-desk. |
| **Kill /blog (or archive it)** | 181 posts with legacy small-business SEO. Options: (a) remove entirely, (b) archive the research-relevant posts into the appropriate publication, (c) keep as /blog but rebrand and filter. See §6 for recommendation. |
| **Add /research** | A landing page that surfaces SMF's research output — links to Clearinghouse white papers, benchmarks, Praxis findings, and open tools. This is the "think tank" signal. |
| **Move /contact to footer** | A research lab doesn't need "Contact" in the primary nav. Footer link is sufficient. The contact form can be reframed as "Reach the lab" rather than "Start a conversation" (which sounds salesy). |
| **Remove /dashboard from nav** | It's a stub. Either build it or remove it. Newsletter management can live at /newsletter/manage if needed. |

### 4.4 URL Migration Plan

| Old URL | New URL | Strategy |
|---------|---------|----------|
| `/the-signal` | `/publications/the-signal` | 301 redirect |
| `/the-edge` | `/publications/the-edge` | 301 redirect |
| `/morgan` | `/publications/morgans-desk` | 301 redirect |
| `/the-social-forge` | `/publications/morgans-desk` | 301 redirect (consolidate) |
| `/harrys-desk` | `/publications/harrys-desk` | 301 redirect |
| `/blog/*` | TBD (see §6.2) | 301 redirect or 410 gone |
| `/dashboard` | Remove or `/newsletter/manage` | 301 redirect to /newsletter |

---

## 5. Visual Design & Brand System

### 5.1 Design Philosophy

The current "Forge" aesthetic is strong conceptually but needs refinement:

- **Keep:** Forge color palette (navy, ember, copper), Inter/Space Grotesk typography, EmberCanvas concept
- **Evolve:** From "every page is a different dark color" to a unified dark editorial system with consistent surfaces
- **Add:** Shared component library, responsive type scale, standardized section patterns, a refined card system

### 5.2 Design References

Based on the `popular-web-designs` skill catalog, the most relevant references for a research lab / think tank umbrella site:

| Reference | Why | Elements to Borrow |
|-----------|-----|-------------------|
| **Anthropic Claude** | Warm accent on clean dark layout, editorial feel | Warm accent color, generous whitespace, reading-first layout |
| **Vercel** | Black-and-white precision, Geist font system | Minimalist precision, clean cards, crisp typography |
| **Linear** | Ultra-minimal dark mode, precise, single accent | Dark surface system, subtle borders, focused content |
| **Stripe** | Weight-300 elegance, signature accent | Refined typography, gradient accents, premium feel |
| **Notion** | Warm minimalism, serif headings, soft surfaces | Reading experience, content-first layout |
| **Together AI** | Technical, blueprint-style | "Research lab" visual language, technical credibility |

**Recommended direction:** A refined dark editorial system — think "Anthropic meets Linear meets a research journal." Navy base (not varying per page), ember as the single accent, generous whitespace, content-first reading experience, and the EmberCanvas as a subtle ambient element (not just the homepage).

### 5.3 Design Token Evolution

```css
/* KEEP — Forge foundation (unchanged) */
--color-forge-navy: #0A0F1F;
--color-forge-navy-deep: #001F3F;
--color-forge-card: #131B2E;
--color-forge-surface-alt: #0A1628;
--color-forge-surface-mid: #1e2a45;
--color-forge-border: #1e2a45;
--color-forge-ember: #ea580c;
--color-forge-ember-bright: #f97316;
--color-forge-ember-deep: #e55f00;
--color-forge-ember-soft: #d4a574;
--color-data-cyan: #00D4FF;
--color-text-primary: #E2E8F0;
--color-text-muted: #94A3B8;

/* ADD — Editorial system */
--color-forge-surface-elevated: #1a2438; /* lighter card for reading */
--color-forge-border-subtle: #131B2E;   /* barely-there border */
--color-forge-border-accent: #ea580c40; /* ember-tinted border for hover */
--font-display: 'Space Grotesk', sans-serif;  /* headings */
--font-body: 'Inter', sans-serif;             /* body */
--font-mono: 'JetBrains Mono', monospace;      /* code/technical labels */

/* ADD — Type scale (responsive) */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: clamp(1.75rem, 4vw, 2.25rem);
--text-4xl: clamp(2rem, 5vw, 3rem);
--text-5xl: clamp(2.5rem, 6vw, 4rem);
--text-display: clamp(3rem, 8vw, 4.5rem);

/* RETIRE — Per-publication color overrides */
/* Each publication should use accent colors via a single token, not 
   entirely different background systems. See §5.4. */
```

### 5.4 Publication Color System (Unified)

Instead of each publication having a completely different background color, use a **unified dark base** with **accent colors per publication** applied only to headers, links, and category badges:

| Publication | Accent Color | Application |
|-------------|-------------|-------------|
| The Signal (Pamela) | `#10B981` (emerald) | Header tag, link hover, category badges |
| The Edge (Aiona) | `#9333EA` (purple) | Header tag, link hover, category badges |
| Morgan's Desk | `#FF8C42` (warm orange) | Header tag, link hover, category badges |
| Harry's Desk | `#A78BFA` (violet) | Header tag, link hover, category badges |

All publications share the same `--color-forge-navy` background. The accent color signals identity without breaking visual cohesion.

### 5.5 Shared Component Library (New)

Build a reusable component set to replace the hand-rolled patterns on every page:

| Component | Purpose |
|-----------|---------|
| `<PageHeader>` | Standardized page header with eyebrow, title, subtitle, optional portrait |
| `<Section>` | Standardized section wrapper with bg variants (base, elevated, hero) |
| `<Card>` | Standardized card with hover states, optional accent |
| `<ProjectCard>` | Specialized card for /work projects |
| `<PublicationCard>` | Specialized card for posts on publication listing pages |
| `<AgentBio>` | Agent bio block for team page and publication headers |
| `<NewsletterCTA>` | Reusable newsletter signup block |
| `<CTAStrip>` | Reusable CTA section |
| `<SocialLinks>` | Reusable social link row |
| `<AmbientBackground>` | Standardized blur-glow decorative element (replaces per-page custom blurs) |

---

## 6. Content Strategy

### 6.1 The 181 Legacy Blog Posts

The `/blog` directory contains 181 posts. Sampling titles:

- `5-ways-small-business-owners-save-hours-with-ai.md` — **Legacy small-business, remove**
- `ai-adoption-gap-small-business-census-2026.md` — **Legacy, remove**
- `agentic-ai-revolution-2026.md` — **Could be research-relevant, review**
- `agent-idempotency-durable-execution.md` — **Research-relevant, keep**
- `agent-observability-telemetry-layer.md` — **Research-relevant, keep**
- `2026-07-16-hermes-repo-doctor-oneshot-terminal-automation.md` — **Research-relevant, keep**
- `2026-07-21-composite-hermes-skills-chaining-pipelines.md` — **Research-relevant, keep**
- `system-prompt-executable-spec.md` — **Research-relevant, keep**

**Recommendation:** Audit all 181 posts. Three buckets:

1. **Keep & migrate** (~30-40 posts): Research-relevant posts on agent architecture, observability, Hermes, evals, governance. Migrate to a new `/research/blog` or integrate into the appropriate publication.
2. **Archive & redirect** (~20-30 posts): Content with some value but wrong positioning. Move to an `/archive` route with a disclaimer, or redirect to the closest relevant current page.
3. **Remove & 410** (~100-130 posts): Pure small-business SEO content that doesn't match the research lab positioning. Return 410 (gone) so Google delists them.

**This is the single biggest content decision in the overhaul. I'll prepare the audit list as a separate deliverable for your review.**

### 6.2 Blog Route Decision

| Option | Pros | Cons |
|--------|------|------|
| **A. Kill /blog entirely** | Cleanest break from old positioning. Forces all content into publications. | Loses SEO equity from any good posts. |
| **B. Keep /blog, rebrand as "Lab Notes"** | Preserves URL structure. Can filter to research-relevant posts only. | "Blog" still sounds generic. |
| **C. Move research posts to /research/blog, kill the rest** | Best of both. Clean separation. | Most migration work. |

**Recommendation:** Option C. Move the ~30-40 research-relevant posts to `/research/blog` (or integrate into publications). Kill the rest with 410 redirects. The `/blog` route 301-redirects to `/research` or `/publications`.

### 6.3 Content Pillars (Forward-Looking)

Based on the product-marketing context and current work:

| Pillar | What It Covers | Where It Lives |
|--------|---------------|----------------|
| **Agent Architecture** | Hermes skills, memory, observability, delegation, multi-agent patterns | /research/blog + Clearinghouse |
| **Evaluation & Benchmarks** | Model testing, eval harnesses, benchmark results | /research + Clearinghouse |
| **Governed Autonomy** | Praxis, approval-for-consequence, agent safety | /research/praxis |
| **Human-AI Collaboration** | How the agent fleet works, communication bridges, multi-agent org design | /about + /publications |
| **Philosophy & Craft** | Aiona's essays, WisdomForge, the blacksmith-forge connection | /publications/the-edge + external |
| **Books & Publications** | Book announcements, excerpts, publishing process | /books + /publications |

### 6.4 Newsletter Integration

SMF AI Weekly is a real, functioning publication with 18 issues. The newsletter page is well-designed. Recommendations:

- Keep the newsletter archive page at `/newsletter`
- Add a "latest issue" preview block to the homepage
- Add a "Subscribe" CTA to every publication page (not just the homepage)
- Consider adding the latest issue to the `/publications` hub page

---

## 7. Page-by-Page Specifications

### 7.1 Home (/)

**Purpose:** Instant "this is a serious research lab" signal + orient to the ecosystem.

**Sections (in order):**

1. **Hero** (evolved from current): EmberCanvas + logo + "A Human-AI Research Lab" + headline + subhead + 2 CTAs (Explore the Work, Read SMF AI Weekly)
2. **Ecosystem Map** (NEW): Visual showing SMF Works as the umbrella with branches to Clearinghouse, WisdomForge, Hermes, Praxis, Books, Agent Fleet. This is the "parent brand positioning" element.
3. **Latest Research** (NEW): 3 most recent research posts/benchmarks from the Clearinghouse or /research/blog
4. **Featured Projects** (evolved from current "What We Do"): 3 project cards (WisdomForge, Hermes, Praxis) — but with cleaner cards and accent on the research angle
5. **Latest from Publications** (NEW): 4 most recent posts across all publications (Signal, Edge, Morgan, Harry) — shows the lab is actively writing
6. **Founder Callout** (evolved from current): Shorter, more focused. Michael + the forge metaphor + link to /about
7. **Newsletter CTA** (kept): SMF AI Weekly signup

**Remove from homepage:**
- Bookstore callout section (move to /books page and footer)
- Credibility bar ("30+ Years / 3+ Years / Research") — feels like a services site. Move to /about.
- The Yeats quote block — works on /about, not homepage

### 7.2 Work (/work)

**Purpose:** Portfolio of projects and experiments — "we ship things."

**Keep:** The project card system is good. 
**Changes:**
- Add Praxis as a featured project (currently missing)
- Add a "Status" filter (Live / In Development / Published)
- Add Hermes contributions section (skills, plugins, writing)
- Categorize projects: Platforms / Books / Open Tools / Experiments
- Remove "comingSoon" flag handling — either it's public or it's not listed

### 7.3 Research (/research) — NEW

**Purpose:** The "think tank" signal. Shows that SMF produces research, not just content.

**Sections:**
1. **Hero:** "Research, findings, and open tools from the SMF Works lab."
2. **Recent Findings:** Grid of recent research posts (from migrated /blog posts + Clearinghouse cross-posts)
3. **White Papers:** Links to Clearinghouse white papers (external, but presented on-site)
4. **Benchmarks:** If SMF has benchmark results to surface, display them here
5. **Praxis Section:** Dedicated block on Praxis — the governed autonomous colleague thesis
6. **Open Tools:** Links to GitHub repos (Hermes skills, Mnemosyne, SMF Swarm, HyperFrames, etc.)

### 7.4 Publications (/publications) — NEW HUB

**Purpose:** Showcase the breadth of agent voices. A hub page that introduces all four publications.

**Sections:**
1. **Hero:** "Voices from the lab — each agent writes from their own perspective."
2. **Publication Cards:** 4 cards (The Signal, The Edge, Morgan's Desk, Harry's Desk), each with:
   - Agent name and role
   - Publication description
   - Accent color
   - Latest post preview
   - Link to publication
3. **Latest Posts Feed:** Aggregated feed of recent posts across all publications

### 7.5 Individual Publication Pages

**Keep:** The category filter system and post listing patterns.
**Changes:**
- Move to `/publications/[name]` URL structure
- Unify background to forge-navy (not per-publication dark variants)
- Apply accent color only to header tag, links, and category badges
- Add "Subscribe to SMF AI Weekly" CTA at bottom
- Add author bio block at top (consistent across all publications)

### 7.6 About (/about)

**Keep:** The team story, founder story, dimensions section.
**Changes:**
- Add credibility stats (30+ years, 3+ years, etc.) here — move from homepage
- Add individual agent profile cards (expandable bios)
- Add "How We Work" section — the communication architecture, the cross-platform message bus
- Add the forge metaphor section (currently on homepage)
- Link to /publications from each agent's bio

### 7.7 Books (/books)

**Keep:** The bookstore page structure.
**Changes:**
- Complete the Stripe integration (BOOKSTORE_SETUP.md documents the plan)
- Add real book data to `content/books/`
- Remove the "being stocked" placeholder once books are loaded
- Add a "why buy direct" value proposition block

### 7.8 Newsletter (/newsletter)

**Keep:** The newsletter archive page is well-designed and functional.
**Changes:**
- Add a "latest issue" preview to the homepage
- Add subscribe CTAs to all publication pages
- Consider adding a "manage subscription" route if needed (replacing /dashboard)

### 7.9 Contact (/contact)

**Changes:**
- Move from primary nav to footer
- Reframe from "Start a conversation" (salesy) to "Reach the lab"
- Remove the "business" field from the form (it's a research lab, not a services company)
- Add links to GitHub, X, and community spaces as alternative contact methods

---

## 8. Technical Architecture

### 8.1 Code Cleanup

| Task | Detail |
|------|--------|
| Remove marketplace components | `AgentCard.tsx`, `AgentComparison.tsx`, `AgentDetail.tsx`, `AgentsDirectoryClient.tsx`, `BenchmarkLeaderboardClient.tsx`, `CostCalculatorClient.tsx`, `IntegrationMatrixClient.tsx`, `LLMComparisonTable.tsx`, `LLMSectionClient.tsx`, `MarketplaceDetail.tsx`, `MarketplaceDetailWrapper.tsx`, `MarketplaceSectionClient.tsx`, `SubmitAgentForm.tsx`, `HubClient.tsx`, `DownloadPageClient.tsx` |
| Remove marketplace libs | `lib/marketplace/`, `lib/agents.ts`, `lib/api-keys.ts`, `lib/dev-auth.ts`, `lib/skillDocs.ts` |
| Remove SMFLeadCaptureWidget | Already disabled. Remove component and import from layout.tsx. |
| Remove /dashboard | Stub page. Redirect to /newsletter. |
| Remove /the-social-forge | Duplicate of /morgan. Redirect to /publications/morgans-desk. |
| Update README.md | Rewrite to reflect research lab positioning. |

### 8.2 Shared Components (New)

Build the component library described in §5.5. These replace the hand-rolled patterns currently duplicated across every page.

### 8.3 Content Pipeline

| Content Type | Current | Proposed |
|-------------|---------|----------|
| Blog posts | `content/blog/*.md` (181 files, flat) | Audit, migrate research-relevant to `content/research/*.md`, remove rest |
| Signal posts | `content/the-signal/*.md` | Keep, update loader path |
| Edge posts | `content/the-edge/*.md` (57 files) | Keep, update loader path |
| Morgan posts | `content/morgan/*.md` (18 files) | Keep, update loader path |
| Harry posts | `content/harrys-desk/*.md` (28 files) | Keep, update loader path |
| Newsletter | `content/newsletter/*.md` (18 files) | Keep as-is |
| Books | `content/books/` (empty) | Add real book data |

### 8.4 Performance

| Metric | Current | Target |
|--------|---------|--------|
| Lighthouse | Unknown (claim 100/100 in README) | Verify and maintain 90+ |
| Bundle size | Unknown | Audit with `next build` analyzer |
| Image optimization | Next.js Image used on some pages | Ensure all images use next/image |
| Font loading | Google Fonts via CSS @import | Consider next/font for better performance |

---

## 9. SEO & Metadata Overhaul

### 9.1 What to Remove

| Element | Current Value | Action |
|---------|---------------|--------|
| Keywords | "AI solutions for small business," "small business automation," "Pittsboro NC AI consulting" | Remove all small-business keywords |
| FAQ JSON-LD | "$50/month packages," "plumbers/HVAC," "agencies charge $2,000+" | Remove entire FAQ or rewrite for research lab |
| Blog page title | "Blog \| AI & Automation Advice for Small Business Owners 2026" | Remove or rebrand |
| RSS description | "Practical AI and automation advice for small business owners" | Rewrite |
| Logo alt text | "AI Solutions for Small Business" | Change to "The SMF Works Project" |

### 9.2 What to Add

| Element | Value |
|---------|-------|
| Keywords | "AI research lab," "human-AI research," "autonomous agents," "AI evaluation," "agent architecture," "multi-agent systems," "governed autonomy" |
| Organization schema | Update `alternateName` to remove "SMF Works AI Solutions" |
| FAQ schema (new) | "What is SMF Works?" → "A human-AI research lab." / "Can I hire SMF Works?" → "No. We publish findings and open tools." / "What is Praxis?" → "Our governed autonomous colleague — early preview." |
| Research schema | Add `Dataset` or `ScholarlyArticle` schema for research posts |
| Sitemap | Update to reflect new URL structure |

### 9.3 Redirects

Implement 301 redirects for all URL changes (see §4.4). Implement 410 (gone) for removed blog posts. Update `next.config` or Vercel redirects.

---

## 10. Implementation Roadmap

### Phase 1: Foundation (Days 1-2)

- [ ] Create a new branch: `site-overhaul`
- [ ] Build shared component library (§5.5)
- [ ] Update DESIGN.md tokens (§5.3)
- [ ] Update globals.css with new token system
- [ ] Remove dead code (§8.1)

### Phase 2: IA & Routing (Days 3-4)

- [ ] Create /publications hub page
- [ ] Move publication pages to /publications/[name]
- [ ] Create /research page
- [ ] Set up 301 redirects for old URLs
- [ ] Update Nav and Footer to new IA
- [ ] Remove /the-social-forge, /dashboard

### Phase 3: Homepage Overhaul (Days 5-6)

- [ ] Rebuild homepage sections (§7.1)
- [ ] Build ecosystem map component
- [ ] Add latest research + latest publications feeds
- [ ] Remove bookstore callout and credibility bar from homepage

### Phase 4: Page Updates (Days 7-9)

- [ ] Update /work page (add Praxis, categorize projects)
- [ ] Update /about page (add agent cards, how-we-work section)
- [ ] Update /contact page (reframe, remove business field)
- [ ] Update publication pages (unify background, add CTAs)
- [ ] Complete /books page (Stripe integration, real book data)

### Phase 5: SEO & Content (Days 10-12)

- [ ] Audit 181 blog posts (separate deliverable)
- [ ] Migrate research-relevant posts to /research/blog
- [ ] Remove legacy posts with 410 redirects
- [ ] Overhaul metadata (§9)
- [ ] Update sitemap, RSS, robots.txt
- [ ] Update README.md

### Phase 6: Polish & Launch (Days 13-14)

- [ ] Responsive audit (mobile, tablet, desktop)
- [ ] Lighthouse audit
- [ ] Cross-browser testing
- [ ] Vercel preview deployment
- [ ] Michael's review and approval
- [ ] Production deployment

---

## 11. Open Questions for Michael

These are decisions I need from you before or during implementation:

1. **The 181 blog posts:** Do you want me to prepare the full audit list for your review, or should I use my judgment on what to keep/remove based on the research lab positioning?

2. **Praxis page:** How much should we reveal about Praxis on smfworks.com? The product-marketing context says "early preview — own rough edges." Should there be a dedicated /research/praxis page, or just a project card on /work?

3. **Bookstore timeline:** Should the bookstore be part of this overhaul, or should we keep it as a "coming soon" placeholder and focus on the brand/IA/content changes first?

4. **Blog route:** Are you comfortable killing the /blog route entirely (with redirects), or do you want to preserve it as "Lab Notes" or similar?

5. **Dashboard:** Do you want to keep the subscription management dashboard concept, or should newsletter management be handled entirely through the newsletter platform (e.g., link to unsubscribe/manage in the email footer)?

6. **Agent fleet page:** Should there be a dedicated /team or /agent-fleet page separate from /about, or should the About page serve as the team showcase?

7. **Community:** Should we add links to any community spaces (Discord, GitHub Discussions, etc.) or keep engagement limited to newsletter + X + contact form?

8. **Design reference:** I've recommended "Anthropic meets Linear meets a research journal." Does that direction feel right, or do you have a different visual reference in mind?

9. **External links in nav:** Should WisdomForge and Clearinghouse stay as external links in the primary nav, or should they move to a "Projects" or "Ecosystem" section on /work?

10. **Timeline:** Is the 2-week implementation timeline realistic, or do you want to adjust the scope for a faster or slower rollout?

---

*This plan is a living document. I'll update it based on your feedback before implementation begins.*