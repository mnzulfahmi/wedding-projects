/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "370px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      padding: {
        "1/3": "33.33333%",
        "2/3": "66.66667%",
      },
      keyframes: {
        openInvitation: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(30px)" },
          "100%": { transform: "translateY(-2500px)", display: "none" },
        },
        zoomInOut: {
          "0%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.05, 1.05)" },
          "100%": { transform: "scale(1, 1)" },
        },
      },
      animation: {
        openInvitation: "openInvitation 3s linear forwards",
        zoomInOut: "zoomInOut 1s ease infinite",
      },
      fontFamily: {
        dancing_script: ["Dancing Script", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customBrown: "#2C2321",
        customLightBrown: "#5F4938",
        customDarkBrown: "#281A08",
        customGray: "#8f989f",
        customLightGrey: "#D9D9D9",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
