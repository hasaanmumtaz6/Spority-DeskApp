// const { app, BrowserWindow, Menu } = require("electron");

// let mainWindow;

// app.whenReady().then(() => {
//   mainWindow = new BrowserWindow({
//     width: 1200,
//     height: 800,
//     icon: "public/assets/icons/icon.ico",
//     webPreferences: {
//       nodeIntegration: true,
//     },
//   });

//   Menu.setApplicationMenu(null);

//   mainWindow.loadURL("https://spority.vercel.app");
// });
const { app, BrowserWindow, Menu, globalShortcut } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: "public/assets/icons/icon.ico", // Set favicon
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Remove Menu
  Menu.setApplicationMenu(null);

  mainWindow.loadURL("https://spority.vercel.app"); // Load your Next.js app

  // Toggle Fullscreen on F, f, F11, or F12 press
  mainWindow.webContents.on("before-input-event", (event, input) => {
    if (["F", "f", "F11", "F12"].includes(input.key)) {
      const isFullScreen = mainWindow.isFullScreen();
      mainWindow.setFullScreen(!isFullScreen);
      event.preventDefault(); // Prevent default browser behavior
    }
  });

  // Global Shortcut (Optional: Works even if the app is not focused)
  globalShortcut.register("F11", () => {
    const isFullScreen = mainWindow.isFullScreen();
    mainWindow.setFullScreen(!isFullScreen);
  });

  globalShortcut.register("F12", () => {
    const isFullScreen = mainWindow.isFullScreen();
    mainWindow.setFullScreen(!isFullScreen);
  });

  globalShortcut.register("f", () => {
    const isFullScreen = mainWindow.isFullScreen();
    mainWindow.setFullScreen(!isFullScreen);
  });
});

// Unregister shortcuts on quit
app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});
