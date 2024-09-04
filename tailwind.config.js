/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        0.25: '0.0625rem',
        0.75: '0.1875rem',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        suse: ['SUSE', 'sans-serif'],
      },
      colors: {
        background: 'rgb(15, 23, 42)',
        neutral: {
          100: '#F0F4F8',
          200: '#D9E2EC',
          300: '#BCCCDC',
          400: '#9FB3C8',
          500: '#829AB1',
          600: '#627D98',
          700: '#486581',
          800: '#334E68',
          900: '#243B53',
          1000: '#102A43',
        },
        primary: {
          100: '#044E54',
          200: '#0A6C74',
          300: '#0E7C86',
          400: '#14919B',
          500: '#2CB1BC',
          600: '#38BEC9',
          700: '#54D1DB',
          800: '#87EAF2',
          900: '#BEF8FD',
          1000: '#E0FCFF',
        },
      },
    },
  },
  plugins: [],
};
