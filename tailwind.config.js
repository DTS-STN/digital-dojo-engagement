module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        periwinkle: '#6E749F',
      },
      boxShadow: {
        card: '0px 2px 8px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
