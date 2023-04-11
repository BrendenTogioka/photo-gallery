/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      expletusSans: "var(--expletusSans-font)",
      // "body": "var(--body-font)",
    },
  },
  plugins: [],
};
