import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2c4cd7",
        "primary-container": "#4a67f1",
        secondary: "#6b38d4",
        "secondary-container": "#8455ef",
        tertiary: "#974400",
        success: "#22C55E",
        warning: "#F97316",
        danger: "#E24B4A",
        error: "#ba1a1a",
        info: "#3B82F6",
        background: "#f9f9ff",
        "app-bg": "#F8FAFF",
        surface: "#f9f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f1f3ff",
        "surface-container": "#e8edff",
        "surface-container-high": "#e0e8ff",
        "surface-container-highest": "#d8e2ff",
        "surface-variant": "#d8e2ff",
        "surface-dim": "#cbdaff",
        "on-surface": "#081b39",
        "on-surface-variant": "#444655",
        "inverse-surface": "#1f304f",
        "inverse-on-surface": "#edf0ff",
        "inverse-primary": "#b9c3ff",
        "border-subtle": "#E8EDF5",
        "brand-light": "#EEF2FF",
        outline: "#757686",
        "outline-variant": "#c4c5d7",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        label: ["11px", { lineHeight: "14px", letterSpacing: "0.05em", fontWeight: "600" }],
        caption: ["12px", { lineHeight: "16px", fontWeight: "400" }],
        body: ["14px", { lineHeight: "22px", fontWeight: "400" }],
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      spacing: {
        "topbar-height": "72px",
        "margin-page": "1.5rem",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.9" },
          "80%,100%": { transform: "scale(2.4)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
