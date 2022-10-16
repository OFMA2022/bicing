/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ["Satisfy"],
      },
      fontSize: {
        logo: ["40px", "60px"],
      },
      colors: {
        primary: "#2196F3",
        "primary-light": "#E3F2FD",
        "primary-dark": "#1E88E5",
        "primary-border": "#90CAF975",
        secondary: "#73d070",
        "secondary-light": "#a8eba6",
        "secondary-dark": "#63b661",
        "input-border-hover": "#B3B3B3",
        "input-border-focus": "#2684FF",
      },
      boxShadow: {
        "input-focus": "0 0 0 1px #2684FF",
      },
      padding: {
        "1/2": "50%",
        full: "100%",
      },
    },
  },
  plugins: [],
};
