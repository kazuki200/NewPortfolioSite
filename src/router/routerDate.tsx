import { Form } from "../pages/form";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { Profile } from "../pages/profile";
import { Skills } from "../pages/skills";

export const RouterDate = [
  {
    path: "/",
    exact: true,
    children: <Home/>
  },
  {
    path: "/profile",
    exact: false,
    children: <Profile/>
  },
  {
    path: "/skills",
    exact: false,
    children: <Skills/>
  },
  {
    path: "/portfolio",
    exact: false,
    children: <Portfolio/>
  },
  {
    path: "/form",
    exact: false,
    children: <Form/>
  }
]