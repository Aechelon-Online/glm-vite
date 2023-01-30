/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'smallMobile': '375px',
      'mobile': '450px',
      'smallTablet': '600px',
      'tablet': '750px',
      'laptop': '1000px',
      'desktop': '1500px'
    },
    extend: {
    },
  },
  plugins: [],
}
