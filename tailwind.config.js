module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        mediumFont: "17px",
        pxl: ["1.6rem", "2rem"],
      },
      colors: {
        abletonOrange: "#FF764D",
        abletonBlue: "#0000FF",
        lemonade: "#FBFFA7",
      },
      spacing: {
        100: "27rem",
        105: "40rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
