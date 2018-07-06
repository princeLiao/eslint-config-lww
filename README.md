# eslint-config

## npm 发布流程
+ 配置package.json
``` bash
npm init 
```
+ 镜像设置改回原始设置
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
+ 撤销发布  （版本发布半小时内有效）
```
    npm unpublish pkgName@version
```
超过半小时 
```
    npm deprecate pkgName@version
```