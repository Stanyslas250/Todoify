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
          primary: "#1c346e",
          secondary: "#6d92e8",
          accent: "#104ee0",
          neutral: "#141f39",
          "base-100": "#e5eaf6",
          "base-200": "#d7e6ff",
          "base-300": "#b8d5ff",
          "base-400": "#98c2e9",
          "base-500": "#6998f0",
          "base-600": "#4271d7",
          "base-700": "#2852b5",
          "base-800": "#1c346e",
        },
        dark: {
          primary: "#90a9e3",
          secondary: "#163b90",
          accent: "#205fef",
          neutral: "#142038",
          "base-100": "#090e19",
          "base-200": "#080b15",
          "base-300": "#070912",
          "base-400": "#06070e",
          "base-500": "#05060b",
          "base-600": "#040408",
          "base-700": "#030306",
          "base-800": "#020203",
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