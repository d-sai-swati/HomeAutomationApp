/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './navigation/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        int: ['Inter-Regular'],
        intMed: ['Inter-Medium'],
        intSemi: ['Inter-SemiBold'],
        intBold: ['Inter-Bold'],
        gil: ['Gilroy-Regular'],
        gilMed: ['Gilroy-Medium'],
        gilSemi: ['Gilroy-SemiBold'],
        gilBold: ['Gilroy-Bold'],
        gilExt: ['Gilroy-Black'],
        pacico: ['Pacifico-Regular'],
        akaya: ['AkayaKanadaka-Regular'],
      },
      colors: {
        primary: '#79C80B',
        'Green': '#79C80B',
        'Blue': '#5594FE',
        'slateGray100': '#FAFAFA',
        'slateGray200': '#DADADA', //input border
        'slateGray300': '#F0F0F0', // Mecury
        'slateGray400': '#94a3b8',
        'slateGray500': '#64748b',
        'slateGray600': '#475569',
        'slateGray700': '#334155',
        'slateGray800': '#A6A6A7',
        'slateGray900': '#88888A',
      },
      backgroundColor: {
        primary: '#79C80B',
        'bgGreen': '#79C80B',
        'bgBlue': '#5594FE',
        'slateGray100': '#FAFAFA',
        'slateGray200': '#DADADA', //input border
        'slateGray300': '#F0F0F0', // Mecury
        'slateGray400': '#94a3b8',
        'slateGray500': '#64748b',
        'slateGray600': '#475569',
        'slateGray700': '#334155',
        'slateGray800': '#A6A6A7',
        'slateGray900': '#88888A',
      },
      textColor: {
        primary: '#79C80B',
        'textGreen': '#79C80B',
        'textBlue': '#5594FE',
        'light-black': '#162522',
        'light-white': '#F9F9F9', // Add the bg-light-white" class
        'light-white1': '#ECEDF1',
        'light-dark': '#9ca3af',
      },
    },
  },
  plugins: [],
};

