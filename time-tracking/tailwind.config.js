/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Blue': 'hsl(246, 80%, 60%)',

        'Lightred': 'hsl(15, 100%, 70%)',
        'Softblue': 'hsl(195, 74%, 62%)',
        'Lightred': 'hsl(348, 100%, 68%)',
        'Limegreen': 'hsl(145, 58%, 55%)',
        'Violet': 'hsl(264, 64%, 52%)',
        'Softorange': 'hsl(43, 84%, 65%)',

        'Verydarkblue': 'hsl(226, 43%, 10%)',
        'Darkblue': 'hsl(235, 46%, 20%)',
        'Desaturatedblue': 'hsl(235, 45%, 61%)',
        'PaleBlue': 'hsl(236, 100%, 87%)'
      }
    },
  },
  plugins: [],
}