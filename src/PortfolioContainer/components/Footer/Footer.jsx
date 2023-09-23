import React from "react";
import ScrollService from "../../utilities/ScrollService";
import "./Footer.scss";

export default function Footer(props) {
  return (
    <div className="footer-container">
      <div className="copyright">
        © {props.startYear}-{props.currentYear} {props.name}. All rights
        reserved.
      </div>
      <div className="scroll-container">
        <button
          className="btn-scroll"
          onClick={() => ScrollService.scrollHandler.scrollToHome()}
        >
          {" "}
          <i className="fa fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
}
