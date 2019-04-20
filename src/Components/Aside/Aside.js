import React from "react";
import Button from "./Buttons/Buttons";

import "./Aside.css";

const aside = props => {
  return (
    <div class="aside">
      <h3 class="name">Shreyas Balachandran</h3>
      <h3 class="proclaim">Developer | Problem Solver | Strategist</h3>
      <Button named={props.myName} onClick={props.clickedHandler} />
    </div>
  );
};

export default aside;
