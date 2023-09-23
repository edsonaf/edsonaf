import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.scss";

import educationIcon from "./assets/education.svg";
import workHistoryIcon from "./assets/work-history.svg";
import programmingSkillsIcon from "./assets/programming-skills.svg";
import interestsIcon from "./assets/interests.svg";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: educationIcon },
    { label: "Work History", logoSrc: workHistoryIcon },
    { label: "Programming Skills", logoSrc: programmingSkillsIcon },
    { label: "Interests", logoSrc: interestsIcon },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "C#", ratingPercentage: 85 },
    { skill: "ASP .NET", ratingPercentage: 85 },
    { skill: "Angular JS", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 55 },
    { skill: "React JS", ratingPercentage: 45 },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Fontys University of Applied Sciences, Eindhoven"}
        subHeading={"Bachelor of Science Information Technology"}
        fromDate={"2011"}
        toDate={"2015"}
      />

      <ResumeHeading
        heading={"Maria Immaculate Lyceum, Willemstad"}
        subHeading={"High School"}
        fromDate={"2004"}
        toDate={"2010"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Canon Production Printing, Venlo"}
          subHeading={"External Software Developer"}
          fromDate={"2019"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Keywords: C#; ASP.NET; Regex; Typescript; Angular; T4 scripts;
            Agile; Azure Devops; Git; TDD; BDD; Gherkin; Specflow; JSON; XML;
          </span>
          <br />
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Ellips, Eindhoven"}
          subHeading={"Full Stack .NET Developer"}
          fromDate={"2015"}
          toDate={"2019"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Keywords: C#; ASP.NET; T4 scripts; WPF; MVVM; Agile; Svn; Git; TDD;
            BDD; Gherkin; Specflow; JSON;
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Reading"
        description="Crime; Mystery; Philosophy; Science Fiction"
      />
      <ResumeHeading
        heading="Gaming"
        description="Action; Adventure; MOBA; RPG;"
      />
      <ResumeHeading heading="Music" description="" />
      <ResumeHeading heading="Programming" description="" />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img className="bullet-logo" src={bullet.logoSrc} alt="B" />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal bio details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
