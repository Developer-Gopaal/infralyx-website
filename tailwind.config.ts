import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./app/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d8f0ff",
          200: "#b6e6ff",
          300: "#7fd8ff",
          400: "#46c7ff",
          500: "#1aabff",
          600: "#0088f0",
          700: "#0068c2",
          800: "#005193",
          900: "#06315c"
        }
      },
      boxShadow: {
        glass: "0 18px 50px rgba(2, 8, 23, 0.28)",
        glow: "0 0 0 1px rgba(255,255,255,0.12), 0 20px 50px rgba(6, 182, 212, 0.22)",
        insetGlass: "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.06)"
      }
    }
  },
  plugins: []
};

export default config;
