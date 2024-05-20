/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#5f22d9",
        },
        secondary: {
          DEFAULT: "#2c016d",
        },
      },
    },
  },
  plugins: [],
};
