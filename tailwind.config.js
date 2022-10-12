/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
    colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b',
    }
  },
  plugins: [],
}
