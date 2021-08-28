module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      abletonOrange: "#FF764D",
      abletonBlue: "#0000FF",
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
