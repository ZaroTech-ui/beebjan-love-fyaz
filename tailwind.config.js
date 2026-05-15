/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: "#D4AF37",
          "gold-light": "#F9E4B7",
          "gold-dark": "#996515",
          emerald: "#043927",
          "emerald-light": "#065F46",
          black: "#050505",
          ivory: "#FFFFF0",
        }
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Poppins", "sans-serif"],
        arabic: ["Amiri", "serif"],
      },
      animation: {
        "glow-slow": "glow 4s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: 0.8, filter: "brightness(100%)" },
          "50%": { opacity: 1, filter: "brightness(150%)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        }
      }
    },
  },
  plugins: [],
}
