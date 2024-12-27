/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'horror': ['Nosifer', 'cursive'],
        'horror-secondary': ['Creepster', 'cursive'],
      },
      animation: {
        'drip': 'drip 3s infinite',
        'fog': 'fog 10s infinite',
        'flicker': 'flicker 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'zombie': "url('/images/zombie-texture.png')",
      },
      zIndex: {
        '25': '25',
      },
    },
  },
  plugins: [],
}
