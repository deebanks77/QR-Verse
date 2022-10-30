/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      // => @media (min-width: 320px) { ... }
      mobile2: "500px",
      tablet: "640px",
      midTablet: "760px",
      bigTablet: "860px",
      laptop: "1040px",
      laptop1: "1124px",
      laptop2: "1200px",
      desktop: "1350px",
    },
    extend: {
      animation: {
        scale: "scale .5s ease-in-out 1",
        opacity: "opacity .5s ease-in-out 1",
        translate: "translate 1s ease-in 1",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        translate: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
