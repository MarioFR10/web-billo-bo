import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        24: '6rem',
        51: '12.75rem',
        68: '17rem',
        80: '20rem',
        106: '26.5rem',
      },
      colors: {
        primary: {
          DEFAULT: "#0066FF",
          dark: "#002CD3",
          light: "#E6F0FF",
          blush: "#B7C5EB",
          disabled: "#B3D1FF",
        },
        billo: {
          blue: "#1780D7",
          gray: "#FAFBFC",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
