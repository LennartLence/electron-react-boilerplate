import React, { Component } from "react";

import "./AppContainer.css";

import Logo from "./logo.svg";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="AppContainer">
        <Logo className="App-logo" />
        <h1>Electron React Boilerplate</h1>
      </div>
    );
  }
}
