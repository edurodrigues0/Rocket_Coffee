import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    background: "#000000",
    textColor: "#FFFFFF",
    button: "#8257E5",
    border: "#29292E",
    borderMenuMobile: "#A8A8B3",
    textColorMenuMobile: "#E1E1E6",
  },
  fonts: {
    heading: 'Manrope',
    body: 'Manrope',
  },
  styles: {
    global: {
      body: {
        bg: 'background',
        color: 'textColor',
      }
    }
  }
})