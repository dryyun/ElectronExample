# ElectronExample

A example of learning electron


### 简易打包

Tips: 主要是 Mac 上的方案，其他系统的也很容易 ，换个参数或者换个包就可以实现了。

使用 [electron-packager](https://github.com/electron-userland/electron-packager) 生成可执行 .app 文件

> $ yarn global add electron-packager   
> 
> $ electron-packager . --asar --icon=icon/icon --package-manager=yarn   

使用 [electron-installer-dmg](https://github.com/mongodb-js/electron-installer-dmg) 生成 dmg 安装包

> $ yarn global add electron-installer-dmg   
> 
> $ electron-installer-dmg ./ElectronExample-darwin-x64/ElectronExample.app   ElectronExample

