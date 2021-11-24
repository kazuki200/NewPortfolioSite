import { memo, VFC } from "react";
import { Box } from "@chakra-ui/react";

import { Flex, HStack, Center } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faIdBadge,
  faToolbox,
  faPhone,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { PageRoute } from "../router/route";
import { css } from "@emotion/react";

export const Header: VFC = memo(() => {
  const header = css`
    &:hover {
      color: red;
      backgroundcolor: red;
    }
  `;

  return (
    <>
      <Flex justifyContent="space-around" mt="100px">
        <Box
          _hover={{ opacity: "0.4" }}
          fontSize={{ base: "10px", sm: "15px", md: "20" }}
        >
          <Link to="/">
            <FontAwesomeIcon color="black" icon={faHome} size="4x" />
          </Link>
        </Box>
        <Box
          _hover={{ opacity: "0.4" }}
          fontSize={{ base: "10px", sm: "15px", md: "20" }}
        >
          <Link to="/profile">
            <FontAwesomeIcon color="black" icon={faIdBadge} size="4x" />
          </Link>
        </Box>
        <Box
          _hover={{ opacity: "0.4" }}
          fontSize={{ base: "10px", sm: "15px", md: "20" }}
        >
          <Link to="/skills">
            <FontAwesomeIcon color="black" icon={faToolbox} size="4x" />
          </Link>
        </Box>
        <Box
          _hover={{ opacity: "0.4" }}
          fontSize={{ base: "10px", sm: "15px", md: "20" }}
        >
          <Link to="/portfolio">
            <FontAwesomeIcon color="black" icon={faBriefcase} size="4x" />
          </Link>
        </Box>
        <Box
          _hover={{ opacity: "0.4" }}
          fontSize={{ base: "10px", sm: "15px", md: "20" }}
        >
          <Link to="/form">
            <FontAwesomeIcon color="black" icon={faPhone} size="4x" />
          </Link>
        </Box>
      </Flex>
      <PageRoute />
    </>
  );
});
