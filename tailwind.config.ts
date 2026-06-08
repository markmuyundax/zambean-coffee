import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FEF9E7",
          100: "#FDF3D4",
          200: "#FBE7A9",
          300: "#F9DB7E",
          400: "#F7CF53",
          500: "#F5C328",
          800: "#C49408",
          900: "#7A5D05",
        },
        espresso: {
          50: "#F5F0EB",
          100: "#E0D5C7",
          200: "#C2AA8E",
          300: "#A38055",
          400: "#5C3D1E",
          500: "#3B2210",
          600: "#261208",
          700: "#1A120B",
          800: "#140D07",
          900: "#0D0805",
          950: "#070402",
        },
        garden: {
          50: "#E8F5E8",
          100: "#C8E6C8",
          200: "#A5D6A5",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50",
          600: "#43A047",
          700: "#388E3C",
          800: "#2E7D32",
          900: "#1B5E20",
        },
        clay: {
          50: "#FDF0E8",
          100: "#FBE0CC",
          200: "#F7C19E",
          300: "#F3A270",
          400: "#EF8342",
          500: "#DC733E",
          600: "#C56435",
          700: "#A8542C",
          800: "#8B4423",
          900: "#6E341A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
