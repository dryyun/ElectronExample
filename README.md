# ElectronExample

A example of learning electron

Tips: 主要是 Mac 上的方案，其他系统的也很容易 ，换个参数或者换个包就可以实现了。  
Tips: 全部使用 yarn 包管理，而不是 npm 。  


### 简易打包

使用 [electron-packager](https://github.com/electron-userland/electron-packager) 生成可执行 .app 文件

> $ yarn global add electron-packager   
> 
> $ electron-packager . --asar --icon=icon/icon --package-manager=yarn   

使用 [electron-installer-dmg](https://github.com/mongodb-js/electron-installer-dmg) 生成 dmg 安装包

> $ yarn global add electron-installer-dmg   
> 
> $ electron-installer-dmg ./ElectronExample-darwin-x64/ElectronExample.app   ElectronExample

### 更全面的打包方案

使用 [electron-builder](https://github.com/electron-userland/electron-builder) 

> $ yarn global add electron-builder   
> OR  
> $ yarn add electron-builder --dev   


#### 简单命令行调用

[CLI 调用](https://www.electron.build/cli)

> 开发者证书真贵呀，买不起。 
> 默认是运行程序是要签名的，不过我们可以跳过签名这步 ，当然也可以签本地证书
> $ CSC_IDENTITY_AUTO_DISCOVERY=false electron-builder build -m zip    
> OR
> $ yarn build-mac
>
> 运行生成 win 下的 exe 需要 .p12 证书
> $ yarn build-win

#### 通过 package.json 配置

> $ yarn build-mac 

