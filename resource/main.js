const { app, BrowserWindow } = require("electron");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({ width: 800, height: 500, frame: false });

  mainWindow.setMenu(null);
  mainWindow.loadFile("resource/index.html");
  // mainWindow.loadURL("http://localhost:4200/login");

  mainWindow.webContents.openDevTools(); // 开启调试模式

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
