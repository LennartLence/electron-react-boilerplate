import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./components/App";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    // eslint-disable-next-line global-require
    render(require("./components/App").default);
  });
}
