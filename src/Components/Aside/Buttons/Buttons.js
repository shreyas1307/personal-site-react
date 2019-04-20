import React from "react";

import "./Button.css";
const button = props => {
  return (
    <div className="button">
      <button name="About" onClick={props.onClick}>
        About
      </button>
      <button name="Projects" onClick={props.onClick}>
        Projects
      </button>
      <button name="Contact" onClick={props.onClick}>
        Contact
      </button>
    </div>
  );
};

export default button;
