const electron = require('electron')
const windowStateKeeper = require('electron-window-state');

const {BrowserWindow} = electron;

class MainWindow {
    constructor(url, options) {

        options = this.initOptions(options)

        this.winStats = windowStateKeeper({
            defaultWidth: options.width,
            defaultHeight: options.height,
        });

        this.win = null;
        this.url = url;
        this.options = this.initOptions(options, this.winStats)

        this.createWindow();
    }

    createWindow(options) {

        this.win = new BrowserWindow(this.initOptions(options || this.options, this.winStats));
        this.win.loadURL(this.url);
        if (process.env.NODE_ENV === 'development') {
            this.win.webContents.openDevTools()
        }

        this.winStats.manage(this.win);

        this.win.on('closed', this.onClosed.bind(this))
    }


    onClosed() {
        this.win = null;
    }

    initOptions(options, winStats) {
        options = options || {}
        options.width = options.width || 800;
        options.height = options.height || 600;
        options.minWidth = options.minWidth || 200;
        options.minHeight = options.minHeight || 200;

        if (winStats) {
            options.x = winStats.x;
            options.y = winStats.y;
            options.width = winStats.width;
            options.height = winStats.height;
        }

        return options;
    }
}

module.exports = MainWindow;
