import { Button as ChakraButton } from '@chakra-ui/react'

export function Button() {
  return (
    <ChakraButton
      h={["1.8rem","2.25rem"]}
      w="10.75rem"
      fontSize={["0.6rem","0.68rem"]}
      variant="outline"
      borderColor="button"
      transition="all 0.3s"
      _hover={{
        bg: "button",
        borderColor: "#bec3c9",
      }}
    >
      PEGAR MEU CAFÉ
    </ChakraButton>
  );
}
