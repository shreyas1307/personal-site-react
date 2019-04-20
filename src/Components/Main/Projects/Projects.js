import React, { Component } from "react";

//This will display all projects I have by connecting to my github account
// and displaying a small preview + source code details

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
      <div>
        <h1> Projects</h1>
      </div>
    );
  }
}

export default Projects;
