import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        electric: "#BF00FF", // Electric purple
        neon: "#00FFFF", // Neon cyan
      },
      boxShadow: {
        "glow-electric": "0 0 10px #BF00FF, 0 0 20px #BF00FF",
        'bottom-dark': '4px 7px 2px -1px #BF00FF',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
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
        '.stroke-white': {
          '-webkit-text-stroke-color': '#fff',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
} satisfies Config;
