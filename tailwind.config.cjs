/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        black:{950:'#1c2834',1050:'#1f3640'},
        green:{950:'#3ec3be'},
        orange:{950:'#eeb339'},
        gray:{950:'#a8bec9'},
      },
    },
  },
  plugins: [],
}
