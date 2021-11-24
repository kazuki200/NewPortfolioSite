import { Heading } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Box, Center, Text, Flex, Img, Button, Link } from "@chakra-ui/react";
import tableware from "./tableware.png";
import { Footer } from "../parts/footer";
import { MdFindInPage } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

export const Portfolio: VFC = memo(() => {
  return (
    <>
      <Center flexDirection="column">
        <Heading mb="60px" mt="50px" fontFamily="クレー" as="h2" size="lg">
          Profile
        </Heading>
        <Box
          w="70%"
          boxShadow="lg"
          borderRadius="lg"
          borderWidth="1px"
          bg="#ffffff"
        >
          <Text ml="70px" fontSize="40px" color="#707070">
            架空の食器サイト
          </Text>
          <Box color="white" fontSize="200px" p={10} pb="20px">
            <Center>
              <Img mt="-50px" src={tableware} p={9}></Img>
            </Center>
          </Box>
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
                fontSize="60px"
                color="#000000"
                href=""
              >
                <BsGithub />
              </Link>
              <Link _hover={{ opacity: "0.4" }} fontSize="65px" color="#000000">
                <MdFindInPage />
              </Link>
            </Flex>
            <Button
              _focus={{ boxShadow: "none" }}
              mt="10px"
              bg="#5D5F60"
              w="250px"
              fontSize="20px"
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
