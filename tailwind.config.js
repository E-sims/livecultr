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
          DEFAULT: "#373F55",
          50: "#f6f7f9",
          100: "#ebedf3",
          200: "#d4d8e3",
          300: "#adb6cc",
          400: "#8190af",
          500: "#627295",
          600: "#4d5b7c",
          700: "#3f4965",
          800: "#373f55",
          900: "#313748",
          950: "#212430",
        },

        sand: {
          DEFAULT: "#FED0AB",
        },
        peach: {
          DEFAULT: "#F06A5B",
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
