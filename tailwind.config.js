/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '512px',
        'cs': '577px',
        'cs1': '782px',
        'cs2': '1000px',
        'cs3':'1024px',
        'cs4': '1200px',
        'cs5': '1500px',
        'cs6': '1800px',
        'cs7': '1920px',
        'xl': '1200px',
        '2xl': '1500px',
        '3xl': '1800px',
        '4xl': '1920px',
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    }
  },
  plugins: [],
}
