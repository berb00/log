# nginx note

## nginx module

```text
    全局块:
        配置影响nginx全局的指令。
        一般有运行nginx服务器的用户组，nginx进程pid存放路径，日志存放路径，配置文件引入，允许生成worker process数等。
    events块:
        配置影响nginx服务器或与用户的网络连接。
        有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。
    http块:
        可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。
        如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等。
    server块:
        配置虚拟主机的相关参数，一个http中可以有多个server。
    location块:
        配置请求的路由，以及各种页面的处理情况。
```

## Tip

```text
    正向代理、反向代理都位于客户端和服务端之间
    正向代理代理客户端
    反向代理代理服务器

    正向代理:
        用于更改客户端对外IP。如VPN
        用户可以感知是否使用代理，服务器无法感知是否使用代理，我们称之为正向代理服务器。
    反向代理:
        用于选择实际指向服务器;隐藏了实际指向服务器、整个后端集群是一个黑箱;
        用户无法感知是否使用代理，服务器可以感知是否使用代理，我们称之为反向代理服务器。
    查看nginx的启动用户
        ps aux | grep "nginx: worker process" | awk '{print $1}'
        ps aux | grep nginx
        
```

## nginx config file

file | comment
-|-
nginx.conf  | nginx的基本配置文件
mime.types  | MIME类型关联的扩展文件
fastcgi.conf| 与fastcgi相关的配置文件
proxy.conf  | 与proxy相关的配置
sites.conf  | 配置nginx提供的网站，包括虚拟主机

## 日志分割

```text
    nginx -s reopen  重新打开日志文件。reopen是在nginx启动的情况给做分割日志用的
    为什么要切割日志？一般Nginx安装好后有些人会打开日志记录，有些人会关闭日志记录，打开日志记录的人一般都会把架设在Nginx上的所有网站日志都存在同一个文件里（比如我存在access.log日志文件里），
    这样日积月累所有网站的访问记录就会把日志文件越积越大，当需要查看日志文件的时候一看就是一大串，不方便查找。现在，如果我把每天的日志文件分割开来用相应的日期标识出来这样就大大方便查找了。
    我是建议打开日志记录，日志记录里面存放着很多有用的东西。比如：浏览器名称，可以方便你对网站的排版做出调整；IP地址，如果网站收到攻击，你就可以查到那个IP地址。
    Linux下我们可以简单的把日志文件mv走，但是你会发现mv走后新的日志文件没有重新生成，一般linux下用的文件句柄，文件被打开情况下你mv走文件，但是原来操作这个文件的进程还是有这个文件的inode等信息，
    原进程还是读写原来的文件，因此简单的mv是无法生效的。
    因此建议过程如下
        1. mv原文件到新文件目录中，这个时候 nginx还写这个文件（写入新位置文件中了）
        2. 调用nginx -s  reopen用来打开日志文件，这样nginx会把新日志信息写入这个新的文件中
        这样完成了日志的切割工作， 同时切割过程中没有日志的丢失。
        测试当前配置文件是否正确： nginx -t
        测试指定配置文件是否正确： nginx -t 指定配置文件路径
```

## var/run/nginx.pid文件

```text
    首先 var/run这个目录是干嘛用的？
    此文件夹包含描述系统启动以来系统信息的数据。
    此文件夹下的文件必须在启动过程初期清除（删除或归零）。
    程序可以在/var/run下有自己的子文件夹。原先放在/etc下的进程标识（PID）文件必须放
    在/var/run里面。PID文件的命名惯例是<program-name>.pid。
    所以，nginx的PID文件名为/var/run/nginx.pid。
    nginx.pid存放的是nginx的master进程的进程号。

    nginx被停止时，var/run/nginx.pid被删除了。  
    而 reopen和 reload命令需要通过nginx.pid获取进程号，会去找var/run.nginx.pid ，如果不存在，就会报错。
```

## 安装依赖环境

```shell
    yum -y install gcc-c++
    yum -y install pcre pcre-devel
    yum -y install zlib zlib-devel
    yum -y install openssl openssl-devel
```

## 安装Nginx源

`rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm`
安装该rpm后，我们就能在/etc/yum.repos.d/ 目录中看到一个名为nginx.repo 的文件。

## 安装Nginx

### 方式一

```shell
    yum install -y nginx
```

### 方式二

```text
  1. 下载
    cd /usr/src/
    wget http://nginx.org/download/nginx-1.17.3.tar.gz

  2. 解压
    tar -xvf nginx-1.17.3.tar.gz -C /usr/local
    cd nginx-1.17.3

  3. 安装依赖环境
    yum -y install gcc-c++
    yum -y install pcre pcre-devel
    yum -y install zlib zlib-devel
    yum -y install openssl openssl-devel

  4. 配置环境
    ./configure
    // 启用“server+status”页/ssl 模块
    ./configure –with-http_stub_status_module –with-http_ssl_module

  5. 编译依赖库/配置安装
    make
    make install

  6. 开放80端口
    /sbin/iptables -I INPUT -p tcp --dport 80 -j ACCEPT

  7. 配置环境变量
    vim /etc/profile

    #nginx configure
    export NGINX_HOME=/usr/local/nginx
    export PATH=$PATH:$NGINX_HOME/sbin

    source /etc/profile
```

## Nginx默认目录

```text
    whereis nginx

    nginx: /usr/sbin/nginx /usr/lib64/nginx /etc/nginx /usr/local/nginx

    path | comment
    -|-
    /etc/nginx/                 | Nginx配置路径
    /var/run/nginx.pid          | PID目录
    /var/log/nginx/error.log    | 错误日志
    /var/log/nginx/access.log   | 访问日志
    /usr/local/nginx/html       | 默认站点目录

    事实上，只需知道Nginx配置路径，其他路径均可在`/etc/nginx/nginx.conf` 以及`/etc/nginx/conf.d/default.conf` 中查询到。

````

## Error

```text
error:
    nginx: [error] open() "/usr/local/nginx/logs/nginx.pid" failed (2: No such file or directory)
done:
    /usr/local/nginx/sbin/nginx -c  /usr/local/nginx/conf/nginx.conf


    error:  nginx: [error] open() "/usr/local/nginx/logs/nginx.pid" failed (2: No such file or directory)
    [root@power local]# /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf

```
