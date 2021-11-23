import '../styles/carousel.min.css'
import { ChakraProvider, CSSReset, theme, extendTheme } from '@chakra-ui/react'

const mytheme = extendTheme({
  styles: {
    global: {
      fontSize: '12px',
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={mytheme}>
      <CSSReset></CSSReset>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
