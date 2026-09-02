/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        card: "var(--card)",
        "card-solid": "var(--card-solid)",
        fg: "var(--fg)",
        "fg-2": "var(--fg-2)",
        "fg-3": "var(--fg-3)",
        "fg-4": "var(--fg-4)",
        line: "var(--line)",
        "line-2": "var(--line-2)",
        accent: "var(--accent)",
        live: "var(--live)",
        ink: "var(--ink)",
        paper: "var(--paper)",
      },
      fontFamily: {
        sans: [
          '"Schibsted Grotesk"',
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        tight: "-0.02em",
        tighter: "-0.03em",
        tightest: "-0.04em",
      },
      animation: {
        "lift-in": "liftIn 520ms cubic-bezier(0.22, 1, 0.36, 1) backwards",
      },
    },
  },
  plugins: [],
};
