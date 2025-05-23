import type { Config } from "tailwindcss";

const config: Config = {
  exports: {
    important: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      tablet: "768px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1366px",
      xl: "1680px",
    },
    extend: {
      fontFamily: {
        titulo: ["var(--font-Alumni-Sans)"],
        corpo: ["var(--font-Fira-Code)"],
      },

      backgroundImage: {
        insted_light: "url('/area_insted_light.png')",
        insted_dark: "url('/area_insted_dark.png')",
        insted_home_dark: "url('/area_home_dark.png')",
        insted_home_light: "url('/area_home_light.png')",
        insted_perfil_dark: "url('/area_perfil_dark.png')",
        insted_perfil_light: "url('/area_perfil_light.png')",
      },
      colors: {
        white: "#FFDFCE",
        dark: "#0C292F",
        destaque: "#E4523F",
      },
      boxShadow: {
        "3xl": "inset 0 -150px 25px -110px",
      },
    },
    gridTemplateRows: {
      // Simple 8 row grid
      "10": "repeat(10, minmax(0, 1fr))",
    },
    gridRow: {
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-full": "1 / -1;",
    },
    plugins: [],
  },
};

export default config;
