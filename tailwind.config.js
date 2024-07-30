/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#4D4D4D",
        secondary: "#717171",
        green: "#558E6E",
      },
    },
  },
  plugins: [],
};
