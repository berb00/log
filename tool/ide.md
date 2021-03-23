# ide

## ide list

tools | comment
-|-
Yapi                | API文档管理平台
ApiPost             | 请求调试工具
postman             | 请求调试工具

## charles

```text
    Registered Name: https://zhile.io
    License Key: 48891cf209c6d32bf4

    https://charles.wrbug.com charles 激活码在线生成
```

## IDEA

### IDEA short key

key | comment
-|-
`Ctrl` + `r`                | 当前文件内容替换
`Ctrl` + `Shift` + `r`      | 全局替换

```test
    设置注释不在行首    Editor --> Code Style --> Java --> Comment Code 取消选项Line Comment...
```

## navicat

```text

    链接阿里云
        新建链接
        常规选项
            连接名:任意链接名
            主机:localhost
            端口:3306
            用户名:root
            密码:登陆阿里云的密码
        SSH选项
            主机:阿里云公网IP
            端口:22
            用户名:root
            密码:阿里云数据库密码

```

## pycharm

### pycharm short key - Mac

key | comment
-|-
cmd b               | 跳转到声明处（cmd加鼠标）
opt +               | 空格 显示符号代码 （esc退出窗口 回车进入代码）
cmd []              | 光标之前/后的位置
opt + F7            | find usage
cmd backspace       | 删除当前行
cmd +c              | 复制光标当前行,剪切同理
cmd + f             | 当前文件搜索（回车下一个 shift回车上一个）
cmd + r             | 当前文件替换
shift + cmd + f     | 全局搜索
shift + cmd + R     | 全局替换
cmd+o               | 搜索class
shift + cmd + o     | 搜索文件
opt + cmd + o       | 搜索符号（函数等)
cmd + l             | 指定行数跳转
shift enter         | 在行中的时候直接到下一行
cmd +               | 展开当前
cmd -               | 折叠当前
shift cmd +         | 展开所有
shift cmd -         | 折叠所有
cmd /               | 注释/取消注释一行
opt + cmd + /       | 批量注释(pycharm不生效)
ctr + tab           | 史上最NB的导航窗口（工程文件列表、文件结构列表、命令行模式、代码检查、VCS等，下面两个是可以被替换的）
alt + F12           | 打开命令行栏
cmd + F12           | 显示文件结构
cmd j               | 代码智能补全
alt + F1            | 定位编辑文件所在位置:
cmd + F6            | 更改变量
opt + cmd + t       | 指定代码被注释语句或者逻辑结构、函数包围
Tab / Shift + Tab   | 缩进、不缩进当前行
opt + cmd + l       | 代码块对齐
cmd+d               | 在下一行复制本行的内容

### pycharm tips

```text
    #一些小问题
        运行程序时不会出现run窗口，而是在Python Console中运行:
        取消:菜单栏run->edit configurations->Templates->Python->Execution->Run with Python console
    # 修改python编译器版本
        PyCharm->preferences->Project->Project interpreter

```

### pycharm 预定义文件模板变量

```text
模板:
    #!/usr/bin/env python
    #-*- coding:utf-8 -*-
    # author:${USER}
    # @filename: ${NAME}.py
    # @time: ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}
    # @project_name: ${PROJECT_NAME}
    # @product_name: ${PRODUCT_NAME}
变量:
    ${PROJECT_NAME} - 当前项目的名称。
    ${NAME} - 在文件创建过程中在“新建文件”对话框中指定的新文件的名称。
    ${USER} - 当前用户的登录名。
    ${DATE} - 当前的系统日期。
    ${TIME} - 当前系统时间。
    ${YEAR} - 今年。
    ${MONTH} - 当月。
    ${DAY} - 当月的当天。
    ${HOUR} - 目前的小时。
    ${MINUTE} - 当前分钟。
    ${PRODUCT_NAME} - 将在其中创建文件的IDE的名称。
    ${MONTH_NAME_SHORT} - 月份名称的前3个字母。 示例：一月，二月等
    ${MONTH_NAME_FULL} - 一个月的全名。 示例：一月，二月等
```

## visualstudio

### visualstudio short key

key | comment
-|-
`ctrl` + `m` + `o`    | 折叠所有代码
`ctrl` + `m` + `l`    | 折叠/展开所有代码

## vscode

### vscode short key

key | comment
-|-

ctrl + k + 0    折叠所有代码
ctrl + k + J    展开所有代码
shift + alt + F 代码格式化

### vscode plugins

plugin | comment
-|-
Chinese         | 汉化
Beautify        | 代码格式化
prettier        | -

### vscode setting

key | comment
-|-
Power Mode      | 鼠标效果

### vscode tips

```text
    #、打开settings.json文件
        1.cmd +shift + p
        2.搜索setting 选择Preferences: Open Settings(JSON)
        editor.tabSize              // 文件缩进
        editor.detectIndentation    // 是否在打开文件上检测文件缩进并应用

    #、设置模板
    文件-->首选项-->用户代码片段-->点击新建代码片段--取名vue.json 确定


    #、解决中文乱码
        设置--settings--搜索
        配置 "files.autoGuessEncoding": true,

```

## webstorm

### webstorm short key

key | comment
-|-
`Ctrl` + `Shift` + `-`      | 折叠所有代码
`Ctrl` + `Shift` + `+`      | 展开所有代码
`Ctrl` + `shift` + `f`      | 批量查找
`Ctrl` + `H`                | 批量查找
`Ctrl` + `shift` + `r`      | 批量替换
`Ctrl` + `B` + `click`      | 定位函数
`Ctrl` + `G`                | 定位行
`Collapse All`              | 折叠所有代码
`Expand All`                | 展开所有代码

### webstorm tips

```text

    卡顿问题
    File->Settings->Editor->File Types->Ignore files and folders下添加node_modules

    重启-清缓存
    File->Invalidate Caches/Restart

    显示当前内存占用
    File->Settings->Appearance & Behavior -> Appearance -> Window Options -> Show memory indicator

```

## xcode

### 编辑快捷键

```shell
    open /Applications/Xcode.app/Contents/Frameworks/IDEKit.framework/Resources/IDETextKeyBindingSet.plist
    chmod 666
    cd /Applications/Xcode.app/Contents/Frameworks/IDEKit.framework/Resources/
```

## mac

```text

清屏    五指放在触摸屏并扩散
退出清屏    在清屏状态下 五指放在触摸屏并收缩
进入启动台  在桌面状态 五指放在触摸屏并收缩


```
