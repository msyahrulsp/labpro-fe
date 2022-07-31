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
  colors,
})

export default theme;