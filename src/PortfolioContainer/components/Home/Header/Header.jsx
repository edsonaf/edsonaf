import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { PORTFOLIO_SCREENS } from "../../../PortfolioPages";
import { GET_SCREEN_INDEX } from "../../../utilities/CommonUtils";
import ScrollService from "../../../utilities/ScrollService";
import DarkModeToggle from "../../DarkModeToggle/DarkModeToggle";
import "./Header.scss";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);
  const title = "Saint Software";

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return PORTFOLIO_SCREENS.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className={getHeaderOptionsClasses(i)}
        onClick={() => switchScreen(i, Screen)}
      >
        <span>{Screen.screen_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClasses = (index) => {
    let classes = "header-option ";
    if (index < PORTFOLIO_SCREENS.length - 1)
      classes += "header-option-seperator ";

    if (selectedScreen === index) classes += "selected-header-option ";

    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);

  return (
    <div className="header-container">
      <div className="header-parent">
        <div className="header-logo">
          <DarkModeToggle />
          <h1>{title}</h1>
        </div>
        <div className={showHeaderOptions
          ? "header-options show-hamburger-options"
          : "header-options"}>{getHeaderOptions()}
        </div>
        <div className="header-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
          {!showHeaderOptions ? <MenuIcon /> : <CloseIcon />}
        </div>
      </div>
    </div>
  );
}
