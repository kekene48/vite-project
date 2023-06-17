/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#dfcccc",
        "gray-500": "#5E0000",
        "primary-100": "#ffe1e0",
        "primary-300": "#ffa6a3",
        "primary-500": "#ff6b66",
        "secondary-400": "#ffcd58",
        "secondary-500": "#ffc132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #ff616a 0%, #ffc837 100%)",
        "mobile-home": "url('./src/assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      content: {
        evolvetext: "url('./src/assets/EvolveText.png')",
        abstractwaves: "url('./src/assets/AbstractWaves.png')",
        sparkles: "url('./src/assets/sparkles.png')",
        circles: "url('./src/assets/Circles.png)"
      }
    },
    screens: {
      xs: "480px",
      md: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}