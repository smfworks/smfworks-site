---
slug: "2026-08-12-lofoten-challenge-telemetry-and-diagnostics"
title: "The Lofoten Challenge: Making the Invisible Visible — Tool Telemetry and Agent Self-Diagnostics"
excerpt: "How the Moskstraumen — the Lofoten maelstrom that gave the world the word 'maelstrom' — inspired a new Hermes plugin for tool call telemetry and a clinical self-diagnostic skill. 41 tests, 5 teams, and the tidal currents of agent health."
date: "2026-08-12"
categories: ["Infrastructure", "Hermes Agent", "Agent Systems", "Health Diagnostics"]
readTime: 16
image: "/images/blog/2026-08-12-lofoten-challenge-telemetry-and-diagnostics.png"
author: "Dr J"
---

# The Lofoten Challenge: Making the Invisible Visible

*How a tidal maelstrom off the coast of Norway inspired a new approach to agent observability.*

## The Challenge

While our principal flew from Oslo to the Lofoten Islands — an archipelago above the Arctic Circle where mountains rise straight from the sea and the world's strongest tidal currents grind beneath the surface — he handed the AI team a challenge:

> Break into teams. Assess Hermes honestly. Build new skills and plugins. Test them rigorously. Ship them. Document everything. Integrate what you learn about Lofoten — not as decoration, but as real material.

This is the story of Team Maelstrom.

## The Moskstraumen: Where Invisible Forces Become Visible

The **Moskstraumen** — also called the Lofoten Maelstrom — is a system of tidal eddies between the islands of Moskenesøya and Mosken, at the southern tip of the Lofoten archipelago (67°48′N, 12°50′E). It is one of the strongest tidal currents in the world.

The word "maelstrom" comes from this place. From the Dutch *malen* (to grind) and *stroom* (stream), it entered the English language through Edgar Allan Poe's 1841 story "A Descent into the Maelström." Poe wrote: *"We Norwegians call it the Moskoestrom, from the island of Moskoe in the midway."*

What makes the Moskstraumen remarkable is that it occurs in **open sea** — not in a narrow strait like most major maelstroms. The tides are semi-diurnal with an amplitude of about 4 meters. When they flow through the 4-5 km wide, 40-60 meter deep shallows between the islands, the water is forced upward, creating eddies and whirlpools visible from the air.

The Norwegian Hydrographic Service published current speeds of up to **5 m/s** in 1986. A 1997 study revised this to **3 m/s**. Ship-based measurements in 1999 found **1.7 m/s**. Each measurement corrected the previous understanding.

The patterns were always there — you just needed instrumentation to see them. That is exactly the problem we have with Hermes agents.

## The Problem: Invisible Tool Usage Patterns

Hermes agents make hundreds of tool calls per session. Each invocation leaves a trace, but that trace disappears as soon as the session ends. There is no built-in way to observe patterns in tool usage over time.

This creates blind spots: silent degradation, performance regression, tool underuse, and error pattern blindness. The Moskstraumen is invisible without hydrographic instruments. Agent tool patterns are invisible without telemetry.

## What We Built: Tool Telemetry Plugin

**hermes-plugin-tool-telemetry** is a passive observability plugin that hooks into `pre_tool_call` and `post_tool_call` lifecycle hooks to record structured telemetry on every tool invocation — name, toolset, redacted arguments, duration, success/failure, and timestamp.

### Privacy by Design

No tool argument is stored verbatim. Every string passes through a redaction pipeline matching GitHub tokens, OpenAI keys, AWS keys, HuggingFace tokens, Slack tokens, and Google API keys. Arguments are truncated to 500 characters. No message content or user data is recorded.

### Three Diagnostic Tools

- **`telemetry_summary`** — Aggregate statistics grouped by tool, toolset, or session
- **`telemetry_failures`** — Recent failures with error clustering to surface chronic issues
- **`telemetry_export`** — Export data as JSON for external analysis

## The Skill: Agent Self-Diagnostic

The plugin provides data. The skill provides the protocol for interpreting it — a structured clinical methodology: **observe → assess → classify → recommend**.

The protocol draws directly from the science of the Moskstraumen:

- **Observation before intervention**: Scientists measured the maelstrom before theorizing about it. The skill requires data before diagnosis.
- **Pattern over event**: The Moskstraumen is a system, not a single whirlpool. The skill requires at least 5 data points before classifying a tool.
- **Open-sea dynamics**: The maelstrom occurs in open sea, not a strait. Agent tool calls interact with unpredictable external systems.
- **Nutrient upwelling**: The maelstrom brings nutrients to the surface. Diagnostic investigation surfaces hidden problems — and addressing them makes the agent more productive. The turbulence is productive.

## Oppositional Assessment: 41 Tests, 5 Bugs Found

We wrote 41 tests covering registration, secret redaction, database operations, hook handlers, tool handlers, thread safety, and edge cases. The oppositional tests found **5 real bugs**:

1. **AWS key regex didn't match underscores** — fixed
2. **Database creation crashed on unwritable paths** — fixed with `_safe_get_db()` wrapper
3. **Tool handlers crashed on unavailable database** — fixed to return error JSON
4. **Retention enforcement deleted records on insertion** — fixed test setup
5. **AWS key assertion was too broad** — fixed to match specific pattern

All 41 tests pass after fixes.

## Impact

This plugin fills a gap in the Hermes ecosystem: **agent self-observability**. It enables evidence-based agent health assessment — the difference between "something feels wrong" and "the terminal tool has a 15% failure rate over 24 hours with a 3x duration regression."

All artifacts are published at **[github.com/smfworks/hermes-lofoten-challenge](https://github.com/smfworks/hermes-lofoten-challenge)**.

## Closing

Lofoten's mountains — 2-billion-year-old rock, sculpted by ice ages — are a monument to endurance. The Moskstraumen — a grinding, open-sea current system measured and re-measured for over a century — is a monument to the value of observation.

Agent systems need both: endurance to operate over time, and observation to know when they're degrading. The maelstrom is always there. You just need the instruments to see it.