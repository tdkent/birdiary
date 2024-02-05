import { extendTheme } from '@chakra-ui/react';
// Supports weights 300-800
import '@fontsource-variable/open-sans';
import '@fontsource-variable/montserrat';
// Supports weights 400-700
import '@fontsource-variable/caveat';

const theme = extendTheme({
  fonts: {
    body: `'Open Sans Variable', sans-serif`,
    heading: `'Caveat Variable', sans-serif`
  }
});

export default theme;
