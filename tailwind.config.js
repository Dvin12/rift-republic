/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      darkBlack: "#111",
      black: "#2C3333",
      darkGrey: "#2E4F4F",
      blue: "#0E8388",
      lightGrey: "#CBE4DE",
      lightYellow: "#F6FDC3",
      white: "#FFF",
    },
    fontFamily: {
      Koulen: ["Koulen"],
      Inter: ["Inter"],
    },
    extend: {},
  },
  plugins: [],
};
