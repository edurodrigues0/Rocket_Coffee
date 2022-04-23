import { Box, BoxProps } from "@chakra-ui/react";

import { ReactNode } from "react";

interface SidebarLinksBoxProps extends BoxProps {
  children: ReactNode;
}

export function SidebarLinksBox({children, ...rest}: SidebarLinksBoxProps) {
  return (
    <Box
      borderBottom="1px solid #29292E"
      w="100vw"
      {...rest}
    >
      {children}
    </Box>
  );
}
