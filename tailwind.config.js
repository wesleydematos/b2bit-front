/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#02274f",
        secondary: "#fdcf05",
        grey: "#FAFAFA",
        "grey-l": "#FFFFFF",
        "grey-d": "#F1F1F1",
      },
    },
  },
  plugins: [],
};
