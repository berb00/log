# k8s note

## install

```sh

    # 官方压缩包安装kubectl:
    # 1、Download the latest release with the command
        curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
        # curl -LO https://dl.k8s.io/release/v1.20.0/bin/linux/amd64/kubectl

    # 2、Download the kubectl checksum file:
        curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"

    # 3、Validate the kubectl binary against the checksum file:
        echo "$(<kubectl.sha256) kubectl" | sha256sum --check
        # kubectl: OK
        # kubectl: FAILED
        # sha256sum: WARNING: 1 computed checksum did NOT match


    # other
    yum install -y kubelet kubeadm kubectl


    # kubeadm：用来初始化集群的指令。
    # kubelet：在集群中的每个节点上用来启动 Pod 和容器等。
    # kubectl：用来与集群通信的命令行工具。

    # 1、将 SELinux 设置为 permissive 模式（相当于将其禁用）
    setenforce 0
    sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config
    # 2、安装阿里云源kubernetes.repo
    cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
    [kubernetes]
    name=Kubernetes
    baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
    enabled=1
    gpgcheck=1
    repo_gpgcheck=1
    gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
    exclude=kubelet kubeadm kubectl
    EOF

    # 3、安装
    yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes --nogpgcheck
```

## k8s route

```text

Kubernetes
    基础概念
        Pod(最小封装集合)
            自主式Pod
            管理器管理的Pod
                RS、RC
                deployment
                HPA
                StatefullSet
                DaemonSet
                Job、Cronjob
            服务发现
            Pod协同
        控制器类型
        通讯模式
            网络通讯模式
            组件通讯模式
    k8s安装
        系统初始化
        k8s部署安装
    资源清单
        k8s中资源的概念
            什么是资源
            名称空间级别的资源
            集群级别的资源
        资源清单  yum语法格式
        通过资源清单编写Pod
        Pod的生命周期***
            initC
            Pod phase
            容器探针
                livenessProbe
                readinessProbe
            Pod hook
            重启策略
    Pod控制器
        什么是控制器
        控制器类型
            ReplicationController、ReplicaSet
            Deployment
            DaemonSet
            Job
            CronJob
            StatefulSet
            Horizontal Pod Autoscaling
    服务发现(把服务暴露给服务端)
        Service原理
            Service含义
            Service常见分类
                ClusterIP
                NodePort
                ExternalName
            Service实现方式
                userspace
                iptables
                ipvs
        Ingress
            Nginx
                HTTP代理访问
                HTTPS代理访问
                使用cookie实现会话关联
                BasicAuth
                Nginx进行重写
    存储
        PV
            概念解释
                PV
                PVC
                类型说明
            PV
                后端类型
                PV访问模式说明
                回收策略
                状态
                实例演示
            PVC
    调度器(把Pod定义到想要的节点)
        调度器概念
            调度器原理

            调度过程
            自定义调度器
        调度亲和性
            nodeAffinity
                preferredDuringSchedulingIgnoredDuringExecution
                requiredDuringSchedulingIgnoreDuringExection
            podAntiAffinity
                preferredDuringSchedulingIgnoredDuringExecution
                requiredDuringSchedulingIgnoreDuringExection
            亲和性运算符
    集群安全机制
        准入控制
        鉴权
            AlwaysDeny
            AlwaysAllow
            ABAC
            Webbook
            RBAC
                RBAC
                Role and ClusterRole
                RoleBinding and ClusterRoleBinding
                Resources
                to Subjects
                创建一个系统用户管理k8s dev名称空间:重要实验
        认证
            HTTP Base
            HTTPS
    HELM(yum)
        HELM概念
            构成
            HELM部署
            HELM模版
            HELM自定义
        HELM部署实例
            HELM部署dashboard
            metrics-service
                HPA演示
                资源限制
                    Pod
                    名称空间
        Prometheus
        EFK
    运维
        k8s源码修改(修改证书期限)
        k8s高可用构建

```

## Pod

```text
    只要有Pod启动 其中的pause容器就会启动
    同一个Pod中可以有若干个容器
    同一个Pod中的容器进程共享IP网络地址及存储卷
    同一个Pod中的容器端口不能冲突


    自主式Pod
    控制器管理的Pod
Pod控制器:
    ReplicationController
    ReplicaSet
    Deployment

    StatefulSet

    DaemonSet

    Job,Cronjob

    ReplicationController
        用来确保容器应用的副本数始终保持在用户定义的副本数
        即如果有容器异常退出会自动创建新的Pod来代替 如果异常多出来的容器也会自动回收
        建议使用ReplicaSet 取代 ReplicationController
    ReplicaSet
        同ReplicationController
        支持集合式selector
    Deployment

statefulSet
    为了解决有状态服务的问题(对应Deployment和ReplicaSets是无状态服务而设计)
    应用场景:
        1、稳定的持久化存储，即Pod重新调度后还能访问到相同的持久化数据，基于PVC实现
        2、稳定的网络标志，即Pod重新调度后其PodName和HostName不变，基于Headless SerVice(即没有ClusterIP的Service)来实现
        3、有序部署，有序扩展，即Pod是有顺序的，在部署或扩展时要依据定义的顺序依次进行，基于init containers实现(即从0～N-1，在下一个Pod运行之前所有的Pod必须都是Running和Reading状态)
        4、有序收缩有序删除(即从N-1～0)


```

## note

```text


服务分类
    无状态服务: LVS、Apache
    有状态服务: DBMS

高可用集群副本数据最好是 大于3的奇数个

APISERVER:          所有服务访问统一入口
ControllerManager:  维护副本期望数目
Scheduler:          负责接受任务 选择合适的节点进行分配任务
ETCO:               键值对数据库 存储k8s集群所有重要信息(持久化)
Kubelet:            直接跟容器引擎交互实现容器的生命周期管理
Kube-proxy:         负责写入规则至 IPTABLES、IPVS实现服务映射访问

COREDNS:            为集群中的SVC创建一个域名IP的对应关系解析
DASHBOARD:          给k8s集群提供一个B/S结构访问体系
INGRESS CONTROLLER: 官方只能实现四层代理 INGRESS可以实现七层代理
FEDERATION:         提供一个可以跨集群中心多k8s统一管理功能
PROMETHEUS:         提供k8s集群的监控能力
ELK:                提供k8s集群日志统一分析介入平台






```
