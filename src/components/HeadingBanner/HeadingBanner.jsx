import React from "react";
import "./HeadingBanner.scss";

export const HeadingBanner = () => {
  return (
    <div>
      <h1 className="heading">
        <div className="text-container">
          <span className="spiral-text">UI</span>
          <div className="bubble"></div>
        </div>
      </h1>
      <h2 className="headTxt">Hello there</h2>
    </div>
  );
};
