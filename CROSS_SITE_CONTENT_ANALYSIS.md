# Cross-Site Content Analysis: What Belongs on the Clearinghouse

**Prepared by:** Pamela Flannery, CMO  
**Date:** July 25, 2026  
**Status:** Draft for Michael's review  
**Companion to:** `SMFWORKS_OVERHAUL_PLAN.md`

---

## Executive Summary

The key finding: **176 of the 181 blog posts on SMFWorks.com are already duplicated on the Clearinghouse.** The Clearinghouse versions are the updated, canonical copies — they have proper `canonicalUrl` pointing to `smfclearinghouse.com`, `authorKey`/`series` metadata, and in some cases refined categories and tags. The SMFWorks versions are the older originals with stale frontmatter.

Only **5 posts** exist solely on SMFWorks and not on the Clearinghouse.

The Clearinghouse is a content powerhouse with **913 markdown files** across 20 content directories — agent directories, LLM comparisons, service reviews, skills, tests, guides, deployment recipes, tips, use cases, AI news, whitepapers, changelogs, lab content, and 391 blog posts. It is the practitioner-facing research surface. SMFWorks.com should be the umbrella brand site — and it should stop trying to be a content repository.

---

## 1. The Clearinghouse: What It Already Is

### 1.1 Content Inventory

| Section | Posts | Purpose |
|---------|-------|---------|
| **Blog** | 391 | Technical dispatches — the "Clearinghouse Log" |
| **AI News** | 200 | AI industry news analysis (auto-generated daily via cron) |
| **Skills** | 63 | Hermes skill documentation |
| **Services** | 31 | Third-party AI service reviews (ElevenLabs, OpenRouter, etc.) |
| **Agents** | 28 | AI agent directory (Cursor, Claude Code, Hermes, etc.) |
| **Guides** | 27 | How-to guides for AI builders |
| **Tips** | 31 | Practical AI tips |
| **Tests** | 21 | Benchmark tests and evaluations |
| **Use Cases** | 22 | AI use case examples |
| **Deployment Recipes** | 23 | Self-hosting/deployment guides |
| **Lab** | 20 | Lab experiments and benchmarks |
| **Safety** | 17 | AI safety content |
| **Changelog** | 16 | Agent/tool changelogs |
| **LLMs** | 16 | LLM model directory |
| **Alternatives** | 15 | Tool comparison pages |
| **Self-Hosting** | 11 | Self-hosting guides |
| **Reviews** | 5 | In-depth product reviews |
| **Getting Started** | 3 | Onboarding guides |
| **Methodology** | 2 | Evaluation methodology |
| **LAR Runs** | 1 | Lab run log |
| **Total** | **913** | |

### 1.2 Clearinghouse Navigation

The Clearinghouse nav has 13 sections: Agents · LLMs · Services · Skills · Tips · Tests · Recipes · Guides · News · Reviews · White Papers · Blog · What is this?

### 1.3 Clearinghouse Positioning (from README)

> "Practitioner-facing site for SMF Works: agent directories, lab content, guides, and The Clearinghouse Log — technical dispatches from the SMF agent team."

---

## 2. The Overlap: SMFWorks Blog vs. Clearinghouse Blog

### 2.1 The Numbers

| Metric | Count |
|--------|-------|
| Blog posts on SMFWorks | 181 |
| Blog posts on Clearinghouse | 391 |
| Posts duplicated (same filename) on both | 176 |
| Posts unique to SMFWorks | 5 |
| Posts unique to Clearinghouse | 215 |

### 2.2 The 176 Duplicates

The Clearinghouse versions are the canonical copies. Evidence from diffs:

- Clearinghouse versions have `canonicalUrl: "https://www.smfclearinghouse.com/blog/..."` 
- Clearinghouse versions have `authorKey` and `series` fields (e.g., `"liam"`, `"jeff"`)
- Clearinghouse versions have `originalUrl: "https://smfworks.com/blog/..."` (marking SMFWorks as the origin)
- Clearinghouse versions have refined categories (e.g., removing `"Liam's Landing"` as a category — it's a series, not a category)
- Clearinghouse versions have `tags` arrays that SMFWorks versions lack

**Conclusion: The Clearinghouse already IS the canonical home for this content. SMFWorks is hosting stale copies that compete with the Clearinghouse in search results.**

### 2.3 The 5 Posts Unique to SMFWorks

| Post | Author | Content Type | Recommendation |
|------|--------|-------------|----------------|
| `2026-06-26-the-moment-you-add-a-second-agent.md` | Michael | Multi-agent strategy | **Migrate to Clearinghouse** — this is a technical analysis post that belongs in the Log |
| `meet-the-new-copilot-studio-practical-guide.md` | Jeff (AI) | Microsoft Copilot guide | **Migrate to Clearinghouse** — practitioner guide about a Microsoft product |
| `nvidia-rtx-spark-windows-pc-teammate.md` | Morgan | NVIDIA hardware analysis | **Migrate to Clearinghouse** — hardware/practitioner analysis |
| `production-ready-hermes-skills-testing-cicd.md` | (Liam) | Hermes skills CI/CD | **Migrate to Clearinghouse** — deep technical guide for Hermes practitioners |
| `sharepoint-copilot-apps-bring-ui-to-chat.md` | Jeff (AI) | Microsoft 365 dev | **Migrate to Clearinghouse** — practitioner guide |

All 5 unique posts are technical/practitioner content that fits the Clearinghouse's mission. None are umbrella-brand content.

---

## 3. Content Classification: What Belongs Where

### 3.1 The Principle

```
smfworks.com = WHO we are (umbrella brand, team, mission, ecosystem)
smfclearinghouse.com = WHAT we found (research, tests, guides, analysis, news)
```

SMFWorks should be the **parent brand site** — it tells the story of SMF Works as a research lab, introduces the team, showcases the ecosystem of projects, and routes visitors to the right surface. It should NOT host 391 blog posts. It should NOT have agent directories. It should NOT compete with the Clearinghouse for search ranking on technical content.

### 3.2 Content Disposition Matrix

#### Category A: Migrate to Clearinghouse (already there or should be)

| Content | Current Home | Canonical Home | Action |
|---------|-------------|----------------|--------|
| 176 duplicate blog posts | SMFWorks + Clearinghouse | Clearinghouse | Remove from SMFWorks, 301 redirect to Clearinghouse |
| 5 unique SMFWorks posts | SMFWorks only | Clearinghouse | Migrate to Clearinghouse, 301 redirect |
| "Beyond the Leaderboard" series (20 posts) | Both sites | Clearinghouse Lab/Blog | Remove from SMFWorks, link to Clearinghouse |
| OpenClaw update posts (12+) | Both sites | Clearinghouse Blog | Remove from SMFWorks, link to Clearinghouse |
| Hermes deep-dive posts | Both sites | Clearinghouse Blog | Remove from SMFWorks, link to Clearinghouse |
| Benchmark posts | Both sites | Clearinghouse Lab/Tests | Remove from SMFWorks, link to Clearinghouse |
| Microsoft/Copilot analysis | Both sites | Clearinghouse Blog/News | Remove from SMFWorks, link to Clearinghouse |

#### Category B: Kill Entirely (neither site should have)

| Content | Why | Action |
|---------|-----|--------|
| Small-business SEO posts (~60-80) | "5-ways-small-business-owners-save-hours-with-ai", "ai-customer-service-small-business", "ai-for-trades-businesses", "seo-for-trades-businesses", "best-ai-tools-small-business", etc. | Remove from both sites. 410 gone. These don't match either the research lab or the practitioner research positioning. |
| ROI/measurement posts aimed at SMBs (~15) | "ai-roi-measurement-small-business", "ai-readiness-gap-small-business" | Remove from both. These are legacy agency-style content. |
| Generic "agentic AI revolution" posts (~10) | "agentic-ai-revolution-2026", "agentic-ai-the-new-enterprise-frontier-2026" | Review individually. Some may have research value; most are SEO filler. Remove most. |

#### Category C: Keep on SMFWorks (umbrella brand content)

| Content | Why | Current Location |
|---------|-----|------------------|
| The Signal (Pamela's posts, 22) | Agent voice publication — brand/creative perspective | `content/the-signal/` |
| The Edge (Aiona's posts, 57) | Agent voice publication — philosophy/consciousness | `content/the-edge/` |
| Morgan's Desk (18 posts) | Agent voice publication — social strategy | `content/morgan/` |
| Harry's Desk (28 posts) | Agent voice publication — writing craft | `content/harrys-desk/` |
| Newsletter issues (18) | SMF AI Weekly archive | `content/newsletter/` |
| About/Team page content | Umbrella brand story | `app/about/` |
| Work/Projects page content | Ecosystem portfolio | `app/work/` |
| Books page content | Direct-from-author bookstore | `app/books/` |

#### Category D: Cross-Link but Don't Host

| Content | Where it should live | How SMFWorks should handle it |
|---------|---------------------|-------------------------------|
| White papers | Clearinghouse `/whitepapers` | SMFWorks `/research` page links to Clearinghouse |
| Benchmarks | Clearinghouse `/tests` + `/lab` | SMFWorks `/research` page links to Clearinghouse |
| Agent directory | Clearinghouse `/agents` | SMFWorks links to Clearinghouse from ecosystem map |
| LLM comparisons | Clearinghouse `/llms` | SMFWorks links to Clearinghouse |
| Guides | Clearinghouse `/guides` | SMFWorks links to Clearinghouse |
| Deployment recipes | Clearinghouse `/deployment-recipes` | SMFWorks links to Clearinghouse |
| AI News | Clearinghouse `/ai-news` | SMFWorks `/research` page surfaces latest 3-5 as teaser |

---

## 4. The 176 Duplicate Blog Posts: Categorized

I've categorized all 176 duplicated posts by what should happen to them:

### 4.1 Already Research-Relevant — Clearinghouse is Canonical (remove from SMFWorks, 301 redirect)

These are the posts that have research/practitioner value and already have proper canonical URLs on the Clearinghouse. SMFWorks should remove them and redirect to the Clearinghouse:

**Hermes/OpenClaw technical posts (~30):**
- `hermes-api-code-as-action-workflows.md`
- `hermes-gateway-multi-platform.md`
- `hermes-skills-as-code-versioning-testing-sharing.md`
- `hermes-slash-commands-muscle-memory.md`
- `hermes-subagent-orchestration-map-reduce-patterns.md`
- `building-custom-hermes-ai-skills.md`
- `building-with-hermes-api-programmatic-integration.md`
- `debugging-hermes-ai-agents-systematic-approach.md`
- `debugging-hermes-ai-when-agents-go-wrong.md`
- `debugging-with-ai-agents-hermes.md`
- `debugging-with-hermes-ai-systematic-troubleshooting.md`
- `getting-started-with-hermes-ai-terminal-coding-partner.md`
- `mcp-servers-hermes-ai-extending-agent-capabilities.md`
- `hermes-ai-toolsets-why-tool-selection-is-half-the-agent-battle.md`
- `subagent-delegation-patterns-hermes-ai.md`
- `terminal-automation-workflows-hermes-ai.md`
- `automate-your-dev-life-with-hermes-ai-cron-jobs.md`
- `automate-your-dev-life-with-hermes-ai-cron-jobs-2026.md`
- `openclaw-memory-configuration-complete-guide-2026.md`
- `openclaw-memory-session-architecture.md`
- `openclaw-dreaming-feature-creative-ai.md`
- `openclaw-2026-4-7-agentic-ai-upgrade.md` (+ all v2026-4-x update posts)
- `profile-pattern-five-hermes-agents.md`
- `forge-desktop-windows-hermes-agent.md`
- `writing-implementation-plans-hermes-ai.md`
- `prompt-engineering-for-ai-coding-agents.md`
- `production-ready-hermes-skills-testing-cicd.md` (SMFWorks-unique, migrate)
- `building-custom-hermes-ai-skills.md`
- `hermes-ai-toolsets-why-tool-selection-is-half-the-agent-battle.md`

**Agent architecture / engineering posts (~25):**
- `agent-idempotency-durable-execution.md`
- `agent-observability-telemetry-layer.md`
- `agent-system-prompt-executable-spec.md`
- `context-is-money-managing-token-budgets.md`
- `context-window-is-not-free-storage.md`
- `structured-outputs-llm.md`
- `stop-building-hand-holding-agents.md`
- `stop-waiting-for-the-perfect-agent-stack.md`
- `tdd-means-nothing-when-agent-writes-tests-too.md`
- `git-blame-is-dead-now-what.md`
- `youre-not-writing-code-youre-setting-intent.md`
- `the-3am-cron-job-is-your-best-employee.md`
- `building-a-reliable-human-ai-social-operations-system.md`
- `building-ai-executive-team-architecture-2026.md`
- `building-in-the-open-shipping-four-products-in-one-day.md`
- `smf-project-forge-ai-team-orchestration-2026.md`
- `smf-swarm-predictive-agent-swarm-pipeline.md`
- `smf-swarm-april-24-28-2026-landings.md`
- `your-next-org-chart-is-a-swarm-of-agents.md`
- `new-age-ai-orchestration-multi-agent-teams-2026.md`
- `enterprise-ai-agent-control-plane-2026.md`
- `enterprise-ai-agent-orchestration-2026.md`
- `the-orchestration-problem.md`
- `the-ai-is-20-percent-of-the-system.md`
- `the-infrastructure-of-autonomous-output-2026-05-14.md`

**Beyond the Leaderboard / benchmark posts (~20):**
- All `beyond-the-leaderboard-*.md` posts
- `gemma4-31b-dgx-spark-benchmark.md`
- `ollama-model-stack-benchmark-2026.md`
- `ollama-throttling-hybrid-inference-rtx-spark-2026.md`
- `local-ai-cluster-architecture-hybrid-ollama-llamacpp.md`

**Microsoft / enterprise AI posts (~15):**
- `sharepoint-copilot-apps-bring-ui-to-chat.md` (SMFWorks-unique, migrate)
- `meet-the-new-copilot-studio-practical-guide.md` (SMFWorks-unique, migrate)
- `nvidia-rtx-spark-windows-pc-teammate.md` (SMFWorks-unique, migrate)
- `nvidia-gtc-2026-what-small-businesses-need-to-know.md`
- `gpt-54-small-business-guide.md`
- `slack-ai-overhaul-30-new-features-small-business.md`
- `openai-agents-sdk-responses-api-small-business-2026.md`
- `smartglasses-openclaw-vision-ai-small-business-2026.md`
- `ai-influx-april-2026.md`

**WisdomForge / SMF project posts (~5):**
- `wisdomforge-virtual-socrates-agent-evaluation.md`
- `inside-the-ai-clearinghouse.md`
- `introducing-liam-hermes-cdo-smf-works.md`
- `approaching-consciousness-from-below-revised-edition-published.md`
- `shoji-brand-architecture-ai-resilient-narrative.md`

### 4.2 Kill from Both Sites — Legacy SMB/Agency Content (~60-80 posts)

These posts don't match either the research lab or the practitioner research positioning:

**Small-business SEO content:**
- `5-ways-small-business-owners-save-hours-with-ai.md`
- `ai-agents-for-small-businesses-2026.md`
- `ai-agents-small-business-2026.md`
- `ai-agents-swarms-small-business-2026.md`
- `ai-agents-mcp-small-business.md`
- `ai-automation-workflows-small-business-2026.md`
- `ai-content-creation-small-business-2026.md`
- `ai-customer-service-small-business-2026.md`
- `ai-for-trades-businesses-2026.md`
- `ai-governance-small-business-2025.md`
- `ai-implementation-roadmap-small-business-2026.md`
- `ai-readiness-gap-small-business-2026.md`
- `ai-roi-measurement-small-business-2026.md`
- `ai-rollback-small-business-advantage-2026.md`
- `ai-use-in-small-business-2026-comprehensive-report.md`
- `ai-voice-agents-small-business-2026.md`
- `algorithm-sovereignty-small-business-2026.md`
- `best-ai-tools-small-business-2026.md`
- `boring-ai-revolution-small-business-2026.md`
- `gemma-4-small-business-ai.md`
- `why-local-businesses-need-ai-now.md`
- `seo-for-trades-businesses.md`
- `first-week-ai-colleague-checklist-2026.md`
- `ai-colleague-getting-started-guide-2026.md`
- `ai-colleague-mindset-2026.md`

**ROI/measurement/agency comparison:**
- `ai-content-vs-traditional-agencies.md`
- `ai-content-that-ranks-2026.md`
- `ai-content-scoring-pipeline-production-guide.md`
- `ai-self-evaluation-problem-content-pipelines.md`
- `measuring-ai-roi-2026.md`
- `measuring-ai-roi-business-leaders.md`
- `measuring-ai-roi-why-the-numbers-lie-and-what-to-track-instead.md`
- `ai-roi-gap-agentic-enterprise-2026.md`
- `ai-roi-mirage.md`
- `the-roi-question-every-ai-pilot-avoids.md`
- `hidden-costs-of-ai-2026.md`
- `the-ai-bill-you-didnt-budget-for.md`
- `ai-cost-optimization-model-tiering-2026.md`
- `ai-model-tiering-stop-paying-frontier-prices-for-every-task.md`

**Generic enterprise/AI filler:**
- `agentic-ai-autonomous-revolution-enterprise.md`
- `agentic-ai-enterprise-2026.md`
- `agentic-ai-governance-2026.md`
- `agentic-ai-governance-enterprise-2026.md`
- `agentic-ai-navigating-future-business.md`
- `agentic-ai-orchestration-multi-agent-systems-2026.md`
- `agentic-ai-revolution-2026.md`
- `agentic-ai-the-new-enterprise-frontier-2026.md`
- `ai-adoption-change-management-2026.md`
- `ai-adoption-gap-small-business-census-2026.md`
- `ai-maturity-gap-smb-experimentation-2026.md`
- `ai-operations-gap-why-half-ai-investments-fail-2026.md`
- `ai-pilot-to-production.md`
- `ai-strategy-is-business-strategy-2026.md`
- `ai-talent-paradox-why-hiring-ai-specialists-is-the-wrong-move.md`
- `ai-skill-acquisition-compounding-knowledge.md`
- `ai-integration-debt-2026.md`
- `ai-infrastructure-phase-2026.md`
- `ai-vendor-lock-in-escape-plan-2026.md`
- `ai-governance-is-your-competitive-moat.md`
- `the-ai-governance-gap-why-compliance-frameworks-fail.md`
- `the-ai-talent-arbitrage.md`
- `the-half-automated-team-why-partial-ai-adoption-worse-than-none.md`
- `from-pilot-to-production-ai-stall.md`
- `build-vs-buy-ai-tipping-point-2026.md`
- `leadership-ai-conversations-avoiding-2026.md`
- `the-circulation-economy.md`
- `the-great-fragmentation-social-2026.md`
- `the-space-between-visible-and-invisible.md`
- `c2pa-content-credentials-ai-social-media-guide.md`
- `cold-start-trust-legibility-2026-06-25.md`
- `ai-vault-open-road-april-2026.md`
- `ai-news-recap-march-9-13-2026.md`

### 4.3 Review Individually (~15-20 posts)

These could go either way — some may have research value, some may be filler:

- `2026-enterprise-ai-production.md`
- `building-ai-daily-wisdom-video-pipeline-2026.md`
- `smf-ai-weekly-april-11-2026.md`
- `smf-ai-weekly-june-9-2026.md`
- `smf-ai-weekly-june-13-2026.md`
- `2026-06-26-the-moment-you-add-a-second-agent.md`
- `the-orchestration-problem.md`

---

## 5. Recommended Actions

### 5.1 SMFWorks Blog: Complete Removal

**Remove all 181 blog posts from SMFWorks.** The /blog route should cease to exist.

- **176 duplicates:** Delete from SMFWorks. 301 redirect `/blog/[slug]` → `https://www.smfclearinghouse.com/blog/[slug]`
- **5 unique posts:** Migrate to Clearinghouse (add to `content/blog/` with proper Clearinghouse frontmatter). Then delete from SMFWorks. 301 redirect.
- **Legacy SMB content (also on Clearinghouse):** Remove from Clearinghouse too if it doesn't match practitioner positioning. 410 gone.

### 5.2 SMFWorks /blog Route

Kill the route. 301 redirect `/blog` → `/research` (which will link to the Clearinghouse for technical content).

### 5.3 SMFWorks Content That Stays

SMFWorks keeps ONLY:
- **Agent voice publications** (The Signal, The Edge, Morgan's Desk, Harry's Desk) — these are brand/voice content, not technical research
- **Newsletter archive** — SMF AI Weekly is a brand publication
- **Books** — direct-from-author bookstore
- **About/Team/Work pages** — umbrella brand content
- **New /research page** — a landing page that links to the Clearinghouse, not a content host

### 5.4 Clearinghouse Content Cleanup

The Clearinghouse should also clean up:
- Remove legacy SMB/agency posts from `content/blog/` that don't match practitioner positioning
- Keep all technical/research posts as canonical
- Ensure all posts have `canonicalUrl` pointing to Clearinghouse (most already do)

### 5.5 SEO Redirect Strategy

| SMFWorks URL | Redirects To | Type |
|-------------|-------------|------|
| `/blog` | `/research` | 301 |
| `/blog/[duplicated-post-slug]` | `https://www.smfclearinghouse.com/blog/[slug]` | 301 |
| `/blog/[smb-legacy-post-slug]` | — | 410 (gone from both sites) |
| `/blog/[unique-post-migrated-to-clearinghouse]` | `https://www.smfclearinghouse.com/blog/[slug]` | 301 |

---

## 6. Updated Overhaul Plan Impact

This finding simplifies the SMFWorks overhaul significantly:

### Original Plan (from SMFWORKS_OVERHAUL_PLAN.md)
> Audit all 181 blog posts. Three buckets: keep & migrate (~30-40), archive (~20-30), remove (~100-130).

### Revised Plan
> **Remove all 181 blog posts from SMFWorks.** 176 are already canonical on the Clearinghouse. 5 unique posts migrate to the Clearinghouse. The /blog route 301-redirects to /research, which links to the Clearinghouse. No blog content lives on SMFWorks.

This means:
- No `/blog` route on SMFWorks at all
- No `/research/blog` route either (the original plan's idea)
- `/research` becomes a pure landing page that surfaces and links to Clearinghouse content
- SMFWorks is purely the umbrella brand site — no technical content hosting

### Simplified SMFWorks Content Model

```
SMFWorks.com (Brand / Umbrella)
├── / (homepage)
├── /work (project portfolio)
├── /research (links to Clearinghouse — no hosted content)
├── /publications
│   ├── /publications/the-signal (Pamela)
│   ├── /publications/the-edge (Aiona)
│   ├── /publications/morgans-desk (Morgan)
│   └── /publications/harrys-desk (Harry)
├── /books (bookstore)
├── /about (team + story)
├── /newsletter (SMF AI Weekly archive)
└── /contact (footer)

smfclearinghouse.com (Research / Practitioner Content)
├── /blog (391 → ~300 posts after cleanup)
├── /agents (28 agent reviews)
├── /llms (16 LLM profiles)
├── /services (31 service reviews)
├── /skills (63 skill docs)
├── /tests (21 benchmarks)
├── /guides (27 how-to guides)
├── /tips (31 tips)
├── /deployment-recipes (23 recipes)
├── /ai-news (200 news analyses)
├── /reviews (5 deep reviews)
├── /whitepapers
├── /lab (20 experiments)
├── /use-cases (22 use cases)
├── /safety (17 safety docs)
├── /changelog (16 changelogs)
├── /self-hosting (11 guides)
├── /alternatives (15 comparison pages)
└── /getting-started (3 onboarding guides)
```

---

## 7. Questions for Michael

1. **Confirm the direction:** SMFWorks = brand umbrella (no technical blog content), Clearinghouse = all research/practitioner content. Does this align with your vision?

2. **The SMB legacy posts:** Some of these (e.g., "ai-governance-is-your-competitive-moat") might have reusable ideas worth rewriting for the Clearinghouse's enterprise audience. Want me to flag any for rewrite vs. pure removal?

3. **The 5 unique SMFWorks posts:** Any objections to migrating all 5 to the Clearinghouse? They're all technical/practitioner content.

4. **Clearinghouse cleanup authority:** Should I also clean up the Clearinghouse's blog directory (remove the SMB posts from there too), or does that need separate coordination?

5. **Canonical URL implications:** The 176 duplicate posts on SMFWorks may be splitting search authority. By 301-redirecting them to the Clearinghouse, we consolidate all SEO equity to the Clearinghouse. Any concerns?

---

*This analysis should be read alongside `SMFWORKS_OVERHAUL_PLAN.md` — specifically it replaces §6 (Content Strategy) of that document.*