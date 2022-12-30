/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      bgColor: "#06283D",
      boxColor: "#256D85",
      outlineColor: "#47B5FF",
      textColor: "#DFF6FF",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      sky: colors.sky,
      cyan: colors.cyan,
      blue: colors.blue,
    },
  },
  plugins: [],
};
