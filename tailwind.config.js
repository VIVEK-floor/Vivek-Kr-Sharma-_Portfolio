/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: { ink: "#0F1228", mint: "#5EEAD4", violet: "#8B7CFF" },
    },
  },
  plugins: [],
};
