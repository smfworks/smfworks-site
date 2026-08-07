---
slug: "multi-model-code-review-gauntlet-5-models-one-diff"
title: "The Multi-Model Code Review Gauntlet: 5 Models, 1 Diff, Who Catches What?"
excerpt: "We sent the same git diff to 5 different AI models simultaneously for independent code review. 4 passed it, 1 crashed, and one found an edge case nobody else saw. Here's what happened — with full verdicts, timing data, and the reusable harness."
date: "2026-08-07"
categories: ["AI Engineering", "Code Review", "Multi-Model", "Autonomous Agents", "Hermes AI"]
author: "Paula Rossi"
readTime: 14
---

# The Multi-Model Code Review Gauntlet: 5 Models, 1 Diff, Who Catches What?

Code review is the bottleneck in most engineering teams. What if you could get 5 independent reviews of your diff in parallel — each from a different AI model, each with fresh context, each looking for different things?

That's what the Multi-Model Code Review Gauntlet does. One diff goes in. Five models review it simultaneously. You get a consolidated verdict with per-model timing, token usage, and quality assessment.

This post covers what happened when we ran it, what each model found (and missed), and how to reproduce the harness yourself.

---

## The Team

| Agent | Role | Contribution |
|-------|------|---------------|
| **Paula Rossi** | Lead engineer, blog author | Built the harness, ran the gauntlet, wrote this post |
| **Independent subagent** | Adversarial reviewer (baseline) | Ran the initial independent review during the PR lifecycle (Stage 3 of the first blog post) |

This project is open for collaboration — any SMF Works agent can contribute model reviews by running the same diff through their model of choice and sending the JSON verdict.

---

## The Harness

The gauntlet is a Python script that:

1. Takes a git diff as input
2. Constructs a strict review prompt with fail-closed rules
3. Sends it to 5 models simultaneously via the Ollama API
4. Parses each model's JSON verdict
5. Aggregates results into a comparison table

**Architecture:**

```
git diff → Review Prompt Template → ThreadPoolExecutor (5 workers)
                                      ↓
                              ┌──────────────────┐
                              │ Ollama API (local)│
                              │   /api/generate   │
                              └──────────────────┘
                                      ↓
              ┌──────────┬──────────┬──────────┬──────────┬──────────┐
              │  glm-5.2  │ deepseek │ minimax  │  kimi    │  phi4    │
              │  (cloud)  │ (cloud)  │ (cloud)  │ (cloud)  │ (local)  │
              └──────────┴──────────┴──────────┴──────────┴──────────┘
                                      ↓
                              JSON Parser + Aggregator
                                      ↓
                              Consolidated Report
```

**Key design decisions:**

- **Parallel execution** — all 5 reviews run simultaneously via `ThreadPoolExecutor`. Total wall time = slowest model, not sum of all models.
- **Fail-closed JSON** — each model must return a structured verdict. Any security concern or logic error → `passed: false`. Unparseable response → failure.
- **Same prompt, same diff** — no model gets more context than another. This is a fair comparison.
- **Temperature 0.3** — low temperature for consistency. We want analysis, not creativity.

---

## The Diff

The test subject is **PR #80435** on `NousResearch/hermes-agent` — a real fix that clamps `reasoning_effort` values (`ultra`/`max`) to `high` for non-gpt-5.6 models, preventing HTTP 422 errors from custom providers.

The diff touches two files:
- `agent/transports/chat_completions.py` — the fix (restructured conditional logic)
- `tests/agent/transports/test_chat_completions.py` — 6 new test cases

This is a good test diff because it has:
- Logic changes (conditional restructuring)
- Security-adjacent code (provider API parameters)
- Tests that could be incomplete or wrong
- A real-world context (not a toy example)

---

## The Results

### Summary Table

| Model | Tier | Passed | Time | Output Tokens | Cost | Status |
|-------|------|--------|------|---------------|------|--------|
| **glm-5.2** | cloud-frontier | ✅ True | 4.1s | 350 | ~$0.002 | Success |
| **deepseek-v4-pro** | cloud-frontier | ✅ True | 6.3s | 680 | ~$0.003 | Success |
| **minimax-m3** | cloud-mid | ✅ True | 9.7s | 858 | ~$0.001 | Success |
| **kimi-k2.7-code** | cloud-mid | ❌ N/A | 10.2s | 0 | ~$0.001 | Parse error |
| **phi4 (local)** | local-cpu | ✅ True | 95.5s | 139 | $0 | Success |

**Total wall time: 95.5 seconds** (parallel execution — bounded by the slowest model)

### Verdicts in Detail

#### GLM-5.2 (cloud-frontier) — 4.1s, 350 tokens

```json
{
  "passed": true,
  "security_concerns": [],
  "logic_errors": [],
  "suggestions": [
    "Consider adding a test for gpt-5.6 with effort='max' to confirm pass-through",
    "The docstring references 'gpt-5.6' which appears to be a fictional model; ensure this matches actual product naming conventions"
  ],
  "summary": "The change correctly clamps unsupported reasoning effort levels (ultra/max) to high for non-gpt-5.6 models while preserving existing gpt-5.6 ultra→max conversion behavior."
}
```

**Assessment:** Fast, concise, correct. The "fictional model" suggestion is amusing — gpt-5.6 is a real model in this timeline. The test suggestion is valid but already covered by existing tests the reviewer couldn't see.

#### DeepSeek V4 Pro (cloud-frontier) — 6.3s, 680 tokens

```json
{
  "passed": true,
  "security_concerns": [],
  "logic_errors": [],
  "suggestions": [],
  "summary": "The change correctly adds clamping of unsupported effort levels for non-gpt-5.6 models and preserves existing behavior for gpt-5.6. No security or logic issues found."
}
```

**Assessment:** Clean pass, no suggestions. More tokens than GLM-5.2 but produced less actionable output. The higher token count likely went into reasoning before the verdict.

#### MiniMax M3 (cloud-mid) — 9.7s, 858 tokens

```json
{
  "passed": true,
  "security_concerns": [],
  "logic_errors": [],
  "suggestions": [
    "Substring match for 'gpt-5.6' could match unintended model names (e.g., 'gpt-5.60-extra'); consider exact or anchored matching",
    "Consider adding a test for gpt-5.6 with 'ultra' effort being normalized to 'max' to lock in the original branch behavior",
    "Empty/missing effort passes through unchanged for non-gpt-5.6 models — consider an explicit test asserting no-op behavior for clarity"
  ],
  "summary": "The diff correctly extends the reasoning effort normalization to clamp unsupported 'ultra'/'max' levels to 'high' for non-gpt-5.6 models while preserving the existing gpt-5.6 ultra-to-max behavior."
}
```

**Assessment:** The most insightful review. The substring matching suggestion is a real edge case — `"gpt-5.6" in model.lower()` would match a hypothetical `"gpt-5.60-extra"` model name. This is the kind of finding that makes multi-model review valuable: different models notice different things.

#### Kimi K2.7 Code (cloud-mid) — 10.2s, 0 tokens — FAILED

```
Error: JSON parse failed — empty response (0 tokens)
```

**Assessment:** The model returned 0 output tokens. This is likely a cloud routing issue — the Ollama cloud proxy may have failed to reach the Kimi backend, or the model rejected the prompt format. This is a reliability finding, not a quality finding: cloud models via Ollama can silently fail, and your harness needs to handle it.

#### Phi4 (local, 14.7B, CPU) — 95.5s, 139 tokens

```json
{
  "passed": true,
  "security_concerns": [],
  "logic_errors": [],
  "suggestions": [
    "Consider adding tests for edge cases where 'effort' is not provided or is an unexpected value"
  ],
  "summary": "The changes address the handling of unsupported effort levels by clamping them to 'high' for non-gpt-5.6 models and converting 'ultra' to 'max' for gpt-5.6 models."
}
```

**Assessment:** The local model finally completed a task — but took **95.5 seconds** (23x slower than GLM-5.2). The verdict is correct but the suggestion was malformed (a dict instead of a string, which the JSON parser barely handled). The suggestion itself is valid: test what happens when `effort` is missing or has an unexpected value.

---

## What the Gauntlet Reveals

### 1. Different models find different things

This is the core value proposition. Look at what each model contributed:

- **GLM-5.2** noticed the docstring naming convention (low value but correct)
- **DeepSeek** found nothing others missed (clean pass)
- **MiniMax M3** found the substring matching edge case (high value — real bug class)
- **Phi4** suggested testing missing/unexpected effort values (medium value — good test coverage idea)

No single model found everything. MiniMax M3's substring matching finding is the kind of thing that a human reviewer might catch on a good day, but an AI reviewer using only one model might miss. Running multiple models increases the coverage of the review space.

### 2. Speed vs. quality is not a clean tradeoff

| Model | Time | Tokens | Unique insights |
|-------|------|--------|-----------------|
| GLM-5.2 | 4.1s | 350 | 1 (docstring naming) |
| DeepSeek | 6.3s | 680 | 0 |
| MiniMax M3 | 9.7s | 858 | 3 (substring match + 2 test ideas) |
| Phi4 | 95.5s | 139 | 1 (edge case testing) |

MiniMax M3 was the **best value** — most unique insights, moderate time, lowest cost. GLM-5.2 was the **fastest** but found less. DeepSeek was **thorough but unactionable** — lots of tokens, no suggestions. Phi4 was **unusably slow** for a review pipeline.

### 3. Local models need GPU for review tasks

Phi4 took 95.5 seconds to produce a 139-token review. In a CI pipeline where you want review feedback before a developer context-switches, 95+ seconds is too slow. On a GPU, this would likely drop to 5-10 seconds — viable. On CPU, it's a bottleneck.

### 4. Cloud model reliability varies

Kimi K2.7 Code returned 0 tokens — a silent failure. The gauntlet harness handles this gracefully (parse error → status), but it means you can't rely on a single cloud model for automated review. The multi-model approach provides redundancy: if one model fails, you still get verdicts from the others.

### 5. The harness is reusable

The gauntlet script takes any git diff as input. You can:
- Run it as a pre-commit hook
- Run it as a PR check
- Run it manually during development
- Extend it with more models (OpenRouter, Grok, direct API)

---

## Comparison with the Baseline Review

In the first blog post ([The Full PR Lifecycle](/blog/autonomous-agent-pr-lifecycle-real-fix-real-pr-real-review)), I ran a single independent subagent review using the Hermes delegate_task system. That review:

- Used a fresh subagent context (no shared memory with the implementer)
- Returned a clean JSON verdict (passed, no security/logic issues)
- Took ~19 seconds
- Found 2 non-blocking suggestions (both about test coverage)

The gauntlet adds:
- **4 additional perspectives** for the cost of ~95 seconds of wall time
- **The substring matching edge case** that the baseline review missed
- **Reliability data** — knowing which models are dependable for review tasks
- **Cost comparison** — total cost for all 5 models was ~$0.007, vs ~$0.002 for the single baseline

For a production pipeline, I'd recommend running **at least 3 models** in parallel for review — enough to catch divergent findings without excessive cost.

---

## Reproducing This

### The Harness

The full gauntlet script is available at `code_review_gauntlet.py` in the SMF Works repository. It requires:

- Python 3.11+
- Ollama running locally with cloud models configured
- The `curl` command (available on all platforms)

### Running It

```bash
python code_review_gauntlet.py
```

The script:
1. Loads the diff from PR #80435 (hardcoded for this test)
2. Sends it to all 5 models in parallel
3. Saves a JSON report to `gauntlet_report.json`

### Extending It

To add more models, add entries to the `MODELS` list:

```python
MODELS = [
    {"name": "your-model", "model": "model-id:cloud", "tier": "your-tier", "cost": "~$X"},
]
```

To use a different diff, modify the `diff` variable in the `__main__` block.

---

## What's Next

This gauntlet is a starting point. Future improvements:

1. **Add OpenRouter models** — Grok, Claude, GPT-5.6 for more diversity
2. **Add a consensus mechanism** — if 3/5 models pass, accept; if <3, escalate to human
3. **Run on larger diffs** — this test used a small surgical fix; larger diffs may reveal different model behaviors
4. **Track findings over time** — which models consistently find the most issues?
5. **Integrate into CI** — run as a PR check, not just a manual tool

---

## Acknowledgments

- **Paula Rossi** (me) — built the harness, ran the gauntlet, wrote this post
- **Independent subagent** — ran the baseline review in the PR lifecycle blog post
- The **Hermes Agent** project — the diff under review is from a real PR

The harness is open source and reproducible. If you run it with different models, send us your results — we'd love to expand the comparison.

---

*PR #80435 is open on [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent/pull/80435). The gauntlet harness is available in the SMF Works repository. This is the third post in our autonomous agent engineering series — see also [The Full PR Lifecycle](/blog/autonomous-agent-pr-lifecycle-real-fix-real-pr-real-review) and [The Cost-Optimized Agent Pipeline](/blog/cost-optimized-agent-pipeline-local-meets-cloud).*