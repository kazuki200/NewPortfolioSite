import { Collapse, Heading } from "@chakra-ui/react";
import { memo, VFC } from "react";
import {
  Box,
  Center,
  Text,
  Flex,
  Img,
  Button,
  Link,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import tableware from "./tableware.png";
import { Footer } from "../parts/footer";
import { MdFindInPage } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/hooks";
import { DiJavascript, DiSass } from "react-icons/di";

export const Portfolio: VFC = memo(() => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Center flexDirection="column">
        <Heading mb="60px" mt="50px" fontFamily="クレー" as="h2" size="lg">
          Profile
        </Heading>
        <Box
          w={{ base: "100%", sm: "70%" }}
          boxShadow="lg"
          borderRadius="lg"
          borderWidth="1px"
          bg="#ffffff"
          mb="50px"
        >
          <Text
            ml="70px"
            fontSize={{ base: "20px", md: "40px" }}
            color="#000000"
          >
            架空の食器サイト
          </Text>
          <Box color="white" fontSize="200px" p={10} pb="20px">
            <Center>
              <Img mt="-50px" src={tableware} p={9}></Img>
            </Center>
          </Box>
          <Collapse in={isOpen}>
            <Flex w="85%" flexDirection="column" m="0 auto">
              <Heading
                color="#000000"
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontFamily="クレー"
                mb="30px"
              >
                使用技術
              </Heading>
              <Flex>
                <HStack spacing={2} flexWrap="wrap">
                  <Box
                    color="yellow"
                    fontSize={{ base: "60px", sm: "80px", md: "120px" }}
                  >
                    <DiJavascript />
                  </Box>
                  <Box
                    color="#cd6699"
                    fontSize={{ base: "60px", sm: "80px", md: "120px" }}
                  >
                    <DiSass />
                  </Box>
                  <Box
                    color="#cd6699"
                    fontSize={{ base: "60px", sm: "80px", md: "120px" }}
                  >
                    <DiSass />
                  </Box>
                  <Box
                    color="#cd6699"
                    fontSize={{ base: "60px", sm: "80px", md: "120px" }}
                  >
                    <DiSass />
                  </Box>
                </HStack>
              </Flex>
            </Flex>
            <Flex w="85%" flexDirection="column" m="0 auto" mt="40px">
              <Heading
                color="#000000"
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontFamily="クレー"
                mb="30px"
              >
                工夫した点
              </Heading>
              <Text
                mb="40px"
                color="#000000"
                fontFamily="クレー"
                fontSize={{ base: "15px", sm: "20px", md: "25px" }}
              >
                このサイトは、高級感のある食器サイトであるため、色味を統一し、スライドアニメーションとハンバーガーメニューのスライドをゆったり感じるようにする事で、イメージに合わせました。
              </Text>
            </Flex>
          </Collapse>
          <Flex
            mt="0"
            mb="0"
            mr="auto"
            ml="auto"
            justifyContent="space-between"
            w="85%"
          >
            <Flex>
              <Link
                _hover={{ opacity: "0.4" }}
                mr="40px"
                fontSize={{ base: "30px", sm: "45px", md: "60px" }}
                color="#000000"
                href="https://github.com/kazuki200/portfolio_1"
              >
                <BsGithub />
              </Link>
              <Link
                _hover={{ opacity: "0.4" }}
                fontSize={{ base: "35px", sm: "50px", md: "65px" }}
                color="#000000"
                href="https://kazuki200.github.io/portfolio_1/"
              >
                <MdFindInPage />
              </Link>
            </Flex>

            <Button
              _focus={{ boxShadow: "none" }}
              mt={{ base: "0px", md: "10px" }}
              bg="#5D5F60"
              w={{ base: "60px", sm: "120px", md: "250px" }}
              fontSize={{ base: "10px", sm: "15px", md: "20px" }}
              onClick={onToggle}
            >
              More
            </Button>
          </Flex>
        </Box>
        <Footer />
      </Center>
    </>
  );
});
