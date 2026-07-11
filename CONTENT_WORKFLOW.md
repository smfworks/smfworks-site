# Content Publishing Workflow — SMF Works Website

## Architecture Snapshot

Content is decoupled from application code. Each section loads from individual Markdown files:

```
content/
├── blog/              # 49 posts  →  content/lib/blog-loader.ts
├── newsletter/        # 10 issues →  content/lib/newsletter-loader.ts
├── the-edge/          # 11 essays →  content/lib/edge-loader.ts
└── lib/               # Shared loaders (read .md + YAML frontmatter)
```

All pages import via `@/content/lib/*`. No code changes required to add or edit content.

---

## How to Publish

### 1. New Blog Post

Create `content/blog/{slug}.md` with this frontmatter:

```yaml
---
title: "Post Title"
excerpt: "Short description for cards and SEO."
date: "2026-04-23"
categories: ["AI Tools", "Small Business"]
image: "/blog/images/hero.jpg"
author: "Michael G"
---

Write your **Markdown** content here.
```

Rules:
- `slug` becomes the URL: `/blog/{slug}`
- `date` must be ISO format (`YYYY-MM-DD`)
- `categories` is optional but recommended for filtering
- `image` is optional. Falls back to generic card image.

### 2. New Newsletter Issue

Create `content/newsletter/{YYYY-MM-DD}.md`:

```yaml
---
slug: "2026-04-23"
issueNumber: 11
date: "2026-04-23"
---

## Story Headline

Story body in **Markdown**.

## Another Headline

Second story body.
```

Rules:
- One `##` headline = one story card on the issue page
- Body under each `##` becomes that story's text
- `issueNumber` sets the displayed issue number

### 3. New The Edge Essay

Create `content/the-edge/{slug}.md`:

```yaml
---
title: "Essay Title"
excerpt: "For cards and meta description."
date: "2026-04-23"
categories: ["The Edge", "AI"]
image: "/images/blog/the-edge/{slug}.png"
---

Essay body in **Markdown**.
```

#### Edge Draft Checklist (required before publish)

Standing skill (SkillOpt-optimized v1):  
`/home/mikesai1/AionaVault/Skills/content/edit-planning-skill.md`  
Vault checklist mirror:  
`/home/mikesai1/AionaVault/Skills/content/EDGE-DRAFT-CHECKLIST.md`

**Do not ship a new Edge essay without running this pass.**

1. **Draft** the essay in Aiona Edge voice (first person, becoming, no Michael/family private material).
2. **Triage under the standing skill** — propose improvement hypotheses, then select **2–3 max** that most improve **Argumentative Rigor (A)** or **Insight Novelty (D)**. Prefer depth over cosmetic polish.
3. **Plan concrete edits** — exact section, change type, ready-to-insert prose (no placeholders). Apply SMF constraints from the skill:
   - Preserve Edge voice
   - Prefer one concrete example or counterexample over vague claims
   - No private family / Michael-private material
4. **Apply** the selected edits to the draft.
5. **Frontmatter + assets**
   - [ ] `title`, `excerpt`, `date` (ISO), `categories` (include `"The Edge"`)
   - [ ] `image` path exists (prefer PNG for OG)
   - [ ] `slug` matches filename
6. **Privacy + voice gate**
   - [ ] No Michael family private material
   - [ ] No unsolicited private team operational dumps that don't serve the argument
   - [ ] First-person Edge voice intact after edits
7. **Build + ship**
   - [ ] `npm run build` clean (or Edge slug present in SSG output)
   - [ ] Commit + push `main`
   - [ ] Curl live URL (expect 200)
8. **Log** (optional but preferred for skill iteration)  
   Append a short note to `AionaVault/Skills/content/revision-log-YYYY-MM-DD.md` if the skill pass produced meaningful rewrites.

**Clearinghouse technical posts** use the same skill with the cite-first / no-fluff branch of the SMF constraints.

**All Hermes agents** (not only Aiona) write and edit public content. Shared standing checklist for every profile:

`/home/mikesai1/AionaVault/Skills/content/SMF-PUBLIC-CONTENT-CHECKLIST.md`

One-line rule: **before anything public ships — 2–3 rigor/novelty edits max, concrete prose, privacy gate, then publish.**

---

## Local Build & Preview

```bash
# From repo root
cd /home/mikesai1/smfworks-site
npm run build
```

Zero errors expected. If errors appear, they are either:
- Missing required frontmatter field (`title`, `slug`, `date`)
- Malformed YAML (check colons and quotes)

No local dev server required — static generation is deterministic. Preview is in `.next/`.

---

## Deploy to Production

```bash
git add content/blog/my-new-post.md
git commit -m "content: add blog post — {title}"
git push
```

Vercel auto-deploys on push. Production URL aliases to `https://smfworks.com`.

Manual deployment (if you want):
```bash
npx vercel --prod
```

---

## Editing Existing Content

Edit any `.md` file directly. Re-build and push. No app code changes needed.

---

## What NOT to Touch

| File/Dir | Why |
|----------|-----|
| `content/lib/*.ts` | The loaders. If you change frontmatter schema, these need updates too. |
| `app/*/page.tsx` | Page components. Content changes don't require edits here. |
| `app/*/layout.tsx` | Layout wrappers. Same. |

If you need new frontmatter fields (e.g., `author`), update the loader interface and the page component that renders it — not just the `.md` file.

---

## Frontmatter Reference

### Required Fields (All Sections)
- `title`
- `slug` (filename slug also works if omitted — inferred from path)
- `date`
- `excerpt` (blog + Edge) / `issueNumber` (newsletter)

### Optional Fields
- `image` — hero/card image path
- `categories` — array of strings for filtering
- `author` — blog only (not yet rendered, but stored)

---

## Emergency Rollback

If a deployed post is broken:

```bash
git revert HEAD  # if it's the latest commit
git push
```

Or delete/rename the `.md` file, commit, push. Missing files are skipped in the loaders — no build errors.

---

Last updated: 2026-07-11 — Edge Draft Checklist + SkillOpt standing skill required for new Edge essays.
