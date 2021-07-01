module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
      kumbh: ["Kumbh Sans", "ui-sans-serif", "system-ui"]
    },
    extend: {
      colors: {
        github: "#4078c0",
        linkedin: "#00a0dc",
        gmail: "#dd4b39"
      },
      backgroundImage: () => ({
        "react-logo": "url('/react.png')",
        "node-logo": "url('/node.png')",
        "git-logo": "url('/git.png')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
