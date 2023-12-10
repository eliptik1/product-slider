/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily :{ 
        avenir: ["avenir","sans-serif"],
        montserrat: ["montserrat", "sans-serif"]
      } 
    },
  },
  plugins: [],
}