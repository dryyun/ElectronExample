const {dialog, shell} = require('electron')
const {autoUpdater} = require('electron-updater')

autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"

autoUpdater.autoDownload = false

exports.check = function () {

    autoUpdater.checkForUpdates();

    autoUpdater.on('update-available', function () {
        dialog.showMessageBox({
            type: "info",
            title: "有可用更新",
            message: "有新版本的可用更新，是否要更新",
            buttons: ['更新', 'No']
        }, function (buttonIndex) {
            if (buttonIndex !== 0) return;

            let githubUrl = 'https://github.com/dryyun/ElectronExample/releases/latest';
            shell.openExternal(githubUrl)

        })
    })

}