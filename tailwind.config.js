/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/custom.css"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-color": "#181818",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".pl-4": {
          paddingLeft: "1rem",
        },
        ".left-px": {
          left: "1140px",
        },
        ".pr-px": {
          paddingRight: "870px",
        },
      };
      addUtilities(newUtilities);
    },

    require("tailwindcss"),
  ],
};
