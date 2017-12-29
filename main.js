const electron = require('electron');

const mainWindow = require('./app/mainWindow.js');
const menu = require('./app/menu.js')
const notification = require('./app/notification.js')

const {app, Menu} = electron;

if (process.env.NODE_ENV === 'development') {
    require('electron-reload')(`${__dirname}/renderer`);
}

let _mainWindow;
app.on('ready', function () {
    _mainWindow = new mainWindow(`file://${__dirname}/renderer/index.html`)

    Menu.setApplicationMenu(menu)

    notification({title: 'App', body: 'Ready'})
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (_mainWindow.win === null) {
        _mainWindow.createWindow();
    }
})
