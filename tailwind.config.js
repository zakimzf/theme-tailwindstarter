const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './**/*.hbs',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // customize your colors here
      ...colors
    },
    container: {
      padding: '2rem',
      center: true,
    },
  },
  important: false,
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
