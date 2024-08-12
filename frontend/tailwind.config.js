/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#3bde35",
          "secondary": "#7ce9c8",
          "accent": "#62e4e4",
          "neutral": "#0f3d0f",
          "base-100": "#fbfefb",
        },
        dark: {
          "primary": "#26ca21",
          "secondary": "#168362",
          "accent": "#1b9d9d",
          "neutral": "#0f3d0f",
          "base-100": "#010401",
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
}