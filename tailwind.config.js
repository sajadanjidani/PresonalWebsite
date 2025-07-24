/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      container : {
        center : true,
        screens : {
          DEFAULT : '100%',
        },
      },
      fontFamily : {
        danaBlack : ["dana black","sans-serif"],
        danaBold : ["dana bold","sans-serif"],
        danaDemibold : ["dana demibold","sans-serif"],
        danaExtrabold : ["dana extrabold","sans-serif"],
        danaExtralight : ["dana extralight","sans-serif"],
        danaLight : ["dana light","sans-serif"],
        danaMedium : ["dana medium","sans-serif"],
        danaRegular : ["dana regular","sans-serif"],
        danaThin : ["dana thin","sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
}

