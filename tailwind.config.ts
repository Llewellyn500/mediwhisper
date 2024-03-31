import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkcyan: "#269da3",
        white: "#fff",
        lightseagreen: "#40b8bd",
        black: "#000",
        whitesmoke: "#eaeaea",
        gray: "rgba(30, 30, 30, 0.08)",
        red: "#d90000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        lato: "Lato",
        "redacted-script": "'Redacted Script'",
      },
      borderRadius: {
        xl: "20px",
        mini: "15px",
      },
    },
    fontSize: {
      "6xl": "1.563rem",
      xl: "1.25rem",
      "11xl": "1.875rem",
      "29xl": "3rem",
      mini: "0.938rem",
      base: "1rem",
      "13xl": "2rem",
      lgi: "1.188rem",
      "7xl": "1.625rem",
      "5xl": "1.5rem",
      "102xl": "7.563rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
export default config;
