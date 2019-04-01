import React, { Component } from "react";

import "./App.css";

import AppContainer from "./AppContainer/AppContainer";
import AppNavbar from "./AppNavbar/AppNavbar";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <AppNavbar />
        <AppContainer />
      </div>
    );
  }
}
