/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        full: "100%",
      },
      colors: {
        bc: {
          green1: "#69fdc9",
          green2: "#45caca",
          accent1: "#FE6040",
          accent2: "#ff4265",
          "accent1-50": "#ff426580",
        },
      },
      fontFamily: {
        bebas: ["Bebas"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fadeIn 300ms ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
