module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        mediumFont: "17px",
      },
      colors: {
        abletonOrange: "#FF764D",
        abletonBlue: "#0000FF",
      },
      spacing: {
        100: "27rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
