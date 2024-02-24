/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-bg": "#465261",
        "font-color": "#081323",
        "font-light": "#4F4F4F",
        "primary": '#FF4F00'
      },
      backgroundImage: {
        'hero-image': "url('./src/assets/hero.png')",
        'gradient-primary': "linear-gradient(133deg, #566270 0%, #283444 100%)",

      },
      fontWeight: {
        medium: 500
      },

    },

    fontFamily: {
      "work-sans": ["Work Sans"],
      "poppins": ["Poppins"]
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },

  },

  plugins: [],
}

