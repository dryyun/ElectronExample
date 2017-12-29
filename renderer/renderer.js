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

// 获取屏幕尺寸
(function () {
    let display = electron.screen.getPrimaryDisplay();

    let h2 = document.createElement('h2');
    let text = document.createTextNode(`Screen width: ${display.size.width}，height: ${display.size.height}`)
    h2.appendChild(text)

    document.body.appendChild(h2)

})();


// 获取用户 IP
(function () {
    let ipUrl = 'http://ip.chinaz.com/getip.aspx';
    require('axios').get(ipUrl)
        .then(function (response) {
            let ip  = response.data;
            ip = ip.replace(/['|{|}|,]/g,' ')
            console.log(ip)
            let h2 = document.createElement('h2');
            let text = document.createTextNode(`${ip}`)
            h2.appendChild(text)
            document.body.appendChild(h2)
        })
        .catch(function (error) {
            // console.log(error);
        });
})();
