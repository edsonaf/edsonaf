import React, { useEffect, useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { init } from "ityped";
import * as Constants from "../../../Links";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.scss";
import { Link } from "react-router-dom";

export default function Profile() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Copy-paste expert",
        "Enthusiastic Dev",
        "Full Stack .NET Developer",
      ],
    });
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href={Constants.GithubLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GitHubIcon className="icon" />
              </a>
              <a
                href={Constants.LinkedInLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkedInIcon className="icon" />
              </a>
              <a
                href={Constants.InstagramLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                <InstagramIcon className="icon" />
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Edson</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {" "}
                <span ref={textRef}></span>
              </h1>
              <span className="profile-role-tagline">
                Knack for building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToNext("AboutMe")}>Learn more</button>
            <Link to="/main"><button className="btn highlighted-btn">Enter</button></Link>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
