const windowStateKeeper = require('electron-window-state');

module.exports = function () {
    _mainWindowState = windowStateKeeper({
        defaultWidth: 800,
        defaultHeight: 600
    });

    let options = {
        'x': _mainWindowState.x,
        'y': _mainWindowState.y,
        'width': _mainWindowState.width,
        'height': _mainWindowState.height
    }

    return options;
}
