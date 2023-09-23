import React from "react";
import "./Footer.scss";
import footerShape from "../assets/shape-bg.png";
import footerShapeDark from "../assets/shape-bg2.png";
import { useState } from "react";

export default function Footer() {
  const [isDarkTheme, setIsDark] = useState(
    document.body.classList.contains("dark")
  );

  function callback() {
    if (document.body.classList.contains("dark")) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }

  const mutationObserver = new MutationObserver(callback);
  mutationObserver.observe(document.body, { attributes: true });

  return (
    <div className="footer-container">
      <div className="footer-parent">
        {/* TODO REMOVE IMAGE, PLACE SVG? */}
        <img src={isDarkTheme ? footerShapeDark : footerShape} alt="no" />
      </div>
    </div>
  );
}
