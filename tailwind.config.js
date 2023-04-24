/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red-dark": "#802629",
        "custom-red-light": "#FEEAE8",
        "custom-tan": "#F6D197",
      },
    },
  },
  plugins: [],
};
