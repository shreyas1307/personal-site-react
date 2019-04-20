import React from "react";
import Button from "./Buttons/Buttons";

import "./Aside.css";

const aside = props => {
  return (
    <div className="aside">
      <h3 className="name">Shreyas Balachandran</h3>
      <h3 className="proclaim">Developer | Problem Solver | Strategist</h3>
      <Button named={props.myName} onClick={props.clickedHandler} />
    </div>
  );
};

export default aside;
