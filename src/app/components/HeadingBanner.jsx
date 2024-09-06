import React from "react";
import "./HeadingBanner.scss";

function HeadingBanner() {
  return (
    <div>
      <h1 className="heading">
        <div className="text-container">
          <span className="spiral-text">UI</span>
          <div className="bubble"></div>
        </div>
      </h1>
      <h2 className="headTxt">
        Hello there, I’m a designer who cares about making beautiful things that
        help people.
      </h2>
    </div>
  );
}

export default HeadingBanner;
