/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1100px'
    },
    extend: {
      colors: {
        'green-thumb': '#3CBBB4CC',
        'yellow-thumb': '#FBBD4A',
      },
    },
  },
  plugins: [],
};
