/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        light: "#DBD3D3",
        DEFAULT: "#DBD3D3",
        dark: "#0F172A",
      },
      secondary: {
        light: "#024CAA",
        DEFAULT: "#024CAA",
        dark: "#EC8305",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
