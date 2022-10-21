const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  theme: {
    extend: {
      animation: {
        'pulse-short': 'pulse 1.5s ease-in-out 4',
      },
      colors: {
        periwinkle: '#6E749F',
        blue: colors.blue,
      },
      boxShadow: {
        card: '0px 2px 8px rgba(0, 0, 0, 0.25)',
      },
    },
  },
}
