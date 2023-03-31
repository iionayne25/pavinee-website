/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#909E68",
        greenLight: "#CDE1A5",
        greenBtn: "#D7ECB0",
        yellow: "#FFF3B5",
        yellowLight: "#FFFEF0",
        orange:"#C9792F",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
    },
    fontFamily: {
      roboto: "'Roboto', sans-serif",
      merriWhether: "Merriweather', serif",
    },
    backgroundImage:{
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'circle1':"url('/public/circle1.svg')",
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'), require('tailwind-scrollbar'),
  ],
};
