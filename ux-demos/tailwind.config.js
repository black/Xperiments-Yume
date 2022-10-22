/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      fontFamily: {
        sans: [
          'Poppins', 'sans-serif'
        ]
      }, 
      height: {
        'screen-quater': '25vh',
        'screen-half': '50vh',
        'screen-three-quater': '75vh'
      },
      colors: {
        yume: {
          'blue': '#263C97',
          'blue-0': '#91F5E5',
          'blue-1': '#0A66EC',
          'blue-2': '#253F9C',
          'pink-0': '#F46967',
          'grey-1': '#FAFAFA',
          'grey-2': '#E9E9E9',
          'modal': 'rgba(0,0,0,0.7)',
          'transparent': '#ffffff40'
        } 
      }, 
    },
  },
  plugins: [],
}