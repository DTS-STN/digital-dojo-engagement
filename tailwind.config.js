const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './locales/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  theme: {
    extend: {
      animation: {
        'pulse-short': 'pulse 1.5s ease-in-out 4',
      },
      colors: {
        periwinkle: '#6E749F',
        darkPeriwinkle: '#4a4e6b',
        lightPeriwinkle: '#e6e8f3',
        blue: colors.blue,
      },
      boxShadow: {
        card: '0px 2px 8px rgba(0, 0, 0, 0.25)',
      },
    },
  },
}
