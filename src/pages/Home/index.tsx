import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import { Button } from '../../Button';
import { Header } from '../../components/Header';
import { PageContainer } from '../../components/PageContainer';

export function Home() {
  const phraseMobile = useBreakpointValue({
    sm: true,
    md: true,
    lg: true,
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <PageContainer>
      <Header />
      {isWideVersion && 
        <>
          <Image 
            src='/assets/blur-1.png' 
            alt='blur' 
            position='absolute'
            bottom='0px'
          />

          <Image 
            src='/assets/blur-2.png' 
            alt='blur' 
            position='absolute'
            right='0px'
            top='0px'
          />
        </>
      }
      <Flex
        margin='2.5rem 0'
        align='center'
        justify='center'
        flexDir='column'
      >
        {!phraseMobile && (
          <>
            <Text
              fontWeight={600}
              fontSize={['1.2rem','1.5rem','1.8rem']}
              textAlign='center'
              margin={['2rem 0','4rem 0', '5rem 0']}
            >
              O café que fará seu <br />
              código decolar para <br /> 
              o próximo nível.
            </Text>

            <Button />
          </>
        )}
        <Text
          fontWeight={700}
          fontSize={['2.4rem','2.8rem','3rem','5rem']}
          marginTop={['2rem','4rem', '0']}
        >
          Great Coffee
        </Text>

        <Text
          fontWeight={700}
          fontSize={['2.1rem','2.5rem','3rem','5rem']}
          textShadow='1px 1px 1px #8257E5, -1px 1px 1px #8257E5, 1px -1px 1px #8257E5, -1px -1px 1px #8257E5'
          color='#000'
        >
          &#60;Greate Code /&#62;
        </Text>
      </Flex>
      <Flex
        flex='1'
        justifyContent='center'
      >
        <Image
          src='/assets/rocket-coffee.png'
          alt='coffee'
        />
      </Flex>

      {!isWideVersion && 
      <Image 
        src='/assets/blur-mobile.png' 
        alt='blur'
        w='100%'
        h='90%'
        position='absolute'
        bottom='0px'
      />
      }
    </PageContainer>
  );
}
