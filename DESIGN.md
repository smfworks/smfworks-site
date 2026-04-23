---
name: SMF Works Forge
version: alpha
description: >
  The SMF Works visual identity converges the blacksmith forge
  with synthetic intelligence. Deep navy evokes cooled steel at rest;
  ember amber recalls the heat of the hammer; brushed copper
  whispers of finished work held in hand.
colors:
  # Forge foundation — cooled iron, darkness, depth
  primary: "#0A0F1F"
  forge-navy: "#0A0F1F"
  forge-navy-deep: "#001F3F"
  forge-card: "#131B2E"
  forge-surface-alt: "#0A1628"
  forge-surface-mid: "#1e2a45"
  forge-border: "#1e2a45"

  # Forge fire — heat, spark, action
  forge-ember: "#ea580c"
  forge-ember-bright: "#f97316"
  forge-ember-deep: "#e55f00"
  forge-ember-soft: "#d4a574"

  # Data / intelligence — cool signal, information
  data-cyan: "#00D4FF"
  data-cyan-soft: "#00B8DB"
  data-blue: "#007BFF"
  data-blue-deep: "#0066CC"

  # Edge — Aiona Edge brand exception (purple)
  edge-purple: "#9333EA"
  edge-purple-muted: "#A78BDB"
  edge-surface: "#0D0B1A"
  edge-border: "#2D1B4E"
  edge-text: "#E2D9F3"

  # Neutral — text, readability
  text-primary: "#E2E8F0"
  text-muted: "#94A3B8"
  text-inverse: "#0A0F1F"

  # Utility
  # (transparent handled in prose)

typography:
  display:
    fontFamily: Inter
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
    fontFamily: "Space Grotesk"
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

The SMF Works forge aesthetic converges the blacksmith's craft with
synthetic intelligence. Deep navy evokes cooled steel at rest;
ember amber recalls the heat of the hammer striking the anvil;
brushed copper whispers of finished work held in the hand.

The tone is authoritative yet approachable — a working blacksmith
who happens to operate at the frontier of predictive systems. Every
surface carries the weight of metallurgical precision; every accent
carries the energy of live fire. The site should feel like walking
into a forge that has been upgraded by a decade of quiet engineering.

Premium matte finishes dominate. Shadows are soft, atmospheric
gradients replace hard cuts. Typography is confident and engineered
— Inter for the voice of authority, Space Grotesk for technical
annotations and data readouts.

This is *not* a standard B2B tech site. It must feel like a
place where metal is shaped and intelligence is forged.

## Colors

The palette is rooted in the forge-floor chromatic:

- **Forge Navy (#0A0F1F):** The dominant surface — cooled iron,
  anvil-shadow, the rest state of metal. Used as the primary
  background across all pages.
- **Forge Navy Deep (#001F3F):** Reserved for the deepest hero
  sections, footer wells, and immersive full-bleed moments. Evokes
  the forge at night, fire banked low.
- **Forge Card (#131B2E):** Elevated surfaces — cards, panels,
  navigation bars. Slightly warmer than the base navy to create
  subtle tonal lift without resorting to heavy shadows.
- **Forge Ember (#ea580c):** The primary action color. This is
  the heat of the forge — used sparingly, exclusively for primary
  CTAs, active states, and critical highlights. It carries kinetic
  energy.
- **Forge Ember Bright (#f97316):** Hover and active states on
  forge-ember elements. Brighter, hotter.
- **Forge Ember Soft (#d4a574):** Brushed copper. Used for
  secondary text accents, metallic decorative elements, and
  warmth without the aggression of full orange.
- **Data Cyan (#00D4FF):** The intelligence signal. Cool counter
  to the warm forge palette. Used for technical data points,
  status indicators, code snippets, and secondary CTAs.
- **Text Primary (#E2E8F0):** The voice of the site. Warm grey
  with subtle blue undertone, softer than pure white to reduce
  eye strain on dark screens.
- **Text Muted (#94A3B8):** Captions, metadata, disabled states.
  Must never be used for body text that needs reading.

## Typography

The type system is dual-register: **Inter** carries the narrative
voice, **Space Grotesk** carries the technical voice.

- **Display (Inter 800, 4.5rem, -0.02em):** Hero statements.
  Used once per page. The weight of the hammer before it falls.
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
  Buttons, badges, category tags, navigation. The geometric
  precision evokes a measurement scale or forge stamp.
- **Code (Space Grotesk 400, 0.875rem):** Inline code,
  technical readouts, data previews.

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
shadows. The background rests at #0A0F1F, cards lift to
#131B2E, and the occasional hero section sinks to #001F3F.

Where shadow must exist, it is diffuse and colored:
```
0 4px 24px rgba(10, 15, 31, 0.4)
```

Atmospheric gradients are preferred over hard shadows for hero
sections — a soft radial glow of forge-ember at 4% opacity
behind key text, or a faint cyan bloom at 3% behind technical
visuals.

## Shapes

The shape language is **engineered softness**. All containers,
cards, buttons, and inputs use a **16px corner radius** (xl) as
the default. Pills (badges, category tags) use **full radius**.

Full-bleed sections and immersive canvases may use sharp corners
to create tension against the soft containers they hold.

## Components

### Buttons

- **Primary:** Forge ember background, text-primary label.
  Hover: forge ember bright. Active: forge ember deep.
  Sharp, immediate, kinetic.
- **Secondary:** Transparent background, data-cyan border and
  text. Hover: data-cyan fills, forge-navy text inverts. Cool,
  technical, inviting exploration.
- **Edge (Aiona Edge exception):** Edge purple background, white
  text, full radius. Used exclusively within The Edge pages and
  navigation. This is the only purple touch on the site.

### Cards

Forge card background (#131B2E), 16px radius, 1px forge-border
stroke. Hover: border transitions to forge-ember-soft at 40%
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
- Use forge-ember sparingly. It is the heat — once per view is
  usually enough.
- Maintain the 8px spacing scale. Visual rhythm is
  metallurgical precision.
- Let data-cyan breathe. It is cool signal; too much and the
  site feels like a dashboard.
- Preserve edge-purple exclusively for The Edge section. The
  nav link to "The Edge" should carry this color.
- Use forge-ember-soft for copper warmth in decorative touches,
  borders, and secondary accents.

### Don't
- Never use pure black (#000000). The forge is never that dark.
- Never use pure white (#FFFFFF) for text. Text Primary
  (#E2E8F0) is calibrated for dark mode comfort.
- Don't mix edge-purple with forge-ember on the same element.
  Purple and orange clash; the exception only works because Aiona
  Edge is territorially separated.
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
