import { memo, VFC } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { Flex, HStack, Center } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faIdBadge,
  faToolbox,
  faPhone,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Switch, Route } from "react-router-dom";
import theme from "../theme/theme";
import { Home } from "../pages/home";
import { Profile } from "../pages/profile";
import { Skills } from "../pages/skills";
import { Portfolio } from "../pages/portfolio";
import { Form } from "../pages/form";
import { Page404 } from "../pages/page404";

export const Header: VFC = memo(() => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Center>
          <Flex flexDirection="column">
            <HStack spacing="170px" mt="100px">
              <Link to="/">
                <FontAwesomeIcon color="black" icon={faHome} size="4x" />
              </Link>
              <Link to="/profile">
                <FontAwesomeIcon color="black" icon={faIdBadge} size="4x" />
              </Link>
              <Link to="/skills">
                <FontAwesomeIcon color="black" icon={faToolbox} size="4x" />
              </Link>
              <Link to="/portfolio">
                <FontAwesomeIcon color="black" icon={faBriefcase} size="4x" />
              </Link>
              <Link to="/form">
                <FontAwesomeIcon color="black" icon={faPhone} size="4x" />
              </Link>
            </HStack>
            <Center>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/skills">
                  <Skills />
                </Route>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/form">
                  <Form />
                </Route>
                <Route path="*">
                  <Page404 />
                </Route>
              </Switch>
            </Center>
          </Flex>
        </Center>
      </ChakraProvider>
    </>
  );
});
