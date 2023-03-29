/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: [`var(--font-inter)`, "sans-serif"],
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      colors: {
        primary: {
          DEFAULT: "#313748",
          900: "#181c24",
        },
        sand: {
          DEFAULT: "#FED0AB",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
