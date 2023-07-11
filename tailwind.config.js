/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#292D32",
        "primary-green": "#68939D",
        "primary-brown": "#9E7167",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        primaryBg:
          "linear-gradient(to bottom, rgba(103, 148, 158, 1),rgba(158, 113, 103, 1))",
        primaryButton:
          "linear-gradient(to right, rgba(103, 148, 158, 1),rgba(158, 113, 103, 1))",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
