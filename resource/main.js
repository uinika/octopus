const { app, BrowserWindow } = require("electron");
const express = require("express");

let mainWindow;

app.on("ready", () => {

  /** 启动Express服务 */
  const webServer = express();
  webServer.use(express.static("./resources/app/resource/web-app"));
  webServer.listen(5200);

  /** 启动Electron主进程 */
  mainWindow = new BrowserWindow({ width: 1200, height: 800, frame: true, autoHideMenuBar: true });
  mainWindow.setMenu(null);
  // mainWindow.loadFile("resource/index.html"); // 从本地文件路径加载
  mainWindow.loadURL("http://localhost:5200/index.html"); // 从Web服务的URL加载
  // mainWindow.webContents.openDevTools(); // 开启调试模式

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  /* 在Mac系统用户通过Cmd+Q显式退出之前，保持应用程序和菜单栏处于激活状态。*/
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  /* 当dock图标被点击并且不会有其它窗口被打开的时候，在Mac系统上重新建立一个应用内的window。*/
  if (mainWindow === null) {
    createWindow();
  }
});
