/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pridark: "#672280",
        prilight: "#A626D3"
      },
    },
  },
  plugins: [],
}

