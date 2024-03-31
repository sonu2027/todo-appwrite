/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        animation: {
          fadeIn: "fadeIn 2s ease-in-out", // animation-name, duration, easing
        },
      },
      screens: {
        "custom-sm": "400px",
        "custom-md": "800px", // Define a custom breakpoint named 'custom-md' with a minimum width of 800px
        "custom-lg": "1024px", // Define another custom breakpoint named 'custom-lg' with a minimum width of 1024px
        // Add more custom breakpoints as needed
      },
    },
  },
  plugins: [],
};
