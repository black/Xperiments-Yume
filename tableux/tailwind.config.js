/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
       colors: {
         yume: { 
           'grey-1': '#FAFAFA',
           'grey-2': '#E9E9E9',
           'grey-3': '#F2F2F2',
           'backdrop':'rgba(0,0,0,0.35)'
         } 
       },
    },
  },
  plugins: [],
}
