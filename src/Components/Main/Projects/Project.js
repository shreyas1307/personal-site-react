import React from "react";

const project = props => {
  return (
    <div className="project">
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} width="300" height="150" />
      <div>
        <h3>Technologies: {props.technologies}</h3>
        <p>
          <a
            className="a-link"
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Site link
          </a>
        </p>
        <p>
          <a
            className="a-link"
            href={props.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </p>
      </div>
    </div>
  );
};

export default project;
