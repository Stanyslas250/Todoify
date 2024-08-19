/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        light: {
          primary: "#03964d",
          secondary: "#70f0b0",
          accent: "#0adb73",
          neutral: "#0f3d24",
          "base-100": "#e7f9ef",
        },
        dark: {
          primary: "#69fcb3",
          secondary: "#0f9050",
          accent: "#22f58b",
          neutral: "#103d25",
          "base-100": "#06170e",
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

  //...
};