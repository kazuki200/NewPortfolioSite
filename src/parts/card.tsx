import { memo, VFC } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { DiJavascript, DiReact, DiGit } from "react-icons/di";
import { SiTypescript, SiMysql, SiFirebase, SiPhp } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { FaWordpress } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

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
    bgColor: "#0099e5",
  },
  {
    id: 3,
    title: "React",
    icon: <DiReact />,
    bgColor: "#00bce4",
  },
  {
    id: 4,
    title: "Node.js",
    icon: <IoLogoNodejs />,
    bgColor: "#0abf53",
  },
  {
    id: 5,
    title: "PHP",
    icon: <SiPhp />,
    bgColor: "#797db4",
  },
  {
    id: 6,
    title: "MySql",
    icon: <SiMysql />,
    bgColor: "#03758f",
  },
  {
    id: 7,
    title: "Wordpress",
    icon: <FaWordpress />,
    bgColor: "#0099e5",
  },
  {
    id: 8,
    title: "Git",
    icon: <DiGit />,
    bgColor: "#f85a40",
  },
  {
    id: 9,
    title: "GitHub",
    icon: <BsGithub />,
    bgColor: "#000000",
  },
  {
    id: 10,
    title: "Firebase",
    icon: <SiFirebase />,
    bgColor: "#ff9933",
  },
];

export const Card: VFC = memo(() => {
  return (
    <>
      {CardType.map((value) => {
        return (
          <Box
            boxShadow="lg"
            borderRadius="lg"
            borderWidth="1px"
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
    </>
  );
});
