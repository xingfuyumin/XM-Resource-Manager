const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadURL('https://mobile.ant.design/zh/guide/quick-start');
};

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
});