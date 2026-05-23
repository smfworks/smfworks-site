---
slug: "the-jevons-paradox"
title: "The Jevons Paradox Arrives: Why Cheaper AI Inference Means More Spending, Not Less"
excerpt: "Token costs collapsed 280x, but total inference spend surged 320%. The economics of AI are being rewritten by a 19th-century paradox — and most enterprises are modeling it wrong."
date: "2026-05-23"
categories: ["The Ledger", "AI Economics", "Inference", "Open Source"]
readTime: 8
image: "/images/blog/ledger-the-jevons-paradox.png"
---

<!-- AWAITING EDITORIAL REVIEW — do not publish until Harry approves. -->

# The Jevons Paradox Arrives: Why Cheaper AI Inference Means More Spending, Not Less

**By Gabriel — Chief Financial Officer, SMF Works**

*May 23, 2026*

---

Here is the number that should rewire how you think about AI economics: **inference token costs fell 280-fold between November 2022 and late 2024**, from roughly $20 per million tokens down to $0.07 per million tokens for GPT-3.5-equivalent performance, according to the Stanford AI Index 2025. By April 2026, frontier-model pricing had compressed even further — Grok-4.1 Fast lists input tokens at $0.20 per million, Claude Opus 4.6 at $5.00, GPT-5.2 at $1.75.

And here is the number that should keep CFOs awake: **total inference spending grew 320% over the same period**. Cheaper per unit. Vastly more expensive in total. This is not a contradiction. It is one of the most powerful patterns in the history of industrial economics, and it is now the defining force in AI infrastructure.

It is called the Jevons Paradox, and if you are building, buying, or investing in AI, you need to understand it — because most enterprise cost models are still built on the assumption that it does not exist.

---

## What Is the Jevons Paradox?

In 1865, the English economist William Stanley Jevons observed that improvements in the efficiency of coal use did not reduce total coal consumption. They increased it. Better steam engines made coal cheaper to use per unit of work, which made steam power viable for applications that had previously been too expensive, which drove total coal demand up — not down.

The pattern repeats across every major technology transition. Cheaper compute did not reduce total compute spending; it created the personal computer industry. Cheaper bandwidth did not reduce total telecom spending; it created streaming, cloud computing, and the modern internet economy. Cheaper solar panels did not reduce total energy investment; they expanded the addressable market for solar to places where it had never been competitive.

AI inference is the latest expression of this pattern, and it is playing out faster than any previous instance.

---

## The Numbers: A Market Getting Cheaper and Bigger Simultaneously

Let me lay out the key data points from multiple sources, because the sheer scale matters:

**Per-token cost collapse:**
- November 2022: ~$20/million tokens (GPT-3.5-class performance)
- October 2024: ~$0.07/million tokens (same capability tier) — a 280x decline
- April 2026: Frontier input tokens from $0.20–$5.00/million depending on model tier
- Year-over-year (2025→2026): LLM API prices dropped approximately 80% across the board

**Total market expansion:**
- Inference now accounts for approximately **two-thirds of all AI compute demand** in 2026, up from roughly one-third in 2023
- Despite per-token cost falling 280x, total inference spending **grew 320%** — the Jevons Paradox in full effect
- AI infrastructure capital expenditure exceeded $600 billion across hyperscalers in 2025–2026

**The hardware dimension:**
- H100 GPU cloud rental rates fell 64–75% in 14 months, to approximately $2.99/hour on-demand
- AWS slashed H100 instance prices by up to 45% in mid-2025, pressuring neocloud margins
- Inference-optimized hardware delivers 3–5x better cost-per-token than training-optimized H100s for serving workloads

The takeaway is not that AI is getting cheaper. It is that AI is getting *accessible*. The price collapse does not shrink the market. It expands it into use cases that were previously uneconomic, creating demand that did not exist.

---

## Why Enterprise AI Still Isn't Profitable (And the Token Price Doesn't Matter)

If inference costs collapsed 280x, why do only 5% of enterprises report sustained AI returns at scale?

The answer is that **token cost is the smallest component of total AI ownership**. NextWaves Insight's analysis breaks down enterprise AI total cost of ownership (TCO) as follows:

| Cost Component | Share of Total AI TCO |
|---|---|
| Data engineering overhead | 25–40% |
| Model maintenance (drift detection, retraining, version control) | 15–30% |
| Integration with legacy systems | 2–3x implementation premium |
| **Token API costs** | **<20% after multipliers** |

Manufacturing enterprises report AI ownership costs running **200–400% above initial vendor quotes**. 85% of organizations misestimate AI project costs by more than 10% before implementation begins. The token bill is a rounding error inside a much larger cost structure that most enterprises do not model correctly.

This is the Jevons Paradox at the enterprise level: cheaper tokens do not reduce the total cost of deploying AI. They enable more deployments, more use cases, more integrations — each of which carries its own overhead in data engineering, model maintenance, and integration complexity. The cost of tokens went down. The cost of *using* tokens went up, because there are now more tokens being used in more places with more surrounding infrastructure.

---

## The GPU Utilization Gap: The Hidden Tax Nobody Publishes

One figure that rarely appears in vendor press releases is actual GPU utilization rate. The industry target is 65–75% average utilization with a 20–30% buffer reserved for demand spikes. In practice, enterprise workloads routinely run at **40–55% utilization**, per Introl's 2025–2030 infrastructure planning analysis.

What does that mean in financial terms? Cloud H100 rental runs $5,000–$75,000 per year per unit. At 40–50% utilization, roughly half of that spend is idle capacity — GPUs sitting waiting for requests that never arrive, or sitting idle during off-peak hours because inference workloads are bursty and unpredictable.

NVIDIA's own data makes the gap explicit: its Run:ai orchestration platform achieves up to 2x GPU utilization gains for enterprise inference workloads. The existence of a 2x improvement opportunity implies that the baseline — without orchestration — is operating at roughly half of theoretically available capacity. You are paying for 100% of your GPU hours and using 50% of them.

This is where the Jevons Paradox becomes a trap. Cheaper GPU hours encourage more procurement, more capacity, more deployments. But if utilization remains at 40–50%, each new deployment adds more idle capacity than productive capacity. The total spend grows faster than the productive output.

---

## The Self-Hosting Decision: When Cheaper Becomes More Expensive

The open-source model ecosystem has made self-hosting a credible option for the first time. Five models have Q2 2026 production readiness: Mistral Small 3.2, gpt-oss-120b, DeepSeek V4-Flash, DeepSeek V4-Pro, and Llama 4 Scout. EU GPU hosting providers offer H100 capacity at predictable rates from Paris and Frankfurt data centers. The Schrems II ruling and the US CLOUD Act have made self-hosting the only architecture with zero foreign-provider data exposure for regulated industries.

The financial crossover point is surprisingly clear: **self-hosting becomes cost-effective at roughly 50–100 million tokens per month sustained**. Below that threshold, cloud API pricing beats dedicated hardware. Above it, hardware amortizes within 12–18 months.

But the "tricky cost calculus" that TechTarget reported from Red Hat Summit 2026 is real. BNP Paribas, processing 1.5 billion AI tokens daily across three data centers, found that "it is difficult to evaluate consistently all the costs." Cloud GPU pricing is transparent — you know what you pay per hour. Self-hosted GPU costs include server amortization, data center facilities, networking, staffing, and the opportunity cost of capacity that sits idle during off-peak hours. These costs are real, and they are opaque.

The Forbes analysis from Superlinked's co-founder frames the deeper issue: **"The roadmap usually breaks before the budget does."** When inference costs dominate, teams stop shipping features that would improve the product. Embedding refresh cadence slows. Long-context scenarios get cut. Custom models get rejected in favor of whatever fits the inference provider's catalog. The most expensive queries — the ones in the long tail where the business's highest-value use cases live — get throttled or downgraded. Inference economics are not just a procurement problem. They are a product strategy problem.

---

## What the Smartest Teams Are Doing Differently

Three patterns separate teams that are modeling AI economics correctly from those that discover the economics through an uncomfortable meeting with finance:

**1. Instrument unit cost by query class, not just aggregate spend.** Latency, error rate, and retry cost belong on the same dashboard as dollars. If the only financial view of the system is the monthly invoice total, the roadmap will surprise everyone — and not in a good way. A small fraction of queries that are slow, expensive, or cold-started drive most of the user-facing latency that matters.

**2. Model cost as a function of query distribution, not volume.** Most of the business value and most of the infrastructure cost live in the tail. Teams that treat the tail as an edge case discover it is not, usually when that discovery is most expensive. A system that costs four cents per query at pilot can cost many times that in the tail, where the highest-value queries live.

**3. Preserve optionality.** A deployment choice that is cheap to reverse is worth more than a deployment choice that is a few percent cheaper per query. Lock-in is a liability that quietly accrues interest. Workload tiering — routing tasks to the cheapest model capable of handling them — is the primary lever enterprises have for closing the gap between token price and deployment economics.

---

## The Open-Source Arbitrage

This is where the Jevons Paradox creates opportunity, not just cost. The open-source model ecosystem is the lever that lets enterprises capture the demand expansion from cheaper inference without being captured by a single provider's pricing power.

The math is straightforward. Mistral Small 3.2 runs on a single consumer GPU (RTX 4090, ~€1,500 one-time). DeepSeek V4-Flash, a 284B-parameter MoE model with 13B active parameters, runs on a single H100. Gpt-oss-120b, an Apache 2.0-licensed MoE with 5.1B active parameters, likewise runs on a single H100. These are not toy models — they compete with proprietary offerings on most enterprise workloads.

The architecture is multi-model, not single-model: Mistral Small for volume routing, gpt-oss-120b or DeepSeek V4-Flash for on-premise heavy reasoning, V4-Pro or R1 for math and logic specialists, Llama 4 Scout for ultra-long context. The routing layer — which model handles which decision — is where the cost optimization happens.

For organizations processing more than 50–100 million tokens per month, the TCO crossover from cloud API to self-hosted hardware falls within 12–18 months. For organizations below that threshold, cloud APIs with intelligent workload tiering are the rational choice. The key insight is that the Jevons Paradox makes the *addressable market* for both approaches larger — the question is which model of cost capture aligns with your scale and your compliance requirements.

---

## The Neocloud Squeeze

The inference pricing collapse has a victim: neoclouds that built their business models on GPU scarcity. During the 2022–2023 GPU shortage, neoclouds could charge premium pricing because demand exceeded supply. That scarcity is ending in the inference market.

H100 cloud rental rates fell from roughly $8/hour in early 2024 to $2.99/hour by 2026. Inference-optimized hardware delivers 3–5x better cost-per-token than training-optimized H100s for serving workloads. AWS cut H100 instance prices by up to 45% in mid-2025. McKinsey cautioned that neoclouds face "fragile economics" if supply loosens or pricing power fades.

A neocloud that financed GPU acquisition at $8/hour economics is now competing in a $2.99/hour market against hyperscalers who amortized their hardware costs years ago and new entrants running Blackwell-class hardware at efficiencies that make H100 fleets increasingly uncompetitive. The structural pressure is real, and it is not temporary — it is the Jevons Paradox working through the supply side. More capacity at lower prices expands total demand, but it also compresses the margins of providers who built on scarcity assumptions.

---

## What to Watch

- **Token pricing will continue to fall.** The competitive dynamics — hyperscalers defending share, model providers optimizing serving, new hardware generations — all push per-token costs down. This does not mean total spending will fall. It means the addressable market will continue to expand.

- **GPU utilization is the hidden cost multiplier.** If your organization is running at 40–50% utilization, your real per-token cost is double what your invoice suggests. Orchestration and workload tiering are the primary levers for closing this gap.

- **Self-hosting crosses over at 50–100M tokens/month.** Below that, cloud APIs with intelligent routing. Above that, dedicated hardware amortizes within 12–18 months — but only if you can model the full TCO including staffing, facilities, and idle capacity.

- **The roadmap breaks before the budget.** If inference costs are causing you to cut features, throttle queries, or defer embedding updates, the problem is not procurement. The problem is that the cost structure is reshaping your product without anyone making a deliberate product decision.

- **Neoclouds are the canary.** Watch GPU rental rates and neocloud financial health as leading indicators of where the market is heading. If neoclouds continue to face margin compression, it signals that the scarcity era is over and the Jevons Paradox era is in full force.

---

## The Threshold

The Jevons Paradox is not a bug in AI economics. It is the feature. It is the mechanism by which a technology that was too expensive for 95% of potential applications becomes affordable for all of them, and in doing so, generates vastly more total economic activity than it did when it was scarce and expensive.

The enterprise that models AI cost as "token price × volume" will always be surprised by the invoice. The enterprise that models it as "token price × volume × integration overhead × utilization gap × tail distribution" will understand why spending is going up even as unit costs go down — and will be positioned to capture the value that the Jevons Paradox creates, rather than being captured by it.

The door is there. The question is whether you walk through it deliberately, or whether the economics push you through sideways.

---

## Sources

- Stanford AI Index 2025 — Token cost decline from $20/million (Nov 2022) to $0.07/million (Oct 2024)
- ComputeForecast — "The Inference Pricing Collapse Is the Most Important Story in AI Cloud Economics" (May 2026)
- NextWaves Insight — "AI Inference Unit Economics: Why Enterprise AI Isn't Profitable" (2026)
- Forbes Technology Council — "Why The Cheapest AI Stack Becomes The Most Expensive At Scale" (May 2026)
- TechTarget — "IT Orgs Face Tricky Cost Calculus for Self-Hosted AI Inference" (May 2026)
- Gosign — "Self-Hosted Open-Source AI 2026: Mistral, gpt-oss, DeepSeek V4, Llama 4" (2026)
- Introl — "AI Infrastructure Capacity Planning Forecasting GPU 2025–2030"
- ByteIota — "AI Inference Costs 2026: The Hidden 15–20x GPU Crisis"
- Xenoss — "Total Cost of Ownership for Enterprise AI" (2026)
- IntuitionLabs — AI API Pricing Comparison (current)