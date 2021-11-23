import { Center } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom";
import { Form } from "../pages/form";
import { Home } from "../pages/home";
import { Page404 } from "../pages/page404";
import { Portfolio } from "../pages/portfolio";
import { Profile } from "../pages/profile";
import { Skills } from "../pages/skills";

export const PageRoute: VFC = memo(() => {
  return (
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
  );
});
