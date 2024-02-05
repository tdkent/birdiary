import { extendTheme } from '@chakra-ui/react';

import '@fontsource-variable/open-sans'; // Supports weights 300-800
import '@fontsource-variable/caveat'; // Supports weights 400-700

import { headingTheme } from './heading';

const theme = extendTheme({
  colors: {
    blue: {
      50: '#DCEEFB',
      100: '#B6E0FE',
      200: '#84C5F4',
      300: '#62B0E8',
      400: '#4098D7',
      500: '#2680C2',
      600: '#186FAF',
      700: '#0F609B',
      800: '#0A558C',
      900: '#003E6B'
    },
    gray: {
      50: '#F0F4F8',
      100: '#D9E2EC',
      200: '#BCCCDC',
      300: '#9FB3C8',
      400: '#829AB1',
      500: '#627D98',
      600: '#486581',
      700: '#334E68',
      800: '#243B53',
      900: '#102A43'
    },
    teal: {
      50: '#F0FCF9',
      100: '#C6F7E9',
      200: '#8EEDD1',
      300: '#5FE3C0',
      400: '#2DCCA7',
      500: '#17B897',
      600: '#079A82',
      700: '#048271',
      800: '#016457',
      900: '#004440'
    }
  },
  fonts: {
    body: `'Open Sans Variable', sans-serif`,
    heading: `'Open Sans Variable', sans-serif`
  },
  components: {
    Heading: headingTheme
  }
});

export default theme;
