/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myblue: "#2a2185",
      },
      spacing: {
        wid: "-50px",
        hei: "50px",
      },
      boxShadow: {
        custom: "35px 35px 0 10px myblue",
      },
    },
  },
  plugins: [],
};
