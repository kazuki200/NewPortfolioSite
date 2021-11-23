import { memo, VFC } from "react";
import { Heading, Flex, Box, Text, Center, Grid } from "@chakra-ui/react";
import { Footer } from "../parts/footer";
import { Card } from "../parts/card";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { CardItem } from "../cardItem";

export const CardType: Array<CardItem> = [
  {
    id: 1,
    title: "Javascript",
    icon: <DiJavascript />,
    bgColor: "yellow",
  },
  {
    id: 2,
    title: "Typescript",
    icon: <SiTypescript />,
    bgColor: "blue",
  },
  {
    id: 2,
    title: "Typescript",
    icon: <SiTypescript />,
    bgColor: "blue",
  },
  {
    id: 2,
    title: "Typescript",
    icon: <SiTypescript />,
    bgColor: "blue",
  },
  {
    id: 2,
    title: "Typescript",
    icon: <SiTypescript />,
    bgColor: "blue",
  },
];

export const Skills: VFC = memo(() => {
  return (
    <>
      <Flex flexDirection="column" w="100%">
        <Center flexDirection="column">
          <Heading mb="60px" mt="50px" fontFamily="クレー" as="h2" size="lg">
            Skills
          </Heading>
          <Center>
          <Grid w="100%" templateColumns="repeat(3, 1fr)" gap={20}>
            {CardType.map((value) => {
              return (
                <Box
                  boxShadow="lg"
                  borderRadius="lg"
                  borderWidth="1px"
                  maxW="sm"
                  bg="#ffffff"
                  key={value.id}
                >
                  <Box color={value.bgColor} fontSize="200px" p={10} pb="20px">
                    <Center>{value.icon}</Center>
                  </Box>
                  <Text fontSize="30px" color="#707070">
                    {value.title}
                  </Text>
                  <Box bg="#707070" height="2px" mb="40px"></Box>
                </Box>
              );
            })}
          </Grid>
          </Center>
        </Center>
        <Footer />
      </Flex>
    </>
  );
});
