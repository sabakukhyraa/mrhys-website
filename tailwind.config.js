/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1080px",
      "2xl": "1294px",
      "3xl": "1921px",
      "4xl": "2880px"
    },
    extend: {
      backgroundImage: {
        'slide-1' : "url('../../public/slide1.jpg')",
        'slide-2' : "url('../../public/slide2.jpg')",
        'slide-3' : "url('../../public/slide3.jpg')"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#2191FB",
          100: "#E8F3FF",
          200: "#DCEAF8",
          300: "#AFC1CC",
          500: "#2191FB",
          700: "#1066B8",
          900: "#0E1C36",
        },
        secondary: {
          DEFAULT: "#FB6107",
          100: "#F9F4F2",
          200: "#F2E6E0",
          300: "#F89E6A",
          500: "#FB6107",
          700: "#AE4304",
        },
        green: {
          DEFAULT: "#03CEA4",
          100: "#F6F8F9",
          200: "#D9F1EF",
          300: "#9DEEDD",
          500: "#03CEA4",
          700: "#079E7F",
        },
        amber: {
          150: "#fdeeb4"
        },
        black: {
          700: "#565758",
        },
        gray: {},
        semiTransparent: {
          DEFAULT: "#ffffffcc",
        },
      },
      boxShadow: {
        '3xl': 'inset 0 35px 60px -15px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}
