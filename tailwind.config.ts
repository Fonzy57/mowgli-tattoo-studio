import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px", // mobile => @media (min-width: 375px)
      sm: "768px", //  tablet portrait => @media (min-width: 720px)
      md: "1024px", // tablet paysage => @media (min-width: 1020px)
      lg: "1440px", // laptop => @media (min-width: 1435px)
      xl: "1920px", // desktop => @media (min-width: 1915px)
    },
    colors: {
      white: "#FFF",
      black: "#000",
      bgDark: "#1E1E1E",
      main: {
        DEFAULT: "#FFD161",
        hover: "#FFBA45",
        active: "#E6C053",
        altLight: "#FFF4E1",
        altDark: "#D9B44A",
      },
      secondary: {
        DEFAULT: "#FA9023",
        hover: "#E97818",
        active: "#D16F15",
        altLight: "#FA9023",
        altDark: "#FA9023",
      },
      border: {
        light: "#F1CEA1",
        dark: "#B85C0E",
      },
      text: { DEFAULT: "#46320F", light: "#F5F5F5" },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        cera: ["var(--font-cera)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "full-main": "0 0 50px rgb(255 209 97 / 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
