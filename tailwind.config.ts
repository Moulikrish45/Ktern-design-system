import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Extended Maroon Palette
        maroon: {
          950: "#320a14",
          900: "#430d1a",
          700: "#651426",
          600: "#76172c",
          500: "#a9203e",
          400: "#c41e3a",
          100: "#f3b0aa",
          50: "#f6e6e3",
        },
        brand: {
          primary: "#a9203e", // Deep Wine Maroon (maroon.500)
          secondary: "#ff8f00", // Arctic Amber Orange
          slate: "#475569",
        },
        // Semantic Colors
        success: "#3cd070",
        warning: "#fada5e",
        danger: "#c41e3a", // maroon.400
        info: "#4166f5",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        brand: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-ibm-plex)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        primary: "0 8px 16px -4px rgba(169, 32, 62, 0.2)",
        secondary: "0 8px 16px -4px rgba(255, 143, 0, 0.2)",
      },
      animation: {
        "fade-in-up": "fade-in-up 300ms ease-out",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;