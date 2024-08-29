const { app, BrowserWindow } = require("electron");

const path = require("path");
const url = require("url");

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.webContents.openDevTools();

  const startUrl = url.format({
    // pathname: path.join(__dirname, "./app/build/index.html"),
    protocol: "file",
  });

  mainWindow.loadURL("http://localhost:3000/");
};

app.whenReady().then(createMainWindow);
