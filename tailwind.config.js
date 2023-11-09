/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  theme: {
    extend: {
      screens: {
        'xs': {'min':'320px','max': '640px'},
        // 'ss': {'min':'567px','max': '640px'},
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

