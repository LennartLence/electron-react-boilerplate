const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 300,
    show: false,
    frame: false,
    transparent: true
    // resizable: false
    // backgroundColor: "#191919",
  });

  mainWindow.loadURL(
    isDev ? "http://localhost:3000" : `file://${__dirname}/index.html`
  );

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();

    if (isDev) {
      mainWindow.openDevTools();

      const {
        default: installExtension,
        REACT_DEVELOPER_TOOLS
      } = require("electron-devtools-installer");

      installExtension(REACT_DEVELOPER_TOOLS)
        .then(name => console.log(`Added Extension:  ${name}`))
        .catch(err => console.log("An error occurred: ", err));
    }
  });
});

app.on("window-all-closed", () => {
  app.quit();
});
