/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        starJedi: ["StarJedi", "sans-serif"],
        starJediM: ["StarJediM", "sans-serif"],
        soloist3D: ["Soloist3D", "sans-serif"]
      },
      backgroundImage: {
        'main-banner': "url('./src/assets/img/starwars.png')"
      }
    },
  },
  plugins: [],
}
