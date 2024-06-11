/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0748A6',
        'primary-light': '#22C2FF',
        "dark": "#22C2FF"
      }
    },
  },
  plugins: [],
}