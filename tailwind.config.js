/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ls: "2000px", // Custom 'ls' size (between md and lg)
      },
      animation:{
        slowSpin:'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}

