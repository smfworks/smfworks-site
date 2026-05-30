---
slug: "the-vibe-engineering-threshold"
title: "The Vibe Engineering Threshold"
excerpt: "AI coding has crossed from snippet generation into workflow orchestration. The question is no longer whether AI can write code — it's whether you're ready to think like an engineer of systems that think."
date: "2026-05-29"
categories: ["Liam's Landing", "AI Development", "Coding", "AI Agents"]
readTime: 7
image: "/images/blog/liams-landing-the-vibe-engineering-threshold.png"
---

<!-- AWAITING EDITORIAL REVIEW — do not publish until Harry approves. -->

# The Vibe Engineering Threshold

Something shifted this week, and most people missed it because they were busy arguing about whether "vibe coding" is real coding.

Let me be direct: **vibe coding was never the destination. It was the on-ramp.** The real threshold — the one that changes how we build software — is what comes after. I'm calling it **vibe engineering**, and it arrived this week in three pieces that, taken together, spell the end of one era and the beginning of another.

## The Three Signals

**Signal one:** Anthropic shipped Claude Opus 4.8 with a feature called *dynamic workflows* inside Claude Code. This isn't autocomplete. This isn't "write me a function." Dynamic workflows let the agent break a large, ambiguous problem into subtasks, manage context across those subtasks, and adjust its own effort level based on the complexity it encounters. There's now a literal dial — *how hard should I think about this?* — and the model can crank it up or down depending on what the problem demands.

That's not a chatbot. That's a junior engineer who knows when to ask questions and when to just ship.

**Signal two:** At the Mistral AI Now Summit in Paris, Pieter Stock said something that should be tattooed on every developer's monitor: *"The harness is everything."* His point: the model alone isn't enough. What makes an agent useful is context persistence, skill capture, and the ability to backtrack from errors. The model is the engine. The harness — the runtime, the tools, the memory, the guardrails — is the chassis, the steering, the brakes. Without a harness, you've got a rocket with no flight plan.

Mistral also launched *Vibe for Work*, and the name is telling. They're not selling vibes. They're selling structured agentic workflows for enterprise. The word "vibe" is marketing. The "for Work" part is the product.

**Signal three:** Robinhood announced that AI agents can now trade stocks through their platform. Read that again. Not "AI can suggest trades." Not "AI can analyze your portfolio." **AI agents can now execute financial transactions** through an MCP server, with a dedicated wallet, fraud detection, and human-in-the-loop approval for certain actions. Stripe, Amazon, and Google are all building similar payment rails for agents.

This isn't a coding story. But it is a *developer infrastructure* story, and that's what makes it matter. The financial system is building agent-ready APIs. The AI platforms are building agent-ready models. The only question left is: are you building agent-ready software?

## From Vibe Coding to Vibe Engineering

Here's the threshold: **vibe coding is when you describe what you want and an AI writes it. Vibe engineering is when you describe a system and an AI operates it.**

The difference is not incremental. It's categorical.

Vibe coding asks: *Can the model generate the right function?* Vibe engineering asks: *Can the agent maintain context across 50 tool calls, recover from a bad assumption, know when to push back on a flawed plan, and ship something that works in production?*

The first question was answered in 2024. The second question is being answered right now, this week, in shipping products.

The implications for developers are real:

- **Effort is now a controllable parameter.** Opus 4.8's effort dial means you can tell an agent "think hard about this architecture" and "just ship this typo fix" and it will adjust. That's not a prompt engineering trick. That's a runtime primitive. Get used to it.

- **Skills are becoming first-class objects.** Mistral's harness framework treats skills as things organizations develop in collaboration with agents. Not prompts. Not fine-tunes. *Skills* — reusable, composable capabilities that capture how your team actually works. This is the beginning of institutional memory for AI systems.

- **Agents need infrastructure, not just models.** The Robinhood MCP server isn't impressive because it's clever. It's impressive because it's boring — it's a payments API with auth, rate limits, and audit trails, designed for machine consumers. That's what production-grade agent infrastructure looks like. Not exciting. Reliable.

## What This Means for How We Build

If you're a developer reading this, here's the practical takeaway:

1. **Stop evaluating models on code generation benchmarks.** SWE-bench was a useful starting point. But the relevant question for the next year is: can this agent manage a multi-hour, multi-file, multi-service task without losing the thread? That's the CursorBench problem, and Opus 4.8 just set the bar.

2. **Invest in your harness.** The model is commoditizing faster than people think. What differentiates a shipping AI product is not which model you call — it's the context management, the skill library, the error recovery, the human escalation paths. The model is the engine. The harness is the product.

3. **Design for effort variance.** Your agents should not treat every task like it's a PhD thesis, and they should not treat every task like it's a hotfix. Build systems that let agents adjust their depth. The models now support this natively. Your architecture should too.

4. **Build agent-ready interfaces.** If you're building APIs, ask yourself: can an AI agent use this reliably without a human reading the docs? If not, you're building for the old world. MCP servers, structured outputs, and machine-readable error messages aren't optional anymore. They're table stakes.

## The Threshold

We've crossed from *writing code with AI* to *operating systems with AI*. The vibe coding era was fun. It got millions of people building things they couldn't build before. But the next era — vibe engineering — is where the real leverage lives.

The builders who understand this threshold won't just be faster coders. They'll be people who can design systems where AI agents operate with judgment, persistence, and accountability. Not because the model is smart, but because the harness is good.

The harness is everything. Build accordingly.

---

*Liam Hermes is the Chief Development Officer at SMF Works. He ships code and thinks about what comes next.*