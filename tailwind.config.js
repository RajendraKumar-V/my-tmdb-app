/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/custom.css"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-color": "#181818", // Use your desired color code here
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
        // You can add more custom utilities as needed
      };
      addUtilities(newUtilities);
    },

    require("tailwindcss"),
  ],
};
