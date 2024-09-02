/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Poppins"],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        light: {
          primary: "#440183",
          secondary: "#fe4d6b",
          accent: "#d43702",
          neutral: "#2d004d",
          "base-100": "#f4e5ff",
          "base-200": "#f8f8ff",
          "base-300": "#f2e7ff",
          "base-400": "#f0dfff",
          "base-500": "#f0cfff",
          "base-600": "#e8b8ff",
          "base-700": "#d99bff",
        },
        dark: {
          primary: "#c07dfe",
          secondary: "#af011d",
          accent: "#fd5e29",
          neutral: "#2b004d",
          "base-100": "#0d0017",
          "base-200": "#1a001e",
          "base-300": "#17001e",
          "base-400": "#14001e",
          "base-500": "#11001e",
          "base-600": "#0e001e",
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