/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#00FFFF", // Neon cyan
        electric: "#BF00FF", // Electric purple
      },
      boxShadow: {
        "glow-neon": "0 0 8px #00FFFF",
        "glow-electric": "0 0 8px #BF00FF",
      },
    },
  },
  plugins: [],
}

