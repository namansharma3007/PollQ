/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-p": "#141619",
        "deep-blue-p": "#050a44",
        "gray-p": "#2c2e3a",
        "blue-p": "#0a21c0",
        "neon-blue-p": "#02abde",
        "light-gray-p": "#b3b4bd",
        "yellow-p": "#ffd900",
        "dark-yellow-p": "#debd02",
        "purple-shade-p": "#6A6AFE",
        "dark-purple-shade-p": "#5757de",
      }
    },
  },
  plugins: [],
}