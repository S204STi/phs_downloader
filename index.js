'use strict';

const {
    app,
    BrowserWindow
} = require('electron');

//global reference of the window object to prevent window close on garbage collection
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });

    //html file to be opened
    win.loadURL('file://${__dirname}/index.html');

    //cleanup on window close
    win.on('closed', () => {
        win = null;
    });
}

//create window at startup
app.on('ready', createWindow);

//quit on windows close
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});