# Octopus

![logo](./resource/logo.svg)

- asar 2.0.1 ,
- express 4.17.1,
- electron 5.0.5 ,
- electron-builder 20.44.4

## Directory description

- `resource/app` 目录：放置等待打包的前端代码，打包后以`file:///`协议运行。
- `resource/web-app` 目录：放置等待打包的前端代码，打包后以`http://`协议运行。
- `dist` 目录：输出 Electron 打包后的可执行文件。

## An interesting desktop application by electron

安装npm依赖包。

```bash
npm install
```

开发模式下运行程序。

```bash
npm start
```

打包至`dist`目录。

```bash
npm run pack
```

发布为可执行程序。

```bash
npm run dist
```