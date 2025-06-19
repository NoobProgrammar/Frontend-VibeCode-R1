/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Add a tech-oriented font
        tech: ["Orbitron", "Rajdhani", "Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
