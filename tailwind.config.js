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
        electric: "#06B6D4", // Cyan accent
      },
      boxShadow: {
        "glow-electric": "0 0 10px #06B6D4, 0 0 20px #2563EB",
        'bottom-dark': '5px 8px 2px 1px #0EA5E9',
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
          '-webkit-text-stroke-color': '#06B6D4',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

