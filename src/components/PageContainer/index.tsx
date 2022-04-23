import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({children}: PageContainerProps) {
  return(
    <Box
      height="100vh"
      w="100%"
      maxW='100vw'
      display='flex'
      flexDir='column'
      position='relative'
    >
      {children}
    </Box>
  )
}