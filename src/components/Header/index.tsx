import { Box, Image, useBreakpointValue } from '@chakra-ui/react';

import { Button } from '../../Button';
import { Sidebar } from './Sidebar';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  })


  return(
    <>
      <Box
        as='header'
        h={['5.25rem','6.25rem']}
        w='100%'
        display='flex'
        alignItems='flex-end'
        justifyContent='center'
        padding={['0 1rem','0 2rem']}
      >
        <Box
          w='57.375rem'
          h={['2rem','3.125rem']}
          display='flex'
          alignItems={['center', 'flex-start']}
          justifyContent='space-between'
        >
          { isWideVersion ? 
            <Image
              h='100%'
              w='2.6rem'
              src='/assets/logo-desktop.svg'
              alt='logo'
            />
            :
            <Image
              h={['1.5rem','2rem']}
              w='10rem'
              ml={['1.6rems','2.6rem']}
              src='/assets/logo-mobile.svg'
              alt='logo'
            />
          }

          <Sidebar />

          {isWideVersion && (<Button />)}
        </Box>
      </Box>
      {!isWideVersion && (<Box h='1px' w='100%' bg='#29292E' />)}
    </>
  );
}