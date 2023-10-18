/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },

        xl: { max: "1279px" },

        "2xl": { min: "1535px" },

        lg: { min: "641px" },

        md: { min: "767px" },

        "3xl": { min: "2000px" },
      },
    },
  },
  plugins: [],
};
