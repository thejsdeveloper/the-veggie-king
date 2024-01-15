import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#212121",
          300: "#E0E0E0",
          50: "#FAFAFA",
        },
        orange: {
          600: "#FB8C00",
          500: "#FFA83A",
        },
        green: {
          600: "#2E7D32",
          500: "#439E47",
        },
      },
      fontFamily: {
        sans: ["var(--font-raleway)"],
      },
      fontSize: {
        xl: "61px",
        lg: "35px",
        md: "25px",
        sm: "20px",
        caption: "17px",
      },
      spacing: {
        104: "104px",
      },
      letterSpacing: {
        tighter: "0.25px",
        tight: "0.5px",
        normal: "0px",
        wide: "1px",
      },
      boxShadow: {
        shadow: "0px 10px 20px 0px rgba(33, 33, 33, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
