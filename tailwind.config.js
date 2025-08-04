/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      container:{
        "center": true,
        screens: {
          DEFAULT: "100%",
        },
      },
      fontFamily: {
        danaBlack: ["dana black", "sans-serif"],
        danaBold: ["dana bold", "sans-serif"],
        danaDemibold: ["dana demibold", "sans-serif"],
        danaExtrabold: ["dana extrabold", "sans-serif"],
        danaExtralight: ["dana extralight", "sans-serif"],
        danaLight: ["dana light", "sans-serif"],
        danaMedium: ["dana medium", "sans-serif"],
        danaRegular: ["dana regular", "sans-serif"],
        danaThin: ["dana thin", "sans-serif"],
      },
      colors: {
        darkBgSection: "#1f242d",
        lightBgSection: "#323946",
        themColor: "#00eeff",
        customeWhite: "#e5e7eb",
      },
      animation: {
        Skills90: "Skills90 5s ease",
        Skills80: "Skills80 5s ease",
        Skills75: "Skills75 5s ease",
        Skills70: "Skills70 5s ease",
        OpenMenu: "OpenMenu 2s ease",
        CloseMenu: "CloseMenu 2s ease",
        OpenCover: "OpenCover 2s ease",
        CloseCover: "CloseCover 2s ease",
        utb: "utb 2s ease",
        btu: "btu 2s ease",
        rtl: "rtl 2s ease",
        ltr: "ltr 2s ease",
        onoff: "onoff 3s ease",
      },
      keyframes: {
        Skills90: {
          "0%": { width: "0%" },
          "100%": { width: "90%" },
        },
        Skills80: {
          "0%": { width: "0%" },
          "100%": { width: "80%" },
        },
        Skills75: {
          "0%": { width: "0%" },
          "100%": { width: "75%" },
        },
        Skills70: {
          "0%": { width: "0%" },
          "100%": { width: "75%" },
        },
        OpenMenu: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        CloseMenu: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        OpenCover: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        CloseCover: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        onoff: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        utb: {
          "0%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(0%)" },
        },
        btu: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        ltr: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        rtl: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
