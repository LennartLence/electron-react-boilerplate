import React, { Component } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";

import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Logo className="App-logo" />
          <p>Electron React Boiledplate.</p>
        </header>
      </div>
    );
  }
}

export default App;
