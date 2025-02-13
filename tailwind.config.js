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
        fx: "950px",
      },
      animation:{
        slowSpin:'spin 10s linear infinite',
      },
      boxShadow: {
        'custom': '8px 12px 0px #000',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

