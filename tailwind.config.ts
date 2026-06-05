import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { orange: "#ff6a00", dark: "#0b0d10", gray: "#f5f6f8" }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, .08)"
      }
    }
  },
  plugins: []
};

export default config;
