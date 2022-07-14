module.exports = {
  content: ["./*.html", "./Script/*.js"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: " 'Montserrat'",
        Raleway: "'Raleway'",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
