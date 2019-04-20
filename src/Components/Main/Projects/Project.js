import React from "react";

const project = props => {
  return (
    <div className="project" key={props.id}>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} width="300" height="150" />
      <div>
        <h3>Technologies: {props.technologies}</h3>
        <a href={props.url}>Site link</a>
        <a href={props.sourceCode}>Source Code</a>
      </div>
    </div>
  );
};

export default project;
