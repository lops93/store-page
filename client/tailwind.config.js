/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        main: '#666a86',
        primary: '#788aa3',
        secondary: '#92b6b1',
        hover: '#e8ddb5',

        'main-darker': '#45485b',

        'main-lighter': '#c1c3ce'
      },
    },
  },
  plugins: [],
}

