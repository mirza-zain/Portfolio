/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: "#00FFFF", // Neon cyan
        electric: "#BF00FF", // Electric purple
      },
      boxShadow: {
        "glow-electric": "0 0 10px #BF00FF, 0 0 20px #BF00FF",
        'bottom-dark': '5px 8px 2px 1px #BF00FF',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.stroke-1': {
          '-webkit-text-stroke-width': '2px',
        },
        '.stroke-2': {
          '-webkit-text-stroke-width': '4px',
        },
        '.stroke-black': {
          '-webkit-text-stroke-color': '#000',
        },
        '.stroke-electric': {
          '-webkit-text-stroke-color': '#BF00FF',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

