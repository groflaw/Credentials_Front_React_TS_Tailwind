import withMT from '@material-tailwind/react/utils/withMT'

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      // xs: '400px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1328px',
      '2xl': '1428px',
    },
    colors: {
      white: '#fff',
      black: '#000',
      primary: {
        0: '#F1F2F9',
        25: '#DCDFEF',
        50: '#B8C0E0',
        100: '',
        200: '',
        300: '',
        400: '',
        500: '#29335C',
        600: '#212845',
        700: '#212845',
        800: '',
        900: '#0D101C',
      },
      gray: {
        25: '#FCFCFD',
        100: '#F2F4F7',
        200: '#EAECF0',
        300: '#D0D5DD',
        400: '#98A2B3',
        500: '#667085',
        600: '',
        700: '#344054',
        800: '',
        900: '#101828',
      },
      success: '#12B76A',
      warn: '#F3A712',
      secondary: '#475467'
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
})
