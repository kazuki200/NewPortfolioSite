import { memo, VFC } from "react";
import { Heading, Flex, Center, Grid,SimpleGrid } from "@chakra-ui/react";
import { Footer } from "../parts/footer";
import { Card } from "../parts/card";

export const Skills: VFC = memo(() => {
  return (
    <>
      <Flex flexDirection="column" w="100%">
        <Center flexDirection="column">
          <Heading mb="60px" mt="50px" fontFamily="クレー" as="h2" size="lg">
            Skills
          </Heading>
          <Center w="80%">
            <SimpleGrid w="100%" minChildWidth="230px" spacing="100px">
              <Card />
            </SimpleGrid>
          </Center>
        </Center>
        <Footer />
      </Flex>
    </>
  );
});
