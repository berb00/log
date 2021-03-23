# vue router

## title

```text
    起步
    动态路由匹配
    嵌套路由
    编程式的导航
    命名路由
    命名视图
    重定向和别名
    路由组件传参
    HTML5 History 模式
```

## 进阶

## 导航守卫

### 全局前置守卫

```javascript
    router.beforeEach((to, from, next) => {
        if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
        else next()
    })
```

### 全局解析守卫

### 全局后置钩子

```javascript
    router.afterEach((to, from) => {})
```

### 路由独享的守卫

### 组件内的守卫

```javascript
    beforeRouteEnter (to, from, next) {
        next(vm => {})
    }
    beforeRouteUpdate (to, from, next) {
        next()
    }
    beforeRouteLeave (to, from, next) {
        next()
    }
```

## 完整的导航解析流程

### 路由元信息

### 过渡动效

#### 单个路由的过渡

#### 基于路由的动态过渡

### 数据获取

#### 导航完成后获取数据

#### 在导航完成前获取数据

### 滚动行为

#### 异步滚动

#### 路由懒加载

##### 把组件按组分块

## router api

### router-link

```html
    <router-link>将激活 class 应用在外层元素<router-link>
    Props:
        to
        replace
        append
        tag
        active-class
        exact
        event
        exact-active-class
```

### router-view

```html
    <router-view><router-view>
    属性:
        Props
        name
```

### Router 构建选项

```text
    routes                                  Array<RouteConfig>
    mode                                    配置路由模式          "hash" | "history" | "abstract"(node.js)
    base                                    应用的基路径          "默认值: "/""
    linkActiveClass                         全局配置 <router-link> 的默认“激活 class 类名"   ".router-link-active"(默认)
    linkExactActiveClass                    全局配置 <router-link> 精确激活的默认的 class
    scrollBehavior                          滚动行为
    parseQuery / stringifyQuery             提供自定义查询字符串的解析/反解析函数。覆盖默认行为。
    fallback                                当浏览器不支持 history.pushState 控制路由是否应该回退到 hash 模式。默认值为 true
```

### Router 实例属性

```javascript
    afterHooks: []
    resolveHooks: []
    beforeHooks: []

    app: Vue {_uid: 3, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
    apps: [Vue]

    fallback: false
    history: HTML5History {router: VueRouter, base: "", current: {…}, pending: null, ready: true, …}
    matcher: {match: ƒ, addRoutes: ƒ}
    mode: "history"
    options: {
        base: "/"
        mode: "history"
        routes: ''
    }

    currentRoute: {
        fullPath: "/"
        hash: ""
        matched: [{…}]
        meta: {}
        name: "home"
        params: {}
        path: "/"
        query: {}
    }
```

### Router 实例方法

```javascript
    router.onReady
    router.onError

    router.beforeEach           // 全局前置守卫
    router.afterEach            // 全局后置钩子

    router.beforeResolve        // 全局解析守卫
    router.resolve

    router.push
    router.replace
    router.go
    router.back
    router.forward

    router.addRoutes
    router.getMatchedComponents

    // 组件内的守卫
    beforeRouteEnter
    beforeRouteUpdate
    beforeRouteLeave            // 离开守卫 通常用来禁止用户在还未保存修改前突然离开

    router.beforeEach((to, from, next) => {
        // ...
    })
```

### 路由对象

#### 路由对象属性

### 组件注入

#### 注入的属性

#### 增加的组件配置选项

### this.$routes

```javascript
    fullPath: "/"
    hash: ""
    matched: [
        {
            beforeEnter: undefined
            components: {default: {…}}
            instances: {default: VueComponent}
            matchAs: undefined
            meta: {}
            name: "home"
            parent: undefined
            path: ""
            props: {}
            redirect: undefined
            regex: /^(?:\/(?=$))?$/i
        }
    ]
    meta: {}
    name: "home"
    params: {}
    path: "/"
    query: {}
```
