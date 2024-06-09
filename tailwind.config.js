/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        imprima: ['Imprima', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
    },
  },
  plugins: [],
}
