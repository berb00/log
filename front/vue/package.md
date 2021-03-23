# package

```shell
    npm install --dev eslint

    npm install less less-loader --save-dev

    npm install sass-loader node-sass --save-dev

    npm install node-sass sass-loader less less-loader --save-dev

    npm install sass-loader node-sass webpack --save-dev
    npm uninstall node-sass sass-loader

    npm install less less-loader webpack --save-dev
    npm uninstall less less-loader

    npm install d3 --save-dev

    npm install element-ui --save
    npm uninstall element-ui

    npm install axios --save
    npm uninstall axios

    npm install js-cookie --save
    npm uninstall js-cookie

    npm install lodash --save
    npm uninstall lodash

    npm install mockjs --save
    npm uninstall mockjs

    npm install nprogress --save
    npm uninstall nprogress

    npm install vue-i18n --save
    npm uninstall vue-i18n

    npm install vuex --save
    npm uninstall vuex

```

## babel-polyfill

### 安装babel-polyfill

```shell
    npm install babel-polyfill --save
```

### 卸载babel-plugin-transform-runtime

```shell
    # 一
    npm uninstall babel-plugin-transform-runtime --save

    # 二 修改文件.babelrc
    "plugins": [
        // "transform-runtime"
    ],

    # 三 在入口文件main.js中引入babel-polyfill
    import 'babel-polyfill'
```
