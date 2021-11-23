import { memo, VFC } from "react";
import { Heading, Flex, Center, Box, Text, VStack } from "@chakra-ui/react";
import { Footer } from "../parts/footer";
export const Profile: VFC = memo(() => {
  return (
    <>
      <Flex flexDirection="column" w="100%">
        <Flex
          w="100%"
          flexDirection="column"
          textAlign="center"
        >
          <Heading mb="60px" mt="50px" fontFamily="クレー" as="h2" size="lg">
            Profile
          </Heading>
          <Box mt="0" mb="0" mr="auto" ml="auto">
            <Flex mb="50px">
              <Text
                mr={{ base: "100px", sm: "130px", md: "215px" }}
                fontSize={{ base: "15px", sm: "24px", md: "27px" }}
                whiteSpace="nowrap"
              >
                名前:
              </Text>
              <Text fontSize={{ base: "15px", sm: "24px", md: "27px" }}>
                戸嶋一貴（とじま　かずき）
              </Text>
            </Flex>
            <Flex mb="50px">
              <Text
                mr={{ base: "100px", sm: "130px", md: "215px" }}
                fontSize={{ base: "15px", sm: "24px", md: "27px" }}
              >
                大学:
              </Text>
              <Text fontSize={{ base: "15px", sm: "24px", md: "27px" }}>
                名古屋学院大学
              </Text>
            </Flex>
            <Flex mb="50px">
              <Text
                mr={{ base: "75px", sm: "85px", md: "165px" }}
                fontSize={{ base: "15px", sm: "24px", md: "27px" }}
              >
                生年月日:
              </Text>
              <Text fontSize={{ base: "15px", sm: "24px", md: "27px" }}>
                2000年6月17日
              </Text>
            </Flex>
            <Flex mb="80px">
              <Text
                mr={{ base: "40px", sm: "38px", md: "100px" }}
                fontSize={{ base: "15px", sm: "24px", md: "27px" }}
                whiteSpace="nowrap"
              >
                やりたいこと :
              </Text>
              <Text fontSize={{ base: "15px", sm: "24px", md: "27px" }} mb="40px">
                webアプリケーションのフロントエンド開発
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
});