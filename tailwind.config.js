/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
      },
      backgroundImage: {
        bglinelight: "url('/public/bg_line_light.png')",
        bglinedark: "url('/public/bg_line_dark.png')",
      },
      animation: {
        "bounce-fast": "bounce 0.3s infinite",
        "pulse-fast": "pulse 0.8s infinite",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
