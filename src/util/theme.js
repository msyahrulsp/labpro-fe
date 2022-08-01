import { extendTheme } from "@chakra-ui/react";

const redLight = "#D72631";
const cyan = "#D4F5E9";
const darkCyan = "#077B8A";
const purple = "#5C3C92";
const blue = "#3366BB";

const colors = {
  redLight,
  cyan,
  darkCyan,
  purple,
  blue,
}

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      '*': {
        '&::-webkit-scrollbar': {
          w: '2'
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'cyan'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'blue'
        }
      }
    }
  },
  colors
})

export default theme;