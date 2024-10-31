/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
       primary: "#fec447",
       secondary: "#ffccb4",
       tertiary: "#9ad3cf",
       white: "#fff",
       black: "#050529"
    },
    extend: {},
  },
  plugins: [],
}