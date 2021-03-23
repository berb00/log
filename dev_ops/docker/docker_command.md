# docker command

## Management Commands

```shell
    # builder
        docker builder build        # Build an image from a Dockerfile
        docker builder prune        # Remove build cache
    # config
        docker config create        # Create a config from a file or STDIN
        docker config inspect       # Display detailed information on one or more configs
        docker config ls            # List configs
        docker config rm            # Remove one or more configs
    # container
        docker container ls          # 查看运行的容器
        docker container ls -a       # 查看所有的容器
        docker container inspect     # Display detailed information on one or more containers
        docker container stats       # 显示容器资源使用统计实时信息
        docker container logs [containerID]         # 获取容器日志 查看容器输出

        docker container create                     # 创建新容器
        docker container run image_name             # 从镜像生成容器并运行
        docker container rm                         # 删除容器
        docker container kill [containID]           # 杀死运行的容器 终止容器

        docker container restart     # 重启容器
        docker container start       # 启动容器
        docker container stop        # 终止容器

        docker container pause       # 中断容器中所有进程
        docker container unpause     # 取消暂停容器所有进程

        docker container attach      # Attach local standard input, output, and error streams to a running container
        docker container commit      # 从容器变化创建一个新镜像
        docker container cp          # Copy files/folders between a container and the local filesystem
        docker container diff        # Inspect changes to files or directories on a container's filesystem
        docker container exec        # Run a command in a running container
        docker container export      # Export a container's filesystem as a tar archive

        docker container port        # 列出端口映射
        docker container prune       # 删除所有停止的容器
        docker container rename      # 修改容器名称

        docker container top         # 显示容器运行的进程
        docker container update      # 更新容器配置
        docker container wait        # 阻塞运行直到容器停止，然后打印出它的退出代码

    # Manage contexts
        docker context ls          # List contexts
        docker context inspect     # Display detailed information on one or more contexts

        docker context export      # Export a context to a tar or kubeconfig file
        docker context import      # Import a context from a tar or zip file

        docker context create      # Create a context
        docker context rm          # Remove one or more contexts
        docker context update      # Update a context
        docker context use         # Set the current docker context

    # engine
        docker engine activate    # Activate Enterprise Edition
        docker engine check       # Check for available engine updates
        docker engine update      # Update a local engine

    # image
        docker image ls             # 查看存在的镜像
        docker image inspect        # Display detailed information on one or more images

        docker image pull           # Pull an image or a repository from a registry
        docker image push           # Push an image or a repository to a registry

        docker image rm             # Remove one or more images
        docker image save           # Save one or more images to a tar archive (streamed to STDOUT by default)
        docker image tag            # Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
        docker image build          # Build an image from a Dockerfile
        docker image history        # Show the history of an image
        docker image import         # Import the contents from a tarball to create a filesystem image
        docker image load           # Load an image from a tar archive or STDIN
        docker image prune          # Remove unused images


    # network
        docker network ls          # List networks
        docker network inspect     # Display detailed information on one or more networks

        docker network create      # Create a network
        docker network rm          # Remove one or more networks

        docker network connect     # Connect a container to a network
        docker network disconnect  # Disconnect a container from a network
        docker network prune       # Remove all unused networks

    # node
        docker node ls             # List nodes in the swarm
        docker node inspect        # Display detailed information on one or more nodes

        docker node rm             # Remove one or more nodes from the swarm

        docker node demote         # Demote one or more nodes from manager in the swarm
        docker node promote        # Promote one or more nodes to manager in the swarm
        docker node ps             # List tasks running on one or more nodes, defaults to current node
        docker node update         # Update a node

    # plugin
        docker plugin ls          # 列出所有插件
        docker plugin inspect     # 显示插件详情

        docker plugin create      # 从rootfs和配置创建一个插件。插件数据目录必须包含config.json和rootfs目录。
        docker plugin rm          # 删除插件
        docker plugin set         # 修改插件设置

        docker plugin disable     # 禁用一个插件
        docker plugin enable      # 启用一个插件
    
        docker plugin install     # 安装插件
        docker plugin push        # 推送插件到仓库
        docker plugin upgrade     # 升级现有插件

    # secret
        docker secret ls          # List secrets
        docker secret inspect     # Display detailed information on one or more secrets

        docker secret create      # Create a secret from a file or STDIN as content
        docker secret rm          # Remove one or more secrets

    # service
        docker service ls         # 显示所有服务
        docker service inspect    # 显示服务详情


        docker service create     # 创建一个新的服务
        docker service rm         # 删除若干服务

        docker service logs       # 获取服务或进程的日志
        docker service ps         # 显示若干服务的任务
        docker service rollback   # 还原服务配置的更改
        docker service scale      # 扩/缩容服务;设置服务中容器的副本数
        docker service update     # 更新服务

    # stack
        docker stack [OPTIONS] ls          # List stacks
        docker stack [OPTIONS] rm          # Remove one or more stacks

        docker stack [OPTIONS] deploy      # Deploy a new stack or update an existing stack
        docker stack [OPTIONS] ps          # List the tasks in the stack
        docker stack [OPTIONS] services    # List the services in the stack

    # swarm(集群和调度工具)
        docker swarm ca           # Display and rotate the root CA
        docker swarm init         # Initialize a swarm
        docker swarm join         # Join a swarm as a node and/or manager
        docker swarm join-token   # Manage join tokens
        docker swarm leave        # Leave the swarm
        docker swarm unlock       # Unlock swarm
        docker swarm unlock-key   # Manage the unlock key
        docker swarm update       # Update the swarm

    # system
        docker system df          # 显示docker磁盘使用情况
        docker system events      # 从服务端获取实时事件
        docker system info        # 显示系统信息
        docker system prune       # 删除未使用的数据

    # trust
        docker trust key          # Manage keys for signing Docker images
        docker trust signer       # Manage entities who can sign Docker images
        docker trust inspect      # Return low-level information about keys and signatures
        docker trust revoke       # Remove trust for an image
        docker trust sign         # Sign an image

    # volume
        docker volume ls                        # List volumes
        docker volume inspect volumename        # Display detailed information on one or more volumes

        docker volume create                    # Create a volume
        docker volume rm                        # Remove one or more volumes
        docker volume prune                     # Remove all unused local volumes
```

## Commands common

### inspect

```shell
    docker inspect [OPTIONS] NAME|ID [NAME|ID...]

```

### import  

```shell
    # 从容器快照文件中再导入为镜像，
    docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]
    cat ./ubuntu.tar | docker import - test/ubuntu:v1                   # 将快照文件 ubuntu.tar 导入到镜像 test/ubuntu:v1
    docker import http://example.com/exampleimage.tgz example/imagerepo # 指定 URL 或者某个目录来导入
```

### export

```shell
    docker export [OPTIONS] CONTAINER                   # 将文件系统作为一个tar归档文件导出到STDOUT
    docker export 1e560fca3906 > ubuntu.tar             # 导出容器 1e560fca3906 快照到本地文件 ubuntu.tar
```

### login

```shell
    docker login [OPTIONS] [SERVER]                     # 登陆docker
        -u username
        -p password

```

### logout  

```shell
    docker logout [SERVER]                              # 退出docker

```

### events

```shell
    docker events [OPTIONS]

```

### info

```shell
:<<EOF
    Usage:  docker info [OPTIONS]
    functions:
        Display system-wide information
    Options:
        -f, --format string   Format the output using the given Go template

EOF
    docker info                                         # 查看docker系统信息

    docker info --format '{{json .}}'                   # json格式化输出
```

```yml
    Client:     # 客户端
        Context:    default
        Debug Mode: false
        Plugins:
            app: Docker App (Docker Inc., v0.9.1-beta3)
            buildx: Build with BuildKit (Docker Inc., v0.5.1-docker)

    Server:     # 服务端
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
            Manager Addresses: 172.29.202.31:2377
        Runtimes: io.containerd.runtime.v1.linux runc io.containerd.runc.v2
        Default Runtime: runc
        Init Binary: docker-init
        containerd version: 269548fa27e0089a8b8278fc4fc781d7f65a939b
        runc version: ff819c7e9184c13b7c2607fe6c30ae19403a7aff
        init version: de40ad0
        Security Options: seccomp
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
        Insecure Registries: 127.0.0.0/8
        Live Restore Enabled: false

```

### version

```shell
    docker version                                      # 查看docker版本信息

```

## Commands images

### pull

```shell
    # 从 Docker Hub拉取docker镜像
    docker pull [OPTIONS] NAME[:TAG|@DIGEST]
    docker pull image_name                      # 拉取最新版镜像
    docker pull image_name:version              # 拉取指定版本

```

### push

```shell
    docker push [OPTIONS] NAME[:TAG]

```

### images

```shell
    docker images                                       # 查看存在的镜像
    docker images -a                                    # 查看所有的镜像(包括中间镜像)
    docker images -q                                    # 查看镜像ID

```

### search

```shell
    docker search [OPTIONS] TERM

```

### rmi

```shell
    docker rmi IMAGE                                    # 删除镜像
    docker rmi -f IMAGE                                 # 强制删除镜像
    docker rmi $(docker images -q)                      # 删除所有镜像
    docker rmi -r $(docker images -q)                   # 强制删除所有镜像

```

### save

```shell
    docker save [OPTIONS] IMAGE [IMAGE...]              # 将镜像以.tar文件形式保存到本地
        -o  要保存的tar文件路径

```

### build

```shell
    docker build [OPTIONS] PATH | URL | -               # 从Docker文件构建Docker镜像
        上下文路径|URL： 指定构建镜像的上下文的路径，构建镜像的过程中，可以且只可以引用上下文中的任何文件
        --tag, -t   镜像的名字及标签，通常 name:tag 或者 name 格式；可以在一次构建中为一个镜像设置多个标签。
        -f          指定要使用的Dockerfile路径；

    # 本地构建
    docker build -t hello-world .

    # 仓库构建
    docker build -t hello-world https://github.com/docker-library/hello-world.git#master:amd64/hello-world

    # 指定tar包构建
    docker build http://server/context.tar.gz

    # 从标准输入中读取 Dockerfile 进行构建
    # 如果标准输入传入的是文本文件，则将其视为 Dockerfile，并开始构建。
    # 这种形式由于直接从标准输入中读取 Dockerfile 的内容，它没有上下文，
    # 因此不可以像其他方法那样可以将本地文件 COPY 进镜像之类的事情。
    docker build - < Dockerfile         # 或
    cat Dockerfile | docker build -


    # 从标准输入中读取上下文压缩包进行构建
    # 如果发现标准输入的文件格式是 gzip、bzip2 以及 xz 的话，
    # 将会使其为上下文压缩包，直接将其展开，将里面视为上下文，并开始构建。
    docker build - < context.tar.gz

```

### history

```shell
    docker history [OPTIONS] IMAGE                      # 查看镜像的创建历史(镜像构成)

```

### commit

```shell
    docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]] # 提交容器成为一个新的镜像
        -m  描述信息
        -a  作者


```

### load

```shell
    docker load [OPTIONS]                               # 将一个tar文件加载为镜像
        -i  要加载的tar文件路径

```

### tag

```shell
    # 标记本地镜像，将其归入某一仓库。
    docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
    docker tag [OPTIONS] IMAGE[:TAG] [REGISTRYHOST/][USERNAME/]NAME[:TAG]

    docker tag ubuntu:15.10 runoob/ubuntu:v3    # 将镜像ubuntu:15.10标记为 runoob/ubuntu:v3 镜像


```

## Commands container

### create  

```shell
    docker create [OPTIONS] IMAGE [COMMAND] [ARG...]    # 创建一个新的容器但不启动它(用法同run)

```

### run

```shell
    docker run [OPTIONS] IMAGE [COMMAND] [ARG...]       # 创建一个新的容器并运行一个命令
        -i      以交互模式运行容器                        常与-t一起使用
        -t      为容器重新分配一个伪输入终端                常与-i一起使用
        -d      后台运行容器并返回容器id 即启动守护式容器
        --name  指定容器名称
        -v 宿主机绝对路径:容器绝对路径                      # 添加数据卷 指定宿主机路径挂载
        -v 容器绝对路径                                   # 添加数据卷 匿名挂载
        -v 卷名:容器绝对路径                               # 添加数据卷 具名挂载
        --privileged=true                               # 给容器添加扩展权限(容器挂载目录无权限时使用)
        --volumes-from containerlist                    # 从其他容器挂载数据卷
        --rm                                            # 当容器退出时自动删除该容器
        -P      随机端口映射
        -p      指定端口映射
                ip:hostport:containerport
                ip:containerport
                hostport:containerport
                containerport

    docker run -it ubuntu /bin/bash                     # 使用 ubuntu 镜像启动一个容器，参数为以命令行模式进入该容器
```

### rm

```shell
    docker rm CONTAINER                                 # 删除容器
    docker rm -f CONTAINER                              # 强制删除容器
    docker rm $(docker ps -aq)                          # 删除所有容器

```

### rename  

```shell
    docker rename CONTAINER NEW_NAME                    # 更新容器名称

```

### update  

```shell
    docker update [OPTIONS] CONTAINER [CONTAINER...]    # 更新容器配置参数

```

### start

```shell
    docker start [OPTIONS] CONTAINER [CONTAINER...]     # 启动已经停止的容器

```

### restart

```shell
    docker restart [OPTIONS] CONTAINER [CONTAINER...]   # 重启容器

```

### stop

```shell
    docker stop container_id                            # 停止运行中的容器

```

### kill

```shell
    docker kill [OPTIONS] CONTAINER [CONTAINER...]      # 强制停止运行中的容器

```

### pause

```shell
    docker pause CONTAINER [CONTAINER...]               # 暂停容器中所有的进程

```

### unpause

```shell
    docker unpause CONTAINER [CONTAINER...]             # 恢复容器中所有的进程

```

### ps

```shell
    docker ps                           # 查看正在运行的容器
    docker ps -a                        # 查看正在运行的容器 + 历史运行过的容器
    docker ps -n num                    # 查看最新创建的num个容器
    docker ps -l                        # 查看最新创建的1个容器
    docker ps -q                        # 查看容器ID
    docker ps -s                        # 显示容器大小
    docker ps -f=SIZE=200               # 过滤显示大小大于200的容器

```

### port

```shell
    docker port CONTAINER [PRIVATE_PORT[/PROTO]]

```

### top

```shell
    docker top CONTAINER [ps OPTIONS]                   # 查看容器内的进程信息

```

### stats

```shell
    docker stats [OPTIONS] [CONTAINER...]               # 显示容器的实时流资源使用统计信息 (显示停止的容器不返回任何数据)
    docker stats --format "{{.Container}}: {{.CPUPerc}}"# 格式化选项(--format)可以使用Go模板打印容器输出
    docker stats --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}"   # 以表格格式列出所有容器统计信息，其名称，CPU百分比和内存使用情况可以使用
        -a              显示所有容器
        --format        使用Go模板打印映像
        --no-stream     禁用流统计信息，仅拉取第一个结果


```

### logs

```shell
    docker logs [OPTIONS] CONTAINER                     # 获取容器日志
        -t                          # 显示时间戳timestamp
        -f                          # 持续跟踪日志输出
        --tail  number              # 要显示的最新日志条数


```

### attach

```shell
    # 退出容器终端，会导致容器的停止

    docker attach [OPTIONS] CONTAINER           # 进入正在运行的容器    进入正在执行的终端(不会启动新的进程)

```

### exec

```shell
    # 退出容器终端，不会导致容器的停止
    docker exec [OPTIONS] CONTAINER COMMAND [ARG...]    # 在运行的容器中执行命令 开启新的终端(可以操作)
    docker exec -it centos /bin/bash                    # 进入centos容器

```

### cp

```shell
    docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-  # 从容器拷贝文件到主机上   A--->B
    docker cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH  # 从主机拷贝文件到容器内   A--->B

```

### diff

```shell
    docker diff CONTAINER                               # 检查容器文件或目录的更改

```

### wait

```shell
    docker wait CONTAINER [CONTAINER...]                # 阻塞，直到一个或多个容器停止，然后打印退出代码

```

## other

```shell

exit                                # 停止并退出容器
ctr + p + q                         # 退出容器 (不停止)

systemctl start docker              # 启动docker
systemctl stop docker               # 关闭docker
systemctl restart docker            # 重启docker
systemctl daemon-reload             # 重启 Docker daemon

service docker start                # 启动docker
service docker stop                 # 关闭docker
service docker restart              # 重启docker

systemctl enable docker             # 设置开机自启
systemctl disable docker            # 关闭开机自启



docker images                       # 查看存在的镜像
docker image ls                     # 查看存在的镜像
# REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
# node                latest              4495f296c63b        6 days ago          943MB
# centos              latest              831691599b88        7 weeks ago         215MB
# hello-world         latest              fce289e99eb9        19 months ago       1.84kB
# 镜像仓库源            镜像标签             镜像ID               镜像创建时间          镜像大小


```
