module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darken: '#0A192F',
        primary: {
          500: '#54FFC4',
          600: '#4BE8AD',
          700: '#42CE9E',
        },
      },
      fontFamily: {
        display: ['Source Sans Pro', 'sans-serif'],
        body: ['Helvetica, Arial, sans-serif'],
      },
    },
  },
  plugins: [],
}
