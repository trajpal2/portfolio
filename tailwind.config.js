/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0c1117",
        secondary: "#94a3af",
        tertiary: "#141a22",
        accent: {
          DEFAULT: "#9fb0c2",
          muted: "#6b7d91",
        },
        "black-100": "#111820",
        "black-200": "#080b0f",
        "white-100": "#e8eef4",
      },
      boxShadow: {
        card: "0 28px 90px -20px rgba(0, 0, 0, 0.55)",
        primary: "0 8px 32px -8px rgba(0, 0, 0, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url(/herobg.png)",
      },
    },
  },
  plugins: [],
};
