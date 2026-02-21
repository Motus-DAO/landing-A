/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        motus: "var(--motus-radius)",
        "motus-lg": "var(--motus-radius-lg)",
      },
      colors: {
        motus: {
          primary: "rgb(var(--motus-primary) / <alpha-value>)",
          "primary-hover": "rgb(var(--motus-primary-hover) / <alpha-value>)",
          "primary-light": "rgb(var(--motus-primary-light) / <alpha-value>)",
          "primary-subtle": "rgb(var(--motus-primary-subtle) / <alpha-value>)",
          text: "rgb(var(--motus-text) / <alpha-value>)",
          "text-secondary": "rgb(var(--motus-text-secondary) / <alpha-value>)",
          muted: "rgb(var(--motus-muted) / <alpha-value>)",
          border: "rgb(var(--motus-border) / <alpha-value>)",
          bg: "rgb(var(--motus-bg) / <alpha-value>)",
          "bg-soft": "rgb(var(--motus-bg-soft) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
        card: "0 4px 12px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 8px 24px rgba(0, 0, 0, 0.08)",
        "primary-soft": "0 4px 14px rgba(123, 47, 242, 0.18)",
        glow: "0 0 40px -8px rgba(123, 47, 242, 0.25)",
        "glow-sm": "0 0 24px -4px rgba(123, 47, 242, 0.2)",
      },
    },
  },
  plugins: [],
};
