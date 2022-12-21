/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        "hero-bg": "url('../assets/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
