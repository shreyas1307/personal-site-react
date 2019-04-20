import React from "react";

import "./About.css";

const about = () => {
  return (
    <div className="about">
      <div className="about-div">
        <h2>About Me</h2>
        {/* Must edit this About Section */}
        <p>
          I am Shreyas Balachandran, a self-taught developer specialising in web
          development. I have a great passion for programming and have decided
          to pursue this as a career. I possess a Bachelors degree in Business
          Marketing. I feel this allows me to bring in more perspectives during
          my daily thoughtflow.
        </p>
      </div>
      <div className="tech-use">
        <h2>Technologies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS | Flexbox | Grid | SASS</li>
          <li>JavaScript ES5 | ES6</li>
          <li>ReactJS</li>
        </ul>
      </div>
      <div className="tech-learn">
        <h2>Future Plans</h2>
        <ul>
          <li>Redux | Typescript</li>
          <li>NodeJS | Express JS</li>
          <li>Database - SQL | NoSQL</li>
          <li>Java</li>
          <li>PHP</li>
        </ul>
      </div>
    </div>
  );
};

export default about;
