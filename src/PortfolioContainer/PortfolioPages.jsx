import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

export const PORTFOLIO_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About me",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "Projects",
    component: Projects,
  }
];
