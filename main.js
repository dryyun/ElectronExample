const electron = require('electron');
const windowStateKeeper = require('electron-window-state');

const mainWindow = require('./app/mainWindow.js');
const menu = require('./app/menu.js')
const notification = require('./app/notification.js')

const {app, Menu} = electron;

if (process.env.NODE_ENV === 'development') {
    require('electron-reload')(`${__dirname}/renderer`);
}

let _mainWindow;
let _mainWindowState;
app.on('ready', function () {
    _mainWindowState = windowStateKeeper({
        defaultWidth: 800,
        defaultHeight: 600
    });

    _mainWindow = new mainWindow(`file://${__dirname}/renderer/index.html`, {
        'x': _mainWindowState.x,
        'y': _mainWindowState.y,
        'width': _mainWindowState.width,
        'height': _mainWindowState.height
    })

    _mainWindowState.manage(_mainWindow.win);
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
        _mainWindow.createWindow({
            'x': _mainWindowState.x,
            'y': _mainWindowState.y,
            'width': _mainWindowState.width,
            'height': _mainWindowState.height
        });
        _mainWindowState.manage(_mainWindow.win);
        notification({title: 'App', body: 'Activate'})
    }
})
