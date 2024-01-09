/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#5F0F40',
        secondary: '#9A031E'
      }
    },
    container: {
      center: true,
      padding: {
        Default: "20px",
        md: "40px",

      }
    }
  },
  plugins: [],
}