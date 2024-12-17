/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{js,ts,vue}', './components/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#ffffff',
          100: '#FEF9FA',
          200: '#FEF8FA',
          300: '#F9F9F9',
          400: '#EAEBED',
          500: '#CDCDD0',
        },
        blue: {
          DEFAULT: '#0070F3',
          100: '#D3E6FC',
          200: '#B9D2F8',
          300: '#A0C5F3',
          400: '#87B9EE',
          500: '#69A0E1',
          600: '#02073E'
        }
      },
      
    },
  },
  plugins: [],
};
