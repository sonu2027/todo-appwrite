/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-sm':"400px",
        'custom-md': '800px', // Define a custom breakpoint named 'custom-md' with a minimum width of 800px
        'custom-lg': '1024px', // Define another custom breakpoint named 'custom-lg' with a minimum width of 1024px
        // Add more custom breakpoints as needed
      },
    },
  },
  plugins: [],
}

