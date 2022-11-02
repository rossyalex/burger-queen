/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-banner': "url('./src/assets/starwars.png')"
      }
    },
  },
  plugins: [],
}
