import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "overlay-down": "linear-gradient(to bottom, #0000, #000b)",
      },
      colors: {
        "cens-brand": "#005F24",
        "cens-light": "#93C01F",
        "cens-medium": "#39A935",
        "cens-dark": "#00833B",
      },
      borderRadius: {
        "4xl": "56px",
      },
    },
  },
  plugins: [],
};
export default config;
