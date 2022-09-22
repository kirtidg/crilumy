/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "*",
],
  theme: {
    fontSize: {
      sm: ['13px', '25px'],
      xs: ['12px', '20px'],
      lg: ['1.125rem'],
      tiny:['0.875rem', '1.875rem'],
      xl:['1.375rem'],
      text2xl:['1.5rem'],
      text3xl:['1.875rem'],
      md:['18px'],
    },
  extend: {
    colors: {
      primary: {
        400: "#00a6db",
      },
      secondary:'#003756',
      highlight:'#00a6db',
      bggrey: '#f5f5f5',
    },
    fontFamily:{
      ioannina : 'ioannina',
    },
  },
    },
  variants: {},
  plugins: [],
}
