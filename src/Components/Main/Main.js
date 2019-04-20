import React from "react";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";

const main = props => {
  if (props.renderingComponent === "About") {
    return <About />;
  }

  if (props.renderingComponent === "Projects") {
    return <Projects />;
  }

  if (props.renderingComponent === "Contact") {
    return <Contact />;
  }
  return <div />;
};

export default main;
