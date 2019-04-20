import React, { Component } from "react";
import Project from "./Project";

import "./Project.css";

class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/shreyas1307/projects-api/db")
      .then(res => res.json())
      .then(project => {
        console.log(project.project);
        this.setState({
          projects: project.project
        });
      });
  }
  render() {
    return (
      <div className="project-div">
        {this.state.projects.map(proj => {
          return (
            <div>
              <Project
                id={proj.id}
                name={proj.name}
                img={proj.img}
                technologies={proj.technologies}
                url={proj.url}
                sourceCode={proj.sourceCode}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projects;
