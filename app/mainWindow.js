const electron = require('electron')
const {BrowserWindow} = electron;

class MainWindow {
    constructor(url, options) {

        options = this.initOptions(options)

        this.win = null;
        this.url = url;
        this.options = options;

        this.createWindow();

    }

    initOptions(options) {
        options = options || {}
        options.width = options.width || 800;
        options.height = options.height || 600;
        options.minWidth = options.minWidth || 200;
        options.minHeight = options.minHeight || 200;

        return options;
    }

    createWindow(options) {

        this.win = new BrowserWindow(this.initOptions(options || this.options));
        this.win.loadURL(this.url);
        if (process.env.NODE_ENV === 'development') {
            this.win.webContents.openDevTools()
        }

        this.win.on('closed', this.onClosed.bind(this))
    }


    onClosed() {
        this.win = null;
    }
}

module.exports = MainWindow;
