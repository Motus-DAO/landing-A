import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        motus: "var(--motus-radius)",
        "motus-lg": "var(--motus-radius-lg)"
      },
      colors: {
        motus: {
          primary: "rgb(var(--motus-primary) / <alpha-value>)",
          accent: "rgb(var(--motus-accent) / <alpha-value>)",
          cyan: "rgb(var(--motus-cyan) / <alpha-value>)",
          blue: "rgb(var(--motus-blue) / <alpha-value>)",
          magenta: "rgb(var(--motus-magenta) / <alpha-value>)",
          text: "rgb(var(--motus-text) / <alpha-value>)",
          textLight: "rgb(var(--motus-text-light) / <alpha-value>)",
          muted: "rgb(var(--motus-muted) / <alpha-value>)",
          border: "rgb(var(--motus-border) / <alpha-value>)",
          bg: "rgb(var(--motus-bg) / <alpha-value>)",
          bgSoft: "rgb(var(--motus-bg-soft) / <alpha-value>)",
          glass: "rgb(var(--motus-glass-bg) / <alpha-value>)"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Jura", "system-ui", "sans-serif"]
      },
      boxShadow: {
        motusSoft: "0 10px 30px rgba(17, 24, 39, 0.08)",
        "glow-primary": "0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.1)",
        "glow-accent": "0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3), 0 0 60px rgba(236, 72, 153, 0.1)",
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3), 0 0 60px rgba(34, 211, 238, 0.1)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
};

export default config;

