---
name: SMF Works
version: alpha
description: >
  SMF Works visual identity for a human-AI research lab.
  Charcoal field, slate cards, paper headings, iron body,
  ember CTAs, teal for agent/code. Token names stay stable.
colors:
  # Field — charcoal / near-black
  primary: "#0B0D10"
  forge-navy: "#0B0D10"
  forge-navy-deep: "#08090B"
  forge-card: "#1A1F26"
  forge-surface-alt: "#12151A"
  forge-surface-mid: "#242A33"
  forge-border: "#2A3139"

  # Ember — CTAs (designer #E86A2B; #ea580c kept as deep)
  forge-ember: "#E86A2B"
  forge-ember-bright: "#F07A3E"
  forge-ember-deep: "#ea580c"
  forge-ember-soft: "#d4a574"

  # Teal — agent / code moments
  data-cyan: "#3DB8A8"
  data-cyan-soft: "#339E90"
  data-blue: "#007BFF"
  data-blue-deep: "#0066CC"

  # Edge — Aiona Edge brand exception (purple)
  edge-purple: "#9333EA"
  edge-purple-muted: "#A78BDB"
  edge-surface: "#0D0B1A"
  edge-border: "#2D1B4E"
  edge-text: "#E2D9F3"

  # Neutral — paper headings, iron body
  text-primary: "#F4F1EA"
  text-muted: "#8A9099"
  text-inverse: "#0B0D10"

  # Utility
  # (transparent handled in prose)

typography:
  display:
    fontFamily: "Space Grotesk"
    fontSize: 4.5rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Space Grotesk"
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.08em
    fontFeature: "case"
  code:
    fontFamily: "JetBrains Mono"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  5xl: 128px

rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

components:
  button-primary:
    backgroundColor: "{colors.forge-ember}"
    textColor: "{colors.forge-navy}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.xl}"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.forge-ember-bright}"
    textColor: "{colors.forge-navy}"
  button-secondary:
    backgroundColor: "{colors.forge-card}"
    textColor: "{colors.data-cyan}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.xl}"
    typography: "{typography.label}"
  button-secondary-hover:
    backgroundColor: "{colors.data-cyan}"
    textColor: "{colors.forge-navy}"
  card:
    backgroundColor: "{colors.forge-card}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  nav-link:
    textColor: "{colors.text-muted}"
    typography: "{typography.body-sm}"
  nav-link-active:
    textColor: "{colors.forge-ember}"
  badge:
    backgroundColor: "{colors.forge-ember}"
    textColor: "{colors.forge-navy}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.label}"
  edge-button:
    backgroundColor: "{colors.edge-purple}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "{spacing.sm} {spacing.md}"
  edge-button-hover:
    backgroundColor: "{colors.edge-purple-muted}"
---

## Overview

SMF Works is a human-AI research lab. The site should read as a
professional high-tech lab: charcoal field, ember CTAs, teal for
agent/code moments. Inter carries body copy, Space Grotesk carries
display and labels, JetBrains Mono carries technical readouts.

Do not organize pages around forge mythology, anvil/heat metaphor,
Yeats-as-centerpiece, purple SaaS mesh, floating orbs, or
“meet your AI coworker” stock.

Premium matte finishes dominate. Shadows are soft. Typography is
confident and engineered.

## Colors

Token names are unchanged. Values follow the lab palette:

- **Forge Navy / primary (#0B0D10):** Charcoal field. Page
  background. Near-black, not pure #000000.
- **Forge Navy Deep (#08090B):** Footer wells and full-bleed
  recesses.
- **Forge Card (#1A1F26):** Slate elevated surfaces — cards,
  panels, nav when scrolled.
- **Forge Ember (#E86A2B):** Primary CTA. #ea580c remains
  `forge-ember-deep` for pressed/legacy states.
- **Forge Ember Bright (#F07A3E):** Hover on ember controls.
- **Data Cyan (#3DB8A8):** Teal for agent/code moments and
  secondary buttons. Not electric cyan, not purple.
- **Text Primary (#F4F1EA):** Paper. Headings and high-emphasis
  copy. Never pure white.
- **Text Muted (#8A9099):** Iron. Body copy and supporting lines.

## Typography

The type system is dual-register: **Inter** carries the narrative
voice, **Space Grotesk** carries the technical voice.

- **Display (Space Grotesk 800, 4.5rem, -0.02em):** Hero
  statements. Used once per page.
- **H1 (Inter 700, 3rem):** Page titles, major section heads.
- **H2 (Inter 700, 2.25rem):** Section markers, blog post
  titles in lists.
- **H3 (Inter 600, 1.5rem):** Card titles, feature names.
- **Body Large (Inter 400, 1.125rem, 1.7 lh):** Long-form
  reading — blog posts, essays, about copy.
- **Body Medium (Inter 400, 1rem, 1.6 lh):** Default body.
  Comfortable for screens.
- **Body Small (Inter 400, 0.875rem):** Captions, timestamps,
  footnotes.
- **Label (Space Grotesk 500, 0.75rem, uppercase, 0.08em ls):**
  Buttons, badges, category tags, navigation.
- **Code (JetBrains Mono 400, 0.875rem):** Inline code,
  technical readouts, data previews, eyebrows.

## Layout

The layout follows a **containment grid** model: generous internal
padding (24px), restrained max-widths (1280px for content), and
clear typographic hierarchy demarcated by color contrast rather
than heavy borders.

Spacing is strictly 8px-based:
- 4px (xs) — micro-adjustments, inline icon gaps
- 8px (sm) — tight component internals
- 16px (md) — default component padding
- 24px (lg) — card internal padding, section gutters
- 32px (xl) — between related sections
- 48px (2xl) — major section breaks
- 64px (3xl) — page section breaks on mobile
- 96px (4xl) — page section breaks on desktop
- 128px (5xl) — hero breathing room

Cards and panels use **24px internal padding** with **16px rounded
corners** (xl). This is the signature containment shape of the
system — generous, soft, approachable.

## Elevation & Depth

Depth is achieved through **tonal layers** rather than heavy
shadows. The background rests at #0B0D10, cards lift to
#1A1F26, and the footer can sink to #08090B.

Where shadow must exist, it is diffuse and colored:
```
0 4px 24px rgba(11, 13, 16, 0.4)
```

Atmospheric gradients are preferred over hard shadows for hero
sections — a soft radial glow of forge-ember at 4% opacity
behind key text, or a faint teal bloom at 3% behind technical
visuals.

## Shapes

The shape language is **engineered softness**. All containers,
cards, buttons, and inputs use a **16px corner radius** (xl) as
the default. Pills (badges, category tags) use **full radius**.

Full-bleed sections and immersive canvases may use sharp corners
to create tension against the soft containers they hold.

## Components

### Buttons

- **Primary:** Forge ember background, charcoal (forge-navy)
  label. Hover: forge ember bright. Active: forge ember deep.
  Sharp, immediate, kinetic.
- **Secondary:** Transparent background, data-cyan border and
  text. Hover: data-cyan fills, forge-navy text inverts. Cool,
  technical, inviting exploration.
- **Edge (Aiona Edge exception):** Edge purple background, white
  text, full radius. Used exclusively within The Edge pages and
  navigation. This is the only purple touch on the site.

### Cards

Forge card background (#1A1F26), 16px radius, 1px forge-border
stroke. Hover: border transitions to forge-ember at 40%
opacity. Internal padding 24px. No drop shadow by default.

### Badges / Pills

Forge-ember at 10% background opacity, forge-ember-bright text,
full radius, Label typography. Used for categories, status,
feature flags.

### Navigation

Floating bar style: forge-card at 80% backdrop blur, 16px radius,
contained within max-width, 8px padding. Links use text-muted;
active state uses forge-ember. Mobile: hamburger icon, slide
panel with 80% backdrop blur.

## Do's and Don'ts

### Do
- Use forge-ember sparingly — once per view is usually enough.
- Maintain the 8px spacing scale.
- Let data-cyan (teal) breathe. Too much and the site feels
  like a dashboard.
- Preserve edge-purple exclusively for The Edge section.
- Use paper (#F4F1EA) for headings and iron (#8A9099) for body.

### Don't
- Never use pure black (#000000). The field is charcoal #0B0D10.
- Never use pure white (#FFFFFF) for text. Paper (#F4F1EA) is
  the heading color.
- Don't mix edge-purple with forge-ember on the same element.
- Don't lead with forge mythology, anvil/heat metaphor, or Yeats
  as a homepage centerpiece.
- Avoid heavy drop shadows. The aesthetic is matte, machined,
  premium. Shadow is atmospheric, never structural.

## Edge Exception

The Aiona Edge pages ("/the-edge" and subroutes) override the
normal forge palette with their own identity. The background
sinks to edge-surface (#0D0B1A), borders become edge-border
(#2D1B4E), and the accent shifts to edge-purple (#9333EA). This
is a brand-within-a-brand. All Edge UI elements — category
pills, active states, links — use edge-purple instead of
forge-ember. The rest of the site **must not** use purple
outside this section.
