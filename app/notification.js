const {Notification} = require('electron');

module.exports = function (options) {

    options = options || {}
    let defaultOptions = {};

    defaultOptions.title = options.title || '标题'

    if(process.env.NODE_ENV === 'development'){
        defaultOptions.title = '[Dev] ' + defaultOptions.title;
    }

    defaultOptions.body = options.body || '主体'

    let notification = new Notification(defaultOptions)
    notification.show();

}
