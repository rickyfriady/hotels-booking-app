/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      Inter: ['Inter', 'Sans-serif'],
    },
    extend: {
      colors: {
        navbarBg: '#fef6e4',
        homeBg: '#fffffe',
        iconNav: '#eebbc3',
        heroSec: '#232946',
        textNav: '#232946',
      },
    },
  },
  plugins: [],
};
