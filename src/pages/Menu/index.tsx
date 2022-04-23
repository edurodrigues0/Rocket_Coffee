import { Header } from "../../components/Header";
import { PageContainer } from "../../components/PageContainer";
import { Text } from "@chakra-ui/react";

export function Menu() {
  return(
    <PageContainer>
      <Header />
      <Text margin='10rem auto' fontSize='3rem'>
        Menu
      </Text>
    </PageContainer>
  );
}