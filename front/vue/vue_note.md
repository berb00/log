# vue note

## 全局引入

```text
    css     可直接在main.js文件import
    scss    可直接在main.js文件引入, 但直接引入不能使用高级语法(变量等)
    js      在main.js引入，并挂载在vue原型链上
```

## 版本

```text
    common: CommonJS标准
    esm:    EcmaScript Module
```

key  | comment
-    | -
vue.common.dev.js           | -
vue.common.prod.js          | -
-    | -
vue.runtime.common.dev.js   | -
vue.runtime.common.prod.js  | -
-    | -
vue.js                      | 完整版本
vue.runtime.js              | 运行时版本   不包含模版编译器来获得整个包体积的减少,开发时本地编译模板.生产的运行时，需要预编译，比完整版小30%左右，前端性能最优
vue.esm.js                  | 预编译调试时， EcmaScript Module（ES MODULE)，支持import from 最新标准的。
vue.common.js               | 预编译调试时，CommonJS规范的格式，可以使用require("")引用的NODEJS格式。
-    | -
vue.runtime.common.js       | 生产运行时，commonJS标准。
vue.runtime.esm.js          | 生产运行时，esm标准。
vue.esm.browser.js          | ES Module (直接用于浏览器)
-    | -
vue.min.js                  | 完整版 (生产环境)
vue.runtime.min.js          | 运行时版 (生产环境)
vue.esm.browser.min.js      |

## 常用命令

```shell
    # 查看vue历史版本
    npm view vue-cli versions --json        // 1.x 2.x
    npm view @vue/cli versions --json       // 3.x 4.x

    # 卸载
    npm uninstall vue-cli -g
    npm uninstall @vue/cli -g

    # 安装
    npm install -g vue-cli@2.9.6
    npm install -g @vue/cli@3.9.1

    # 创建工程
    vue init webpack projectname
    vue create projectname

    vue create --help
```

## 项目结构

```text
    vue项目目录:
    projectname:
        node_model:
        public:
        src:
            assets:
            components:
            views:
            App.vue
            main.js
            router.js
            store.js
        .gitignore
        .postcssrc.js
        bable.config.js
        package.json
        package-lock.json
        server.js


    相关文件和文件夹的含义：
        build 文件夹: 里面是对 webpack 开发和打包的相关设置，包括入口文件、输出文件、使用的模块等；
        config 文件夹: 主要是指定开发和打包中的静态资源路径、要压缩的文件类型、开发使用的端口号、开发使用虚拟服务器跨域请求 api 等。
        node_modules: 项目的依赖库；
        src 文件夹： 我们主要操作的地方，组件的增加修改等都在这个文件夹里操作，下文会有详细介绍；
        static 文件夹: 静态资源文件夹，放置不会变动的资源，直接被复制到最终的打包目录（默认是dist/static）下；
        .babelrc: 使用 babel 的配置文件，用来设置转码规则和插件；
        .editorconfig: 代码的规范文件，规定使用空格或 tab 缩进，缩进的长度是两位还是四位之类的代码风格，使用的话需要在编辑器里下载对应的插件；
        .eslintignore: 指定 eslint 忽略的文件；
        .eslintrc: 配置 eslint 的检测规则，强制按照规则书写代码；
        .gitignore: 指定 git 忽略的文件，所有 git 操作均不会对其生效；
        .postcssrc: 指定使用的 css 预编译器，里面默认配置了 autoprefixer ，自动补全浏览器前缀；
        favicon.ico: 浏览器标签页 title 旁边的小图标，这是需要我们自己粘贴过来的；
        index.html: 首页文件，项目运行的时候，会自动将我们在 src 文件夹里生成的组件插入这个文件里；
        LICENSE: 项目声明的 license；
        package-lock.json: 当 node_modules 或 package.json 发生变化时自动生成的文件。这个文件主要功能是确定当前安装的包的依赖，以便后续重新安装的时候生成相同的依赖，而忽略项目开发过程中有些依赖已经发生的更新；
        package.json: 指定项目开发和生成环境中需要使用的依赖库；
        README.md: 相当于是一个备注文件，对项目开发过程中需要注意的地方进行一些说明。

    src 文件夹结构
        assets: 放置静态资源，包括公共的 css 文件、 js 文件、iconfont 字体文件、img 图片文件 以及其他资源类文件。之所以强调是公共的 css 文件，是因为要在组件的 css 标签里加入 ‘scoped‘ 标记，将其作用范围限制在此组件以及调用它的父级组件中，避免污染全局样式；
        components: 放置通用模块组件。项目里总会有一些复用的组件，例如弹出框、发送手机验证码、图片上传等，将它们作为通用组件，避免重复工作；
        http: 放置与后台 api 相关的文件。这里面有 axios 库的实例配置文件、使用配置的 axios 实例接入 api 获取数据的函数的集合的文件；
        mixins: 放置混合选项的文件。具体来说，相当于是公用函数的集合，在组件中引用时，可以作用于组件而不必书写重复的方法；
        pages: 放置主要页面的组件。例如登录页、用户信息页等。通常是这里的组件本身写入一些结构，再引入通用模块组件，形成完整的页面；
        router: 放置路由设置文件，指定路由对应的组件；
        store: 放置 vuex 需要的状态关联文件，设置公共的 state、mutations 等；
        App.vue: 入口组件，pages 里的组件会被插入此组件中，此组件再插入 index.html 文件里，形成单页面应用；
        main.js: 入口 js 文件，影响全局，作用是引入全局使用的库、公共的样式和方法、设置路由等。

```
