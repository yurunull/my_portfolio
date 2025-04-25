/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        TOKAngle: ["TOKAngle", "sans-serif"],
        HANNARI: ["HANNARI", "serif"],
        DS_DIGI: ["DS_DIGI", "sans-serif"],
      },
      colors: {
        Light_brown: "#976653",
        brown: "#403020",
        Light_yellow: "#fbffc2",
        shell: "#fbdac8",
        baby: "#fdede4",
        Light_blue: "#6283C2",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(100px) rotate(-360deg)",
          },
        },
        Float: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(50vh) rotate(180deg)" },
          "100%": { transform: "translateY(100vh) rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        orbit: "orbit 5s linear infinite",
        Float: "Float 10s linear infinite",
      },
    },
  },
  plugins: [],
};
