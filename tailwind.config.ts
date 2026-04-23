import type { Config } from "tailwindcss";

/**
 * Tailwind configuration — SMF Works Forge aesthetic.
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
        charcoal: "#1E1E1E",
        amber: "#C87941",
        warmwhite: "#F8F5F0",
        slate: "#3D5A80",
      },
      fontFamily: {
        sans: ["Inter", "DM Sans", "Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
