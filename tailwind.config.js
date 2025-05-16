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
        purple: "hsl(256, 67%, 59%)",
        lightPurple: "hsl(254, 88%, 90%)",
        cream: "hsl(31, 66%, 93%)",
        yellow: "hsl(39, 100%, 71%)",
        offWhite: "hsla(0, 27%, 98%, 0.805)",
      },
      fontFamily: {
        "dm-sans": ["var(--font-dm-sans)"],
        figtree: ["var(--font-figtree)"],
        outfit: ["var(--font-outfit)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
