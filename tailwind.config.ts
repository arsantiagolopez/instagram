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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        link: "var(--link)",
        "link-hover": "var(--link-hover)",
        background: "var(--background)",
        "background-hover": "var(--background-hover)",
        borders: "var(--borders)",
      },
      animation: {
        "drawer-out": "drawer-out 200ms ease-in",
        "drawer-in": "drawer-in 300ms ease-out",
      },
      spacing: {
        dvh: "100dvh",
        "nav-narrow": "var(--nav-narrow-width)",
        "nav-medium": "var(--nav-medium-width)",
        "nav-drawer": "var(--nav-drawer-width)",
      },
    },
  },
  plugins: [],
};

export default config;
