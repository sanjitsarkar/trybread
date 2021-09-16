module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#796CFA",
        secondary: "#191919",
        darkerGray: "#565353",
        textDark: "#2B2A35",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
