import { Header } from "../../components/Header";
import { PageContainer } from "../../components/PageContainer";
import { Text } from "@chakra-ui/react";

export function Recompensas() {
  return(
    <PageContainer>
      <Header />
      <Text margin='10rem auto' fontSize='3rem'>
        Recompensas
      </Text>
    </PageContainer>
  );
}