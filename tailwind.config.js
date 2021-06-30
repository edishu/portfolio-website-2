module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
      kumbh: ["Kumbh Sans", "ui-sans-serif", "system-ui"]
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
