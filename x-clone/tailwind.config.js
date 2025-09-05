/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html}",
    "./**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Add this to force regeneration
  corePlugins: {
    preflight: true,
  }
}