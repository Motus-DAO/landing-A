import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        motus: "var(--motus-radius)"
      },
      colors: {
        motus: {
          primary: "rgb(var(--motus-primary) / <alpha-value>)",
          accent: "rgb(var(--motus-accent) / <alpha-value>)",
          text: "rgb(var(--motus-text) / <alpha-value>)",
          muted: "rgb(var(--motus-muted) / <alpha-value>)",
          border: "rgb(var(--motus-border) / <alpha-value>)",
          bg: "rgb(var(--motus-bg) / <alpha-value>)",
          bgSoft: "rgb(var(--motus-bg-soft) / <alpha-value>)"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Jura", "system-ui", "sans-serif"]
      },
      boxShadow: {
        motusSoft: "0 10px 30px rgba(17, 24, 39, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

