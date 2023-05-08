/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom1: "#f9fafb"
      },
      maxHeight: {
        "128": "34rem"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}

