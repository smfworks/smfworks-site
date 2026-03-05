import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
