import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
        purita: "#3B699A",
        jirol: "#93C01F",
        felix: "#EC8334",
      },
      borderRadius: {
        "4xl": "56px",
      },
      animation: {
        "levitating": "levitating 5s infinite ease-in-out alternate",
        "spinHighlight": "spinHighlight 4s infinite ease-in-out"
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('mobile-land', '@media (max-height: 480px) and (orientation: landscape)')
    })
  ],
};
export default config;
