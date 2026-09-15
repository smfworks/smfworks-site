import type { Config } from "tailwindcss";

/**
 * Tailwind configuration — SMF Works lab tokens.
 * Source of truth for design tokens: /DESIGN.md (Google design.md spec)
 * Token registry lives in app/globals.css via @theme.
 *
 * This file exists for content-path resolution and any plugin
 * requirements. Colors/typography/spacing are authored in DESIGN.md
 * and exported to CSS.
 */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Legacy aliases for incremental migration.
      // Prefer DESIGN.md token names (forge-ember, data-cyan, etc.)
      colors: {
        charcoal: "#0B0D10",
        amber: "#E86A2B",
        warmwhite: "#F4F1EA",
        slate: "#8A9099",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;