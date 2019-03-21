import React, { Component } from "react";

import "./App.css";

import NavBar from "./NavBar";
import Logo from "./logo.svg";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Logo className="App-logo" />
        <p>Electron React Boilerplate</p>
      </div>
    );
  }
}
