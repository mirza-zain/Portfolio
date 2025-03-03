import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: "#BF00FF", // Electric purple
        neon: "#00FFFF", // Neon cyan
      },
      boxShadow: {
        "glow-electric": "0 0 10px #BF00FF, 0 0 20px #BF00FF",
        "glow-neon": "0 0 10px #00FFFF, 0 0 20px #00FFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
