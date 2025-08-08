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
        montserrat: ["Montserrat", "sans-serif"],
        cormorantInfant: ["CormorantInfant", "serif"],
      },
      colors: {
        customPink: "#F59D9D",
        customDarkGrey: "#848484",
        customLightGrey: "#D9D9D9",
        customDarkGrey2: "#efefef",
        customWhite: "#F6FAF7",
        customBlack: "#5a5a5a",
      },
      // inset: {
      //   17: "68px",
      //   22: "88px",
      //   26: "104px",
      // },
      // spacing: {
      //   127: "127px",
      //   125: "125px",
      // },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
