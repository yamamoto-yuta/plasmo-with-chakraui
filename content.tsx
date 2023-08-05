import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { ChakraProvider } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

const styleElement = document.createElement("style")

const styleCache = createCache({
  key: "plasmo-mui-cache",
  prepend: true,
  container: styleElement
})

export const getStyle = () => styleElement;

const CustomButton = () => {
  return (
    <CacheProvider value={styleCache}>
      <ChakraProvider>
        <Button colorScheme="teal">Button</Button>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default CustomButton