# jenkins note

## command

```shell


service jenkins start           # 启动
service jenkins restart         # 重启
service jenkins stop            # 停止


```

## note

```text

更改默认端口:
    修改/etc/sysconfig/jenkins文件，将端口改为8000

初始密码:
    /var/lib/jenkins/secrets/initialAdminPassword

jenkins workspace:
    /var/lib/jenkins/workspace/spring

执行脚本需cd 到jenkins项目工作空间下执行

WebHook
    # http://phoenix:phoenix_jenkins@http://106.14.34.26:8080/generic-webhook-trigger/invoke
    http://106.14.34.26:8080/gitee-project/spring

```
