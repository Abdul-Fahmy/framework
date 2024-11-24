/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: "#e8f8f5",
          100: "#d1f2eb",
          200: "#baebe1",
          300: "#a3e4d7",
          400: "#8ddece",
          500: "#76d7c4",
          600: "#5fd0ba",
          700: "#48c9b0",
          800: "#31c3a6",
          900: "#1abc9c",
          950: "#0d5e4e",
        },
        secondary: {
          50: "#eaecee",
          100: "#d5d8dc",
          200: "#c0c5cb",
          300: "#abb2b9",
          400: "#969fa8",
          500: "#808b96",
          600: "#6b7885",
          700: "#566573",
          800: "#415162",
          900: "#2c3e50",
          950: "#161f28",
        },
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
