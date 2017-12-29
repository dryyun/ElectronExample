// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const electron = require('electron');

// 定时查看内存使用
(function () {
    setInterval(function () {
        let memoryUsed = process.getProcessMemoryInfo().workingSetSize / 1000;
        $('#memoryUsed')[0].innerHTML = `Memory Used : ${memoryUsed} M`;
    }, 2000)
})();

(function () {
    let display = electron.screen.getPrimaryDisplay();
    $('#screen')[0].innerHTML = `Screen width: ${display.size.width}，height: ${display.size.height}`
    $('#screen').show();
})();