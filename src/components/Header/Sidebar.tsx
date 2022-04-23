import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { NavLink } from "./NavLink";
import { SidebarLinksBox } from "./SidebarLinksBox";

export function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  
  if (isDrawerSidebar) {
    return (
      <>
        <Button 
          variant='unstyled' 
          onClick={onOpen}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .0), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
        >
          <Image src='/assets/menu-buguer-open.svg' alt='openMenu' />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          size='full'
        >
          <DrawerOverlay />
          <DrawerContent
            bg='background'
          >
            <DrawerCloseButton 
              color='button'
              mt='3rem'
              mr='1rem'
              size='3rem'
              _focus={{
                boxShadow:
                  '0 0 1px 2px rgba(88, 144, 255, .0), 0 1px 1px rgba(0, 0, 0, .15)',
              }}
            />
            <DrawerHeader
              mt='2.6rem'
            >            
              <Image
                h={['1.5rem','2rem']}
                w='10rem'
                ml={['1.6rems','2.6rem']}
                src='/assets/logo-mobile.svg'
                alt='logo'
              />
            </DrawerHeader>

            <DrawerBody>
            <VStack spacing='0rem'>
              <Box h='1px' w='100vw' bg='#29292E' />
              
              <SidebarLinksBox>
                <NavLink title="Home" href="/" fontSize='1.2rem' />
              </SidebarLinksBox>

              <SidebarLinksBox>
                <NavLink title="Menu" href="/menu" fontSize='1.2rem' />
              </SidebarLinksBox>

              <SidebarLinksBox>
                <NavLink title="Recompensas" href="/recompensas" fontSize='1.2rem' />
              </SidebarLinksBox>

              <SidebarLinksBox>
                <NavLink title="Gift Cards" href="/gifts" fontSize='1.2rem' />
              </SidebarLinksBox>

              <SidebarLinksBox>
                <NavLink title="Lojas" href="/lojas" fontSize='1.2rem' />
              </SidebarLinksBox>
            </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <HStack spacing="2rem" h='100%'>
      <NavLink title="Home" href="/" />
      <NavLink title="Menu" href="/menu" />
      <NavLink title="Recompensas" href="/recompensas" />
      <NavLink title="Gift Cards" href="/gifts" />
      <NavLink title="Lojas" href="/lojas" />
    </HStack>
  );
}
