import React, { Component } from "react";
import Aside from "./Aside/Aside";
import Main from "./Main/Main";

import "./AppComponent.css";

class AppComponent extends Component {
  state = {
    hasClicked: "",
    myName: "About"
  };

  hasClicked = e => {
    console.log("Clicked");
    const { name } = e.target;

    this.setState({
      myName: name
    });
  };
  render() {
    return (
      <div className="AppComponent">
        <Aside myName={this.state.myName} clickedHandler={this.hasClicked} />
        <Main renderingComponent={this.state.myName} />
      </div>
    );
  }
}

export default AppComponent;
