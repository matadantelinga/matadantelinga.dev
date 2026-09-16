import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F7F5",
        white: "#FFFFFF",
        ink: "#111111",
        secondary: "#6F6F6A",
        border: "#E5E5E0",
        blue: "#426BFF",
        "blue-light": "#E9EEFF",
      },
      fontFamily: {
        sans: [
          "Geist",
          "Inter",
          "Manrope",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        content: "1400px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
