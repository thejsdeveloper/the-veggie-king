import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: {
        ...colors.gray,
        900: "#212121",
        300: "#E0E0E0",
        50: "#FAFAFA",
      },
      orange: {
        ...colors.orange,
        600: "#FB8C00",
        500: "#FFA83A",
      },
      green: {
        ...colors.green,
        600: "#2E7D32",
        500: "#439E47",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-raleway)"],
      },
      fontSize: {
        xl: "61px",
        l: "35px",
        m: "25px",
        sm: "20px",
        caption: "17px",
      },
    },
  },
  plugins: [],
};
export default config;
