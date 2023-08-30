/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "Tiger-black": "#0A0000",
        TigerColor: "#FFA500",
      },
      height: {
        "screen-80": "80vh",
      },
      textColor: {
        TigerColor: "#FFA500",
      },
      fontFamily: {
        TigerTitle: ["Libre Baskerville", "serif"],
        TitleDes: ["Rajdhani", "sans-serif"],
        Attendence: ["Bitter", "serif"],
      },
    },
  },
  plugins: [],
};
