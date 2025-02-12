/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ls: "1530px",
        ex: "2000px", 
        bx: "1490px",
        cx: "1300px",
        dx: "1300px",
      },
      animation:{
        slowSpin:'spin 10s linear infinite',
      },
      boxShadow: {
        'custom': '6px 6px 0px #000',
      },
    },
  },
  plugins: [],
}

