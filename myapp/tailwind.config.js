/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customc: "#f9fafb"
      },
      backgroundColor:  {
        custom1: "#2d2d30"
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

