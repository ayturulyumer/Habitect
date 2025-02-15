/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"; // Import daisyUI module

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bangers: ["Bangers", "cursive"],
        lexend: ["Lexend", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
      },
      textDecorationThickness: {
        4: "4px", // Custom underline thickness
      },
      colors: {
        hover: "#ffa500",
      },
      keyframes: {
        underlineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        underlineGrow: "underlineGrow 0.3s ease-in-out forwards",
      },
    },
  },
  mode: "jit",
  plugins: [daisyui], // Use the imported daisyui directly
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffa500",
          secondary: "#000000",
          accent: "#e0e0e0",
          neutral: "#F3F4F6",
          "base-100": "#102A43",
          info: "#2563EB",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
