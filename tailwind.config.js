/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        sm: { min: "640px" },

        xl: { max: "1279px" },

        "2xl": { min: "1535px" },

        lg: { min: "1023px" },

        md: { min: "767px" },
      },
    },
  },
  plugins: [],
};
