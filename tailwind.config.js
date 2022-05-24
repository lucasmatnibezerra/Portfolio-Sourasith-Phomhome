module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontSize:{
      masthead:['70px','80px'],
      about:['19px','56px'],
      comment:['13px','16px']
    },
    extend: {
      backgroundImage: {
        'spooky': "url('/public/assets/Moon.png')",
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
