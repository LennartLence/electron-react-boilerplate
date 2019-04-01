/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { remote } from "electron";

import Person from "@material-ui/icons/Person";
import Close from "@material-ui/icons/Close";
import Minimize from "@material-ui/icons/Minimize";
import Fullscreen from "@material-ui/icons/Fullscreen";

import Button from "./NavbarButton";

import "./AppNavbar.css";

const AppNavbar = () => {
  return (
    <div className="AppNavbar">
      <Button background="linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)">
        <Person style={{ marginRight: "5px" }} />
        Lennart
      </Button>
      <Button animation="Blink infinite 1s linear">
        <Person style={{ marginRight: "5px" }} />
        Lennart
      </Button>
      <Button disabled>
        <Person style={{ marginRight: "5px" }} />
        Lennart
      </Button>

      <div className="DragRegion" />

      <Button
        onClick={() => {
          remote.getCurrentWindow().minimize();
        }}
      >
        <Minimize />
      </Button>
      <Button
        onClick={() => {
          remote.getCurrentWindow().maximize();
        }}
      >
        <Fullscreen />
      </Button>
      <Button
        backgroundHover="#ef5350"
        onClick={() => {
          remote.getCurrentWindow().close();
        }}
      >
        <Close />
      </Button>
    </div>
  );
};

export default AppNavbar;
