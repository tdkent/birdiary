import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import '@fontsource-variable/caveat'; // Supports weights 400-700

const splash = defineStyle({
  fontFamily: 'Caveat Variable',
  fontWeight: 'normal',
  color: 'gray.400'
});

export const headingTheme = defineStyleConfig({
  variants: {
    splash: splash
  }
});
