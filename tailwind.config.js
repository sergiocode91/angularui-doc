/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        primary: '#FBFBFB',
        secondary: '#737373',
      },
      borderColor: {
        primary: '#232125',
      },
    },
  },
  plugins: [],
}

