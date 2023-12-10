/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
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