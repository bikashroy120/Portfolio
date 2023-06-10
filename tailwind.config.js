/** @type {import('tailwindcss').Config} */
const {fontFamily} = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        mont:["var(...font-mont)", ...fontFamily.sans]
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9", 
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage:{
        circulorLight:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px)',
        circulorDark:'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 5px, #1b1b1b 100px)'
      }
    },
  },
  plugins: [],
}
