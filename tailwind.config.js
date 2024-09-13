/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lBlue: "#13A3D7",
      },
      height: {
        13: "3.2rem",
        100: "25rem", // 400px
        104: "26rem", // 416px
        108: "27rem", // 432px
        112: "28rem", // 448px
        116: "29rem", // 464px
        120: "30rem", // 480px
        128: "32rem", // 512px
        140: "35rem", // 560px
        160: "40rem", // 640px
      },
      animation: {
        loading: "loading 0.7s ease infinite",
        pageLoadIn: "pageLoadIn 0.5s ease forwards",
        modalOpen: "modalOpen 0.4s ease",
        navBarOpen: "navBarOpen 0.3s ease forwards",
        navBarClose: "navBarClose 0.3s ease forwards",
        navIconTop: "navIconTop 0.3s ease forwards",
        navIconBottom: "navIconBottom 0.3s ease forwards",
        navIconMid: "navIconMid 0.3s ease forwards",
        navIconTopClose: "navIconTopClose 0.3s ease forwards",
        navIconBottomClose: "navIconBottomClose 0.3s ease forwards",
        navIconMidClose: "navIconMidClose 0.3s ease forwards",
      },
      keyframes: {
        loading: {
          "0%": {
            transform: "rotate(0deg) scale(1)",
          },
          "85%": {
            transform: "rotate(1turn) scale(1.5)",
          },
          "100%": {
            transform: "rotate(1turn) scale(1)",
          },
        },
        pageLoadIn: {
          "0%": {
            transform: "translateY(-16)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        modalOpen: {
          "0%": {
            opacity: "0",
            transform: "translate3d(-50%,-80%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(-50%,-50%, 0)",
          },
        },
        navIconTop: {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            backgroundColor: "#000",
          },
          "100%": {
            transform: "translateY(10px) rotate(45deg)",
            backgroundColor: "#13A3D7",
          },
        },
        navIconMid: {
          "0%": {
            width: "100%",
            opacity: "1",
            backgroundColor: "#000",
          },
          "100%": {
            width: "0px",
            opacity: "0",
            backgroundColor: "#13A3D7",
          },
        },
        navIconBottom: {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            backgroundColor: "#000",
          },
          "100%": {
            transform: "translateY(-10px) rotate(-45deg)",
            backgroundColor: "#13A3D7",
          },
        },
        navIconTopClose: {
          "100%": {
            transform: "translateY(0) rotate(0deg)",
            backgroundColor: "#000",
          },
          "0%": {
            transform: "translateY(10px) rotate(45deg)",
            backgroundColor: "#13A3D7",
          },
        },
        navIconMidClose: {
          "100%": {
            width: "100%",
            opacity: "1",
            backgroundColor: "#000",
          },
          "0%": {
            width: "0px",
            opacity: "0",
            backgroundColor: "#13A3D7",
          },
        },
        navIconBottomClose: {
          "100%": {
            transform: "translateY(0) rotate(0deg)",
            backgroundColor: "#000",
          },
          "0%": {
            transform: "translateY(-10px) rotate(-45deg)",
            backgroundColor: "#13A3D7",
          },
        },
        navBarOpen: {
          "0%": {
            opacity: "0",
            transform: "translateY(-16)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        navBarClose: {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-16)",
          },
        },
      },
    },
  },
  plugins: [],
};
