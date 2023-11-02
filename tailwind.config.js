/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        name: ['Dancing Script', 'sans serif'],
        general: ['Raleway', 'sans'],
      },
    },
  },
  plugins: [],
};

module.exports = config;
