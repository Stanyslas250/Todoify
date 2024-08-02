/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2f27ce",
          secondary: "#dddbff",
          accent: "#443dff",
          neutral: "#0f0f3d",
          "base-100": "#fbfbfe",
        },
        dark: {
          primary: "#3a31d8",
          secondary: "#020024",
          accent: "#0600c2",
          neutral: "#0f0f3d",
          "base-100": "#010104",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
