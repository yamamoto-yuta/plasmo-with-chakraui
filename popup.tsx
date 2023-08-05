import { ChakraProvider } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

const IndexPopup = () => {
  return (
    <ChakraProvider>
      <Button colorScheme="teal">Button</Button>
    </ChakraProvider>
  )
};

export default IndexPopup;