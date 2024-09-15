import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#e3e0e6',
          200: '#c6c1cc',
          300: '#a9a3b3',
          400: '#8c8499',
          500: '#0b0a13', // main color
          600: '#110f1b',
          700: '#0b0a13',
          800: '#07070d',
          900: '#040406',
        },
        darkPurple: {
          100: '#e5dce9',
          200: '#ccb9d3',
          300: '#b296bc',
          400: '#9973a6',
          500: '#372549', // main color
          600: '#2d1f3b',
          700: '#22172d',
          800: '#18101f',
          900: '#0d0810',
        },
        eggplant: {
          100: '#f0e4e8',
          200: '#e1c9d2',
          300: '#d1aebc',
          400: '#c293a6',
          500: '#774c60', // main color
          600: '#613d4d',
          700: '#4a2e3a',
          800: '#341e26',
          900: '#1d0f13',
        },
        redwood: {
          100: '#f9e7e9',
          200: '#f3cfd2',
          300: '#ecb7bc',
          400: '#e69fa5',
          500: '#b75d69', // main color
          600: '#924a55',
          700: '#6e3741',
          800: '#49252c',
          900: '#251217',
        },
        primary: {
          100: '#fcf4f2',
          200: '#f9e9e4',
          300: '#f5ded6',
          400: '#f2d3c8',
          500: '#eacdc2', // main color
          600: '#d5b5ac',
          700: '#bf9d95',
          800: '#a9857e',
          900: '#937c6e',
        },
      },
    },
  },
  plugins: [],
};
export default config;
