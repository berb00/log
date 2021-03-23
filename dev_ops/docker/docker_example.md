# docker example

## 运行一个 web 应用    (已验证)

```sh
    # 使用 docker 构建一个 web 应用程序。
    # 在docker容器中运行一个 Python Flask 应用来运行一个web应用

    docker pull training/webapp  # 载入镜像
    docker run -d -P training/webapp python app.py
    docker run -d -p 5000:5000 training/webapp python app.py    # 指定端口
    # 参数说明:
    # -d:让容器在后台运行。
    # -P:将容器内部使用的网络端口随机映射到我们使用的主机上。

    docker ps # 查看正在运行的容器
    CONTAINER ID:   8aff153113f0
    IMAGE:          training/webapp
    COMMAND:        "python app.py"
    CREATED:        16 seconds ago
    STATUS:         Up 14 seconds
    PORTS:          0.0.0.0:49153->5000/tcp
    NAMES:          happy_banach

    47.111.70.246:5000      # 公网打开
```

## scratch_binary_print (已验证)

```Dockerfile

# 不打包
# 功能: 打印hello word

FROM scratch

COPY . .

EXPOSE 5000

ENTRYPOINT  ["./scratch_binary_print"]

# docker build -t scratch_binary_print:v1 .
# docker run scratch_binary_print:v1           // 成功打印

```

## scratch_binary_gin   (已验证)

```Dockerfile

# 不打包
# 功能: 提供/ping接口

FROM scratch

COPY . .

EXPOSE 5001

ENTRYPOINT  ["./scratch_binary_gin"]

# docker build -t scratch_binary_print:v1 .
# docker run -p 5001:5001 scratch_binary_gin:v1
# error: standard_init_linux.go:219: exec user process caused: no such file or directory

```

## golang_binary_gin (已验证)

```Dockerfile

# 不打包

# FROM golang:alpine   # 使用该镜像 不报错 但无法正常提供端口功能
FROM golang

COPY . .

EXPOSE 5002

ENTRYPOINT  ["./golang_binary_gin"]

# docker build -t gin_docker .          // 生成镜像
# docker run -d -p 5001:5001 IMAGE_ID   // 运行镜像
# 47.111.70.246:5002/ping               // 公网查看

```

## centos_binary_gin (已验证)

```Dockerfile

# 不打包

FROM centos

COPY . .

EXPOSE 5003

ENTRYPOINT  ["./centos_binary_gin"]


# docker build -t gin_docker .          // 生成镜像
# docker run -d -p 5001:5001 IMAGE_ID   // 运行镜像
# 47.111.70.246:5003/ping               // 公网查看

```

## gin_docker_build

```Dockerfile

# 打包

    # 在golang基础镜像下build出二进制文件
    # 然后使用scratch作为运行时的基础镜像
    # 并且将上一个stage build出来的二进制文件和它的相关依赖文件copy到scratch下


# 打包依赖阶段使用golang作为基础镜像
FROM golang as builder

# 启用go module
ENV GO111MODULE=on \
    GOPROXY=https://goproxy.cn,direct

WORKDIR /app

COPY . .

# CGO_ENABLED禁用cgo 然后指定OS等，并go build
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build .

# 由于我不止依赖二进制文件，还依赖views文件夹下的html文件还有assets文件夹下的一些静态文件
# 所以我将这些文件放到了publish文件夹
RUN mkdir publish && cp toc-generator publish && \
    cp -r views publish && cp -r assets publish

# 运行阶段指定scratch作为基础镜像
FROM scratch

WORKDIR /app

# 将上一个阶段publish文件夹下的所有文件复制进来
COPY --from=builder /app/publish .

# 为了防止代码中请求https链接报错，我们需要将证书纳入到scratch中
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/cert

# 指定运行时环境变量
ENV GIN_MODE=release \
    PORT=80

EXPOSE 5002

ENTRYPOINT ["./toc-generator"]

```
