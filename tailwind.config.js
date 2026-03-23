/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mustard: {
          50: '#fefcf3',
          100: '#fdf7e0',
          200: '#fbedc2',
          300: '#f8df98',
          400: '#f4c964',
          500: '#f0b13c',
          600: '#e29820',
          700: '#bc7a18',
          800: '#97601a',
          900: '#7a4f19',
        },
      },
    },
  },
  plugins: [],
};
