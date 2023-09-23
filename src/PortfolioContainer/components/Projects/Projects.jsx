import { useEffect, useState } from "react";
import { featuredProjects,  mobileProjects,  webProjects } from "./ProjectsData.js";
import CategoryList from "./Categories/CategoryList.jsx";
import ProjectTile from "./ProjectTile/ProjectTile.jsx";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.scss";

const Projects = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props?.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [selectedCategory, setselectedCategory] = useState(1);
  const [data, setData] = useState([]);

  const projectTypes = [
    {
      id: 1,
      title: "Featured",
    },
    {
      id: 2,
      title: "Web App",
    },
    {
      id: 3,
      title: "Mobile App",
    },
  ];

  const projectsCategories = projectTypes.map((item) => (
    <CategoryList
      key={item.id}
      title={item.title}
      active={selectedCategory === item.id}
      setSelected={setselectedCategory}
      id={item.id}
    />
  ));

  useEffect(() => {
    switch (selectedCategory) {
      case 1:
        setData(featuredProjects);
        break;

      case 2:
        setData(webProjects);
        break;

      case 3:
        setData(mobileProjects);
        break;

      default:
        break;
    }

    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription, selectedCategory]);

  return (
    <div
      className="projects-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="projects-content">
        <ScreenHeading title={"Projects"} subHeading={""} />
        <ul>{projectsCategories}</ul>
        <div className="container">
          {data.map((d) => (
            <ProjectTile
              key={d.title}
              title={d.title}
              img={d.img}
              description={d.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
