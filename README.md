# eslint-config

## eslint 安装与使用（全局安装）
+ npm i -g eslint
+ eslint --init
+ eslint test.js
## eslint 配置使用
+ 依赖安装 (mac 全局安装需要加上 sudo)
```bash
    cnpm i -g eslint-plugin-react eslint-plugin-html babel-eslint eslint-config-lww
    cnpm i --save-dev eslint-plugin-react eslint-plugin-html babel-eslint eslint-config-lww
```
+ 配置 `.eslintrc.js`
```javascript
    module.exports = {
        "extends": "lww",
    };
```

## npm 发布流程
+ 配置 `package.json`
``` bash
    npm init 
```
+ 发布前镜像设置改回原始设置
```bash
    npm config set registry http://registry.npmjs.org
```
+ 登录账户
```bash
    npm adduser
    username:durwin2016
    password:your password
    Email:792356934@qq.com
```
+ 发布
```
npm publish
```
+ 发布后
```bash
    npm config set registry https://registry.npm.taobao.org
```
+ 撤销发布  （版本发布半小时内有效）
```
    npm unpublish pkgName@version
```
超过半小时 
```
    npm deprecate pkgName@version
```