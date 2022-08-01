/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "topNav" : '#262626',
        "linkBg" : "#323232",
        "bgSolid" : "#212121",
        "bgGenA": "#181818",
        "bgPrim": "rgba(33, 33, 33, 0.98)",
        "bgSec": "rgba(33, 33, 33, 0.95)",
        "bgGenB": "#0f0f0f",
        "bgGenC": "#030303",
        "searchBoxBg" : "hsl(0, 0%, 7%)",
        "searchBtnBg": "hsla(0, 0%, 100%, 0.08)",
        "secondaryNavBg" : "rgba(33, 33, 33, 0.98)",
        "linkBgColor" : "rgba(255, 255, 255, 0.1)"
      },
      borderWidth: {
        "b5" : "0.000125rem"
      },
      width: {
       "w-90px" : "90px",
       "w-72px" : "72px",
       "w-1254px" : "1254px",
       "24.8%": "24%",
       "w-22": "89px",
       "30%" : "30%"
      }, 
      borderColor: {
        "borderBg" : "#323232",
        "borderTopColor" : "rgba(255, 255, 255, 0.1)",
        "borderBottomColor" : "rgba(255, 255, 255, 0.1)"
      },
      padding: {
        "p-18px": "18px",
        "p-14px": "14px"
      },
      flex: {
        "01728px": "0 1 728px"
      },
      flexBasis: {
        "1e-9px": "0.000000001px"
      },
      colors: {
        "searchBorderColor" : "hsl(0, 0%, 18.82%)",
        "searchFontColor" : "hsla(0, 100%, 100%, 0.88)",
        "allColor" : "#030303",
        "secColor" : "#aaa"
      },
      boxShadow: {
        "searchBoxShadow": " inset 0 1px 2px hsla(0, 0%, 0%, 0)"
      },
      borderRadius: {
        "40px" : "40px"
      },
      fontSize: {
        "10px" : "10px"
      },
      maxWidth: {
        "8xl" : "1296px",
        "10xl" : "1098px"
      },
      spacing: {
        "7.5rem" : "7.4rem",
        "72px" : "72px"
      }
    },
  },
  plugins: [],
}
