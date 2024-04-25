/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: [
    {
      pattern:
        /from-(basf-blue|basf-pale-blue|basf-light-blue|basf-pale-light-blue|basf-dark-green|basf-pale-dark-green|basf-light-green|basf-pale-light-green|basf-orange|basf-pale-orange|basf-red|basf-pale-red)/,
      variants: ["lg", "hover", "focus", "[&.active]"],
    },
    {
      pattern:
        /to-(basf-blue|basf-pale-blue|basf-light-blue|basf-pale-light-blue|basf-dark-green|basf-pale-dark-green|basf-light-green|basf-pale-light-green|basf-orange|basf-pale-orange|basf-red|basf-pale-red)/,
      variants: ["lg", "hover", "focus", "[&.active]"],
    },
    {
      pattern:
        /bg-(basf-blue|basf-pale-blue|basf-light-blue|basf-pale-light-blue|basf-dark-green|basf-pale-dark-green|basf-light-green|basf-pale-light-green|basf-orange|basf-pale-orange|basf-red|basf-pale-red)/,
      variants: ["lg", "hover", "focus", "[&.active]"],
    },
    {
      pattern:
        /border-(basf-blue|basf-pale-blue|basf-light-blue|basf-pale-light-blue|basf-dark-green|basf-pale-dark-green|basf-light-green|basf-pale-light-green|basf-orange|basf-pale-orange|basf-red|basf-pale-red)/,
      variants: ["lg", "hover", "focus", "[&.active]"],
    },
    {
      pattern:
        /text-(basf-blue|basf-pale-blue|basf-light-blue|basf-pale-light-blue|basf-dark-green|basf-pale-dark-green|basf-light-green|basf-pale-light-green|basf-orange|basf-pale-orange|basf-red|basf-pale-red)/,
      variants: ["lg", "hover", "focus", "[&.active]"],
    },
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "basf-blue": "#004694",
        "basf-light-blue": "#21A0D2",
        "basf-dark-green": "#00793A",
        "basf-light-green": "#65AC1E",
        "basf-orange": "#F39500",
        "basf-red": "#C50022",
        "basf-black": "#000000",
        "basf-dark-grey": "#7C7C7C",
        "basf-middle-grey": "#ADADAD",
        "basf-light-grey": "#DCDCDC",
        "basf-white": "#FFFFFF",
        "basf-box-grey": "#F0F0F0",
        "basf-copytext-grey": "#333333",
        "basf-pale-blue": "#E0E9F2",
        "basf-pale-light-blue": "#E0F2F9",
        "basf-pale-dark-green": "#D9EBE2",
        "basf-pale-light-green": "#E0EED2",
        "basf-pale-orange": "#FDEFD9",
        "basf-pale-red": "#F8E0E4",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
