/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/custom.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    //require("postcss-import"),
    require("tailwindcss"),
    //require("postcss-nested"),
  ],
}

