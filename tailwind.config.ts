import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "768px",
      md: "1160px",
      lg: "1264px",
    },
    extend: {
      colors: {
        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",
        "tertiary-text": "var(--tertiary-text)",
        link: "var(--link)",
        "link-hover": "var(--link-hover)",
        background: "var(--background)",
        "background-hover": "var(--background-hover)",
        borders: "var(--borders)",
        "highlight-background": "var(--highlight-background)",
        placeholder: "var(--placeholder)",
        "primary-button": "var(--primary-button)",
        "primary-button-hover": "var(--primary-button-hover)",
        "secondary-background": "var(--secondary-background)",
        "banner-background": "var(--banner-background)",
        "hover-overlay": "var(--hover-overlay)",
        stroke: "var(--stroke)",
      },
      animation: {
        "drawer-out": "drawer-out 400ms ease-in-out",
        "drawer-in": "drawer-in 400ms ease-in-out",
        "skeleton-shimmer": "skeleton-shimmer 6s infinite",
        "slide-in": "slide-in 200ms ease-in-out",
        "slide-out": "slide-out 200ms ease-in-out",
      },
      spacing: {
        dvh: "100dvh",
        "nav-narrow": "var(--nav-narrow-width)",
        "nav-medium": "var(--nav-medium-width)",
        "nav-drawer": "var(--nav-drawer-width)",
      },
      backgroundImage: {
        "gradient-10": "linear-gradient(-10deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
