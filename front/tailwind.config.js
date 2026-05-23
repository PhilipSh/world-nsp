/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      gilroy: "Gilroy",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#1A1A1A",
      green: "#176C4D",
      "green-dark": "#0F4D37",
      "green-deep": "#0A3526",
      "light-green": "#E9FFF4",
      "mint": "#F4FBF7",
      "accent": "#D4A574",
      "accent-soft": "#F5E6D3",
      grey: "#a1a1a1",
      "grey-light": "#E5E7EB",
      "grey-soft": "#F3F4F6",
      "grey-dark": "#4B5563",
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      opacity: {
        12: "0.12",
        15: "0.15",
        18: "0.18",
        22: "0.22",
        28: "0.28",
        35: "0.35",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      boxShadow: {
        "soft": "0 1px 3px rgba(15, 23, 42, 0.06), 0 4px 16px -4px rgba(15, 23, 42, 0.08)",
        "card": "0 2px 6px rgba(15, 23, 42, 0.06), 0 12px 32px -8px rgba(15, 23, 42, 0.12)",
        "lift": "0 4px 12px rgba(15, 23, 42, 0.08), 0 24px 48px -12px rgba(23, 108, 77, 0.22)",
        "glow": "0 0 0 4px rgba(23, 108, 77, 0.12)",
        "inner-soft": "inset 0 1px 2px rgba(23, 108, 77, 0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero": "linear-gradient(180deg, rgba(10,53,38,0.25) 0%, transparent 25%, transparent 75%, rgba(10,53,38,0.35) 100%)",
        "gradient-mint": "linear-gradient(135deg, #F4FBF7 0%, #E9FFF4 100%)",
        "gradient-card": "linear-gradient(180deg, #FFFFFF 0%, #FAFCFB 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out both",
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-up-delay-1": "fadeUp 0.8s ease-out 0.15s both",
        "fade-up-delay-2": "fadeUp 0.8s ease-out 0.3s both",
        "fade-up-delay-3": "fadeUp 0.8s ease-out 0.45s both",
        "scale-in": "scaleIn 0.6s ease-out both",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
