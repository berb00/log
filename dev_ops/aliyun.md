
# aliyun

## instance

name                    | nickname      | public ip     | private ip
i-bp1a2sf1nehs6xho43qz  | phoenix-hz    | 47.111.70.246 | 172.29.202.31
i-uf6brop6lugpemnmdzat  | phoenix-sh    | 106.14.34.26  | 172.19.235.220

## 异常

```text
    Connection reset by peer
    解决方案
        客户端IP扫描服务端多个敏感端口导致被云盾拦截;
        设置白名单放行:
            云盾·安骑士（服务器安全）
            设置
            安全配置
            登录ip拦截加白(点此设置)
            安全管控
            白名单管理
            访问白名单
            添加白名单
```

## 安全组规则

```text
    phoenix-sh
    between 8000-9000
    8101/8101       test_first_spring
    8102/8102       test_spring

    80/80           first_spring:first_vue
    8110/8110       blog_vue
    9000/9000       blog_go

    8082/8082       docker_nginx
    8083/8083       docker_tomcat
    8090/8091       docker_elasticsearch
    8100/8100       docker_portainer

    9209/9209       conghua-photo

    8080/8080       jenkins
    3306/3306       mysql


    8111/8111       test_tomcat

```

## operate

### 在线云盘扩容

```shell
    # 步骤一：创建快照
    # 步骤二：在控制台支付扩容云盘容量
    # 步骤三：查看云盘分区情况
    fdisk -lu   # 示例以系统盘（/dev/vda1）和数据盘（/dev/vdb1、/vde/vdc1）的三个分区为例
    df -Th      # 确认已有分区的文件系统类型
    # 步骤四：扩容分区
    LANG=en_US.UTF-8        # 切换ECS实例的字符编码类型
    yum install gdisk -y    # 安装gdisk工具。如果您的分区为GPT格式，必须执行此步骤；如果您的分区为MBR格式，请跳过此步骤。
    growpart /dev/vda 1     # 扩容分区

    # 扩容ext*（例如ext4）文件系统
    # 扩容系统盘/dev/vda1的文件系统
    resize2fs /dev/vda1

    # 扩容数据盘/dev/vdb1的文件系统
    resize2fs /dev/vdb1

```

## -

```text

gitee私人令牌phoenix-token
    03993f371795748c7e2eaffa910318e9

webhook
    http://[Jenkins用户名]:[Jenkins用户密码]@http://[Jenkins公网地址]:[Jenkins公网端口]/generic-webhook-trigger/invoke
    http://phoenix:phoenix_jenkins@http://106.14.34.26:8080/generic-webhook-trigger/invoke
    jenkins_webhook


phoenix:pho-terminal




欢迎使用 Alibaba Cloud Linux 2 等保合规镜像
1.概述
   Alibaba Cloud Linux 2 等保合规镜像是基于 Alibaba Cloud Linux 2 官方镜像，根据《GB/T22239-2019信息安全技术网络安全等级保护基本要求》进行等保加固的镜像，用户使用本镜像无需额外配置即可满足大部分等保合规要求：
    （1）身份鉴别
    （2）访问控制
    （3）安全审计
    （4）入侵防范
    （5）恶意代码防范
2.使用指南
    按照《GB/T22239-2019信息安全技术网络安全等级保护基本要求》，部分配置需要用户手动执行命令进行配置。用户可以通过 root 账户登录系统后，执行/root/cybersecurity.sh 脚本来实现这类加固。
```

## 备案

```text

网站名称: 第一栈
网站备案号: 浙ICP备2021005006号-1
ip: 106.14.34.26
网站域名: sweetpig.vip
负责人: 刘永勃
备案状态: 正常




```

## other account

platform        | account   | pass
-|-|-
docker hub      | berb00    | Z9
docker aliyun   | berb00    | pD-00
