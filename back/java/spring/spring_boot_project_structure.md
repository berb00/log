# spring_boot_project_structure

## structure

```text
.
│  mvnw
│  mvnw.cmd
│  pom.xml
│  README.md
│  
└─src
    ├─main
    │  ├─java
    │  │  └─com
    │  │      └─bajins
    │  │          └─api
    │  │              │  BajinsApiApplication.java
    │  │              │
    │  │              ├─config
    │  │              │  │  QuartzJob.java
    │  │              │  │  Swagger2.java
    │  │              │  │  TaskExecutorConfig.java
    │  │              │  │  
    │  │              │  └─websocket
    │  │              │          WebSocketConfig.java
    │  │              │          WebSocketHandler.java
    │  │              │          WebSocketInterceptor.java
    │  │              │
    │  │              ├─constants
    │  │              │      WeChatConstants.java
    │  │              │
    │  │              ├─mapper
    │  │              │      WechatLoginLogMapper.java
    │  │              │      WechatMsgMapper.java
    │  │              │      WechatUserOpenidMapper.java
    │  │              │
    │  │              ├─domain
    │  │              │      WechatLoginLog.java
    │  │              │      WechatMsg.java
    │  │              │      WechatUserOpenid.java
    │  │              │
    │  │              ├─service
    │  │              │  │  UserSignatureService.java
    │  │              │  │  WechatService.java
    │  │              │  │  WxMsgService.java
    │  │              │  │  
    │  │              │  └─impl
    │  │              │          WechatServiceImpl.java
    │  │              │          WxMsgServiceImpl.java
    │  │              │
    │  │              ├─utils
    │  │              │  │  EmailUtil.java
    │  │              │  │  EncryptUtil.java
    │  │              │  │  StringUtil.java
    │  │              │  │
    │  │              │  └─wechat
    │  │              │          SHA1.java
    │  │              │          WXBizMsgCrypt.java
    │  │              │          XMLParse.java
    │  │              │
    │  │              ├─vo(视图包装对象)(视图包装对象View Object用于封装客户端请求的数据，防止部分数据泄露如：管理员ID，保证数据安全，不破坏 原有的实体类结构)
    │  │              │      TemplateLibraryVO.java
    │  │              │      TemplateMessageVO.java
    │  │              │
    │  │              └─controller
    │  │                      WechatController.java
    │  │                      WxMsgController.java
    │  │
    │  └─resources
    │      │  application.properties                项目配置文件
    │      │  ehcache3.xml
    │      │  logback-spring.xml
    │      │  
    │      ├─mappers                                mybatis映射文件
    │      │      WechatLoginLogMapper.xml
    │      │      WechatMsgMapper.xml
    │      │      WechatUserOpenidMapper.xml
    │      │
    │      ├─static                                 静态资源目录(存放html、css、js、图片等资源)
    │      └─templates                              视图模板目录(存放jsp、thymeleaf等模板文件)
    └─test
        └─java
            └─com
                └─bajins
                    └─api
                            BajinsApiApplicationTests.java


```
