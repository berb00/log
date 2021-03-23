# docker note

## note

```text
    /etc/docker/daemon.json

    容器是用镜像创建的运行实例
    镜像是类 容器是类生成的对象
    base镜像:scratch    Docker hub中大部分镜像都是通过在base镜像中安装及配置需要的软件构建的

    docker镜像都是只读的 当容器启动时 一个新的可写层被加载到镜像的顶部

    docker里面服务服务不能配置127.0.0.1,否则宿主机将无法访问
```

## title

```text
    docker数据卷
    Dockerfile
    docker网络
    docker compose
    docker swarm
    容器编排 集群部署
    CI/CD jenkins
    可视化-Rancher 持续集成、持续部署(CI/CD)使用
```

## Docker的核心组件

module  | comment
-|-
Docker Client      | 用户界面，它支持用户与Docker Daemon之间通信。
Docker daemon      | 运行于主机上，处理服务请求  daemon 实现了 Docker 引擎的 API。
Docker Registry    | -
Docker Image       | 是一个只读模板，用来运行Docker容器。
Docker Container   | 负责应用程序的运行，包括操作系统、用户添加的文件以及元数据。
DockerFile         | 是文件指令集，用来说明如何自动创建Docker镜像。
Docker Index       | 是中央registry，支持拥有公有与私有访问权限的Docker容器镜像的备份。

## docker安装(centos7以上)

```shell
    #、卸载旧版本docker
        yum remove docker-*
        yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
    #、卸载依赖
    yum remove docker-ce docker-ce-cli containerd.io
    #、删除资源
    rm -rf /var/lib/docker

    #、需要的安装包
        yum install -y yum-utils
    #、设置仓库镜像
        yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo   # 默认国外地址
    #、更新yum软件包索引
        yum makecache fast
    #、安装docker引擎    ce:社区版 ee:企业版
        yum install docker-ce docker-ce-cli containerd.io
```

## install docker

```shell

    # 添加docker-ce 源
    wget -O /etc/yum.repos.d/docker-ce.repo https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/docker-ce.repo

    # 修改docker-ce 源
    sed -i 's@download.docker.com@mirrors.tuna.tsinghua.edu.cn/docker-ce@g' /etc/yum.repos.d/docker-ce.repo

    # 更新并安装 Docker-CE
    yum makecache fast
    yum -y install docker-ce

    # 查看docker版本
    yum list docker-ce.x86_64 --showduplicates | sort -r

    # 下载指定版本
    yum -y install docker-ce-17.03.2.ce

```

## 修改docker仓库资源镜像路径

```shell
    # 编辑docker配置文件
    sudo vim /etc/default/docker
    # 底部加入
    DOCKER_OPTS="--registry-mirror=https://registry.docker-cn.com"
    # 重启docker
    sudo service docker restart
```


## Docker 如何运行一个容器？

- Docker 引擎创建容器映像
- 将容器映像传递给 containerd
- containerd 调用 containerd-shim
- containerd-shim 使用 runC 来运行容器
- containerd-shim 允许运行时(本例中为 runC)在启动容器后退出
- 该模型带来的最大好处是在升级 docker 引擎时不会中断容器的运行。

## 构建image方式

1. commit方式
2. Dockerfile方式

## docker ps

```text
    CONTAINER ID            容器 ID。
    IMAGE                   使用的镜像。
    COMMAND                 启动容器时运行的命令。
    CREATED                 容器的创建时间。
    PORTS                   容器的端口信息和使用的连接类型（tcp\udp）。
    NAMES                   自动分配的容器名称。
    STATUS                  容器状态。
        created（已创建）
        restarting（重启中）
        running（运行中）
        removing（迁移中）
        paused（暂停）
        exited（停止）
        dead（死亡）
```

## 容器数据卷

```text
    作用:
        容器持久化(保存容器数据)
        容器间继承与数据共享
    特点:
        数据卷可以在容器间共享或重用数据
        卷中的更改可以直接生效
        数据卷中的更改不会包含在镜像的更新中
        数据卷的生命周期一直持续到没有容器使用它为止

    卷就是文件或目录。存在于一个或多个容器中，由docker挂载到容器，
    其不属于联合文件系统，故能绕过联合文件系统提供的一些用于持续存储或共享数据的特性

    卷的设计目的在于数据的持久化 完全独立于容器的生命周期 所以docker不会在容器删除时删除其挂载的数据卷

    命令添加数据卷:
        docker run -it -v 宿主机绝对路径:容器绝对路径 镜像名
        docker run -it -v 宿主机绝对路径:容器绝对路径:ro 镜像名     // 容器绝对路径内文件只读 文件由宿主机向容器单向更新
    Dockerfile添加数据卷: 使用该方式添加由于迁移性问题无法指定具体宿主机路径
        VOLUME ["/volume_path1", "volume_path2", "volume_path3"]
    查看数据卷是否挂载成功:
        docker inspect containerid
        查看
            HostConfig.Binds
            Mounts.Mode             // 读写模式 默认可读可写      ro:只读
            Mounts.RW               // 是否可写 true:可读可写     false:只读
            Mounts.Source           // 宿主机路径
            Mounts.Destination      // 容器路径
            Mounts.Source           // 宿主机路径
    容器推出后 宿主机绝对路径文件修改仍会同步到容器绝对路径

    数据卷容器: 容器间传递共享(--volumes-from)
        命名的容器挂载数据卷 其它容器通过挂载这个(父容器)实现数据共享 挂载数据卷的容器称之为数据卷容器
        容器间的配置信息传递 数据卷的生命周期一直持续到没有容器使用它为止
```

## 部署Nginx

```shell
    docker pull nginx
    docker run -d --name nginx -p 8082:80 nginx    # 阿里云8082映射到容器80端口 外网可访问
```

## 部署tomcat

```shell
    docker pull tomcat
    docker run -d --name tomcat -p 8083:8080 tomcar     # 此时tomcat下webapps目录为空 外网查询为404
    docker exec -it tomcat /bin/bash
    cp -r webapps.dist/* webapps/                       # 进入容器 将webapps.dist下的demo页面拷贝到webapps工作页面
```

## 部署ES + kibana    es即elasticsearch

```text
    es 暴露端口很多  占用内粗大(2G)   其数据一般需要放置到安全目录(使用挂载)
    elasticsearch:一个实时的分布式存储、搜索、分析的引擎
    -e ES_JAVA_OPTS="-Xms64m Xmx512m"      // 限制es内存1g~2g(小了跑不起来)
```

```shell
    docker run -d --name elasticsearch -p 8090:9200 -p 8091:9300 -e "discovery.type=single-node" 
    \ -e ES_JAVA_OPTS="-Xms64m Xmx512m" elasticsearch
```

## 可视化-portainer

```shell
    # 外网打开并设置用户名、密码   admin:portainer
    docker run -d -p 8100:9000 --restart=always
    \ -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
```

## mysql同步数据

```shell
    docker run -it --name mysql -p 8110:3306 -v /root/DockerTest/example/mysql/conf:/etc/mysql/conf.d -v /root/DockerTest/example/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --privileged=true mysql
    -e MYSQL_ROOT_PASSWORD=123456        // 配置密码
    --character-set-server=utf8mb4
    --collation-server=utf8mb4_unicode_ci
    -v /home/mysql/conf:/etc/mysql/conf.d
    -v /home/mysql/data:/var/lib/mysql

```

## Dockerfile制作镜像

```text

    docker build -t nginx:v3 .

```

## docker build 指令发生了什么

```Dockerfile
    # 构建nginx镜像
    FROM nginx
    RUN echo '<h1>Hello, Docker!</h1>' > /usr/share/nginx/html/index.html

    # $ docker build -t nginx:v3 .                      // 开始构建镜像
    # Sending build context to Docker daemon 2.048 kB   // 将上下文目录文件发送给docker引擎
    # Step 1 : FROM nginx
    # ---> e43d811ce2f4                                 // 拉取基础镜像
    # Step 2 : RUN echo '<h1>Hello, Docker!</h1>' > /usr/share/nginx/html/index.html
    # ---> Running in 9cdc27646c7b      // RUN指令生成了一个新容器'9cdc27646c7b' 执行了所要求的命令
    # ---> 44aa4490ce2c                 // 提交容器生成镜像'44aa4490ce2c'
    # Removing intermediate container 9cdc27646c7b  // 删除中间容器'9cdc27646c7b'
    # Successfully built 44aa4490ce2c
```

## 发布镜像

```shell

    # 发布镜像到阿里云
    sudo docker login --username=berb00 registry.cn-hangzhou.aliyuncs.com
    sudo docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/berb00/mydocker:tag
    sudo docker push registry.cn-hangzhou.aliyuncs.com/berb00/mydocker:tag

    sudo docker push registry.cn-hangzhou.aliyuncs.com/berb00/mydocker:tag

    # 发布镜像到dockerhub
    docker login -u username
    docker tag image username/image:tag
    docker push username/image:tag


```

## docker info

```yml
Client:
 Context:    default
 Debug Mode: false
 Plugins:
  app: Docker App (Docker Inc., v0.9.1-beta3)
  buildx: Build with BuildKit (Docker Inc., v0.5.1-docker)

Server:
 Containers: 3
  Running: 2
  Paused: 0
  Stopped: 1
 Images: 22
 Server Version: 20.10.5
 Storage Driver: overlay2
  Backing Filesystem: extfs
  Supports d_type: true
  Native Overlay Diff: false
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Cgroup Version: 1
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local logentries splunk syslog
 Swarm: active
  NodeID: owqu5jnaje9pe0zru05hzttwu
  Is Manager: true
  ClusterID: 98qvh2njnl0rguz798gj51r7t
  Managers: 1
  Nodes: 1
  Default Address Pool: 10.0.0.0/8  
  SubnetSize: 24
  Data Path Port: 4789
  Orchestration:
   Task History Retention Limit: 5
  Raft:
   Snapshot Interval: 10000
   Number of Old Snapshots to Retain: 0
   Heartbeat Tick: 1
   Election Tick: 3
  Dispatcher:
   Heartbeat Period: 5 seconds
  CA Configuration:
   Expiry Duration: 3 months
   Force Rotate: 0
  Autolock Managers: false
  Root Rotation In Progress: false
  Node Address: 172.29.202.31
  Manager Addresses:
   172.29.202.31:2377
 Runtimes: io.containerd.runtime.v1.linux runc io.containerd.runc.v2
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 269548fa27e0089a8b8278fc4fc781d7f65a939b
 runc version: ff819c7e9184c13b7c2607fe6c30ae19403a7aff
 init version: de40ad0
 Security Options:
  seccomp
   Profile: default
 Kernel Version: 4.19.91-22.2.al7.x86_64
 Operating System: Alibaba Cloud Linux (Aliyun Linux) 2.1903 LTS (Hunting Beagle)
 OSType: linux
 Architecture: x86_64
 CPUs: 2
 Total Memory: 3.493GiB
 Name: phoenix-hz
 ID: BI4B:66RP:G5NG:EADS:VRA6:BYKN:OYRW:4XKJ:IJI2:XQ2G:HE4Q:MLPE
 Docker Root Dir: /var/lib/docker
 Debug Mode: false
 Registry: https://index.docker.io/v1/
 Labels:
 Experimental: false
 Insecure Registries:
  127.0.0.0/8
 Live Restore Enabled: false

```

## Error

```shell

# question:
    Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
solution:
    systemctl start docker  // 启动docker


# question:
    Job for docker.service failed because the control process exited with error code.
    Loaded: loaded (/etc/systemd/system/docker.service; enabled; vendor preset: disabled)


# question:
    Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
    docker image ls
solution:
    systemctl daemon-reload
    systemctl restart docker



# quetion:
    [root@phoenix-sh sysconfig]# systemctl status docker
    ● docker.service - Docker Application Container Engine
    Loaded: loaded (/etc/systemd/system/docker.service; enabled; vendor preset: disabled)
    Drop-In: /etc/systemd/system/docker.service.d
            └─docker-dns.conf, docker-options.conf
    Active: failed (Result: start-limit) since 六 2021-03-06 13:17:45 CST; 4min 18s ago
        Docs: http://docs.docker.com
    Process: 18808 ExecStart=/usr/bin/dockerd $DOCKER_OPTS $DOCKER_STORAGE_OPTIONS $DOCKER_NETWORK_OPTIONS $INSECURE_REGISTRY (code=exited, status=1/FAILURE)
    Main PID: 18808 (code=exited, status=1/FAILURE)
solution:


# question:
    docker image rm image_id时:
    (must be forced) - image is referenced in multiple repositories
solution:
    原因:多个镜像有共同的镜像id 指向相同的仓库
    docker image rm iamge_name:tag










```

## docker container run hello-world

```text

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/


```
