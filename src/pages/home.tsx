import { Center, Text, Flex, Box } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Footer } from "../parts/footer";

export const Home: VFC = memo(() => {
  return (
    <>
      <Center w="100%">
        <Flex
          mt={{ base: "50px", sm: "80px", md: "100px" }}
          flexDirection="column"
          justifyContent="space-between"
          // height="68vh"
          w="100%"
        >
          <Center w="100%">
            <Box w="100%">
              <Text
                fontWeight="bolder"
                fontSize={{ base: "30px", sm: "40px", md: "80px" }}
                mb="50px"
                whiteSpace="nowrap"
                textAlign="center"
                pr={{ base: "200px", sm: "300px", md: "500px" }}
                w="100%"
                pt={{ base: "100px", sm: "50px", md: "20px" }}
              >
                Welcome To
              </Text>
              <Text
                fontWeight="bolder"
                fontSize={{ base: "30px", sm: "40px", md: "80px" }}
                whiteSpace="nowrap"
                pl={{ base: "100px", sm: "200px", md: "300px" }}
                textAlign="center"
                w="100%"
                mb={{ base: "250px", sm: "230px", md: "130px" }}
              >
                My Portfolio
              </Text>
            </Box>
          </Center>
          <Footer />
        </Flex>
      </Center>
    </>
  );
});
