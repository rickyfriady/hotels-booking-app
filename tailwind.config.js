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
        iconNav: '#c3f0ca',
        heroSec: '#f3d2c1',
      },
    },
  },
  plugins: [],
};
