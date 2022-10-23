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
      laptop: "1024px",
      desktop: "1350px",
    },
    extend: {},
  },
  plugins: [],
};
