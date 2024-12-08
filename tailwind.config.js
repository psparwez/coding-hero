/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#ff7700",
      },

      fontFamily: {
        Sync: ["Syne", "serif"],
        Urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
