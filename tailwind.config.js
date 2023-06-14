/** @type {import('tailwindcss').Config} */

import { useSelector } from 'react-redux';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
    },
    extend: {
      colors: {
        gray: {
          800: '#48555B',
        },
        primary: '#00A4E5',
      },
      backgroundImage: {
        touch: "url('/src/assets/touch-bg.png')",
        touch2: "url('/src/assets/bg2.png')",
        main: "url('/src/assets/bg.jpg')",
      },
      screens: {
        xs: '360px',
      }
    },
  },
  plugins: [],
}

