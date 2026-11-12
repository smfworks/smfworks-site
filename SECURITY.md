# Security Policy

## Reporting a vulnerability

Email **michael@smfworks.com** with a description, affected path, and impact.
Do not open a public issue that includes secret values, tokens, or private keys.

## Secrets

- Never commit API keys, tokens, private keys, or Stripe live credentials.
- Hero image generation reads **only** `TOGETHER_API_KEY` from the environment and **fails closed** if it is missing.
- Checkout and download routes read Stripe and JWT material from the environment and must fail closed when unset. Do not ship placeholder live price IDs.
- Copy `.env.example` to `.env.local` for local work. `.env*` is gitignored except `.env.example`.
- A Together.ai key was previously committed in `scripts/generate-hero.mjs`. Treat that key as compromised and **rotate it**. Git history is not rewritten unless an operator explicitly orders it.

## Production expectations

- Site deploys from `main` via Vercel. Runtime secrets belong in the Vercel project environment, not in the repository.
- Pull requests run a tracked-file secret scan and the hero-script contract tests.
- If the secret scan fails, do not merge. Rotate the credential and remove it from the working tree.

## Operator rotation checklist (Together.ai) — CLOSED 2026-11-09

1. ~~Revoke the exposed Together.ai key in the Together console.~~ **Done — Michael revoked all Together.ai keys 2026-11-09; SMF Works no longer uses the service.**
2. ~~Issue a new key and store it only in the operator environment.~~ **N/A — service dropped.** `TOGETHER_API_KEY` references in `scripts/generate-hero.mjs` are now dead configuration; remove them at next touch.
3. ~~Confirm `scripts/generate-hero.mjs` contains no `tgp_v1_` literal.~~ Confirmed — no `tgp_v1_` literal in the working tree (scan-verified 2026-11-08).
4. ~~Confirm CI `secret-scan` is green on the hardening branch.~~ Green on every PR in the 2026-11-09 remediation series (#14, #15, #16).

Historical note: the exposed key remains recoverable in git history (commit `afc44cf`, `scripts/generate-hero.mjs:11`). With the credential revoked at the provider and the service abandoned, it is now inert. History stays unrewritten per policy above.

revocation-list endpoint removed 2026-11-12 as part of the site reorg; it was disabled 2026-11-09 with no consumers.
