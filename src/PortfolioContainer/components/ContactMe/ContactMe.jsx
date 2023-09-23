import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../Footer/Footer";
import SendIcon from "@mui/icons-material/Send";
import "./ContactMe.scss";

export default function ContactMe(props) {
  const fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("I am currently unavailable unless we are talking about a minimum of $10000.");
    console.log("Help me pay off some debts? paypal.me/jjjalexander");
    window.location = "mailto:edsaintsoftware@gmail.com";
  };

  useEffect(() => {

  }, [fadeInSubscription]);

  return (
    <div className="contact-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="back-form">
          <form onSubmit={submitForm}>
            <div className="send-btn-container">
              <button className="primary-btn" type="submit">
                <SendIcon className="sendIcon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
