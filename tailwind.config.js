/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'fortnite-blue': '#053475'
      }
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}

