/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        one: "#483C32",
        two: "#445E36",
        three: "#FFFFF0",
        four: "#B3CBA6",
      },
    },
    fontFamily: {
      one: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
