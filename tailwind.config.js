import withMT from '@material-tailwind/react/utils/withMT'

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      primary: {
        0: '#4B56E3',
      },
      gray: {
        25: '',
        100: '',
        200: '',
        300: '',
        400: '#C8CCD9',
        800: '#333743',
        1000: '#000000',
      },
      success: '#12B76A',
      warn: '#F3A712',
      secondary: '#475467',
    },
    fontFamily: {
      lato: ['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
})
