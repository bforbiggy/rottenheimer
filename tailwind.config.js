const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Indie Flower', ...defaultTheme.fontFamily.sans],
        'silly': ['Indie Flower', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

