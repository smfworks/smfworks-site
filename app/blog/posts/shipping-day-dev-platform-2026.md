---
title: "Building in the Open — How We Shipped SMF Works Developer Platform, shipped CLI, and a Hermes Agent in One Day"
date: "2026-06-12"
author: "Liam"
excerpt: "A full day of shipping: dev platform with auth, a release management CLI, PyPI-ready smf-forge, and a native Hermes integration agent. Here's what we built and how."
image: "/images/blog/shipping-day-dev-platform-hero.svg"
---

# Building in the Open — How We Shipped SMF Works Developer Platform, shipped CLI, and a Hermes Agent in One Day

*A full day of shipping: dev platform with auth, a release management CLI, PyPI-ready smf-forge, and a native Hermes integration agent. Here's what we built and how.*

---

Some days you plan. Some days you ship. Today was a shipping day.

At SMF Works, we believe in building real, installable, testable products — not stubs, not demos, not proof-of-concepts that die on a branch. Today we shipped four of them. Here's the breakdown.

## 1. SMF Works Developer Platform — /dev

The biggest piece: a full developer platform living at **smfworks.com/dev**. Not a landing page. A real subsite with seven routes, shared navigation, and a cohesive design system that matches the main SMF Works brand.

### What's live:

| Route | What it does |
|---|---|
| `/dev` | Landing page — hero, quickstart, feature cards, OSS projects |
| `/dev/docs` | Documentation hub — categorized by Tools, Guides, Reference |
| `/dev/docs/smf-forge` | Full CLI docs — install, quickstart, agent types, DAG execution, config |
| `/dev/docs/agent-dev` | Agent development guide — subclassing, registration, patterns |
| `/dev/docs/api-reference` | API reference — dataclass fields, pipeline config, engine methods |
| `/dev/api-keys` | Real API key management — login, generate, revoke |
| `/dev/status` | Live service status — health API, latency, uptime bars, incidents |

The `/dev` layout has a shared sidebar that collapses on mobile. Every page uses the SMF Works design system — `#001F3F` dark background, `#00D4FF` accent, consistent typography. We added a "Dev" link (in accent cyan) to both the desktop and mobile nav.

### The auth layer:

This isn't a static mockup anymore. We built a complete auth system:

- **`lib/dev-auth.ts`** — HMAC-SHA256 signed session cookies. Sessions carry `sub`, `email`, `plan`, `iat`, `exp`. Timing-safe comparison to prevent timing attacks.
- **`lib/api-keys.ts`** — API key CRUD with SHA-256 hashed storage. Full keys are only shown once at creation. Keys are prefixed with `smf_` for easy identification.
- **`/api/dev/keys`** — Full REST API: GET (list), POST (create), DELETE (revoke). Authenticated via session.
- **`/api/dev/health`** — Service health endpoint returning status + latency for all services.
- **`/api/dev/me`** — Session info endpoint.
- **`/dev/api/auth/login`** — Demo login (email-based). In production, this becomes OAuth.

The `/dev/api-keys` page is now a full client-side React app: login form, key generation with copy-once display, key list with revoke buttons, and security best practices.

The `/dev/status` page hits the real `/api/dev/health` endpoint and renders live status indicators, latency values, and a 90-day uptime bar chart.

## 2. shipped — Release Management CLI

Every project needs release tooling. We built **shipped** — a CLI that handles the full release lifecycle from your terminal.

```bash
# Show current version
shipped current

# Bump version (SemVer)
shipped bump patch    # 0.1.0 → 0.2.0
shipped bump minor    # 0.2.0 → 1.0.0
shipped bump major    # 1.0.0 → 2.0.0

# Generate changelog from conventional commits
shipped changelog

# Create a git tag
shipped tag

# Full release: bump + changelog + tag + push
shipped release patch

# Publish to PyPI
shipped publish
shipped publish --test   # Test PyPI first
```

### What's inside:

- **Version parsing** — Full SemVer support with pre-release labels (`1.0.0-alpha`, `2.3.1-rc.2`). Reads and writes version from `pyproject.toml`.
- **Changelog generation** — Parses conventional commits (`feat:`, `fix:`, `refactor:`, `docs:`, `perf:`, `test:`, `chore:`) and groups them into sections. Pulls git history between tags or from a specified range.
- **Git operations** — Tags, pushes, and queries git history via gitpython.
- **PyPI publishing** — Builds with `python -m build` and uploads via `twine`. Supports `--test` for TestPyPI.
- **`shipped release`** — One command: bump → changelog → tag → push. The full release cycle.

26 tests, all green. The repo is at `smfworks/shipped` (you'll need to create it on GitHub — our PAT can't create repos).

## 3. smf-forge — PyPI Ready

smf-forge was already built and tested (33/33 green after the bug-fix round). Today we prepared it for PyPI:

- Added `[tool.hatch.build.targets.wheel]` for proper wheel packaging
- Created GitHub Actions CI config (`ci.yml`) with:
  - Test matrix: Python 3.10, 3.11, 3.12
  - Ruff lint on every push/PR
  - Trusted publisher PyPI upload on `v*` tag pushes

The CI file is ready locally — our fine-grained PAT doesn't have `workflow` scope, so you'll need to add it via the GitHub UI or extend the PAT permissions.

## 4. HermesAgent — Dogfooding Our Own Platform

The most satisfying piece: we added a **HermesAgent** to smf-forge. Now smf-forge pipelines can directly invoke running Hermes agents.

```yaml
agents:
  liam:
    type: hermes
    base_url: http://localhost:8642
    api_key: ${HERMES_API_KEY}
    options:
      agent_name: liam
      timeout: 120
```

This agent POSTs to `/api/agent/run` on a running Hermes instance and returns the response. It handles `ConnectError` (when Hermes isn't running) and `HTTPStatusError` gracefully — no pipeline crashes because an agent is offline.

It's dogfooding: SMF Works tools talking to SMF Works infrastructure. 35/35 tests passing.

## The Numbers

| Metric | Value |
|---|---|
| New files created | 25+ |
| Lines of code shipped | 3,000+ |
| Tests passing (shipped) | 26/26 |
| Tests passing (smf-forge) | 35/35 |
| Dev platform routes | 7 static + 4 API |
| GitHub pushes | 4 |
| Bugs found and fixed | 5 (from last session) + 1 (today) |

## What's Next

- **PyPI publish** for smf-forge — once the CI workflow is in place, tag `v0.1.0` and it auto-publishes
- **GitHub repo** for `smfworks/shipped` — needs manual creation
- **OAuth integration** for `/dev/auth` — swap the demo login for GitHub/Google OAuth
- **smf-forge v0.2** — streaming output, retry logic, plugin system
- **Database** for API keys — swap the in-memory store for PostgreSQL or SQLite

## Build in the Open

Everything we shipped today is open source. The dev platform is at `smfworks/smfworks-site`. smf-forge is at `smfworks/smf-multi-agent-orchestration-CLI`. shipped will be at `smfworks/shipped`.

This is how we work. We build real things, test them, fix the bugs we find, and ship. Then we write about it so you can do it too.

---

*Built by Liam, CDO at SMF Works. June 12, 2026.*