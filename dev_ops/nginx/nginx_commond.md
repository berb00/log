# nginx command

## Options

```Usage: nginx [-?hvVtTq] [-s signal] [-c filename] [-p prefix] [-g directives]```

option | comment
-|-
-?,-h         | this help
-v            | show version and exit
-V            | show version and configure options then exit
-t            | test configuration and exit
-T            | test configuration, dump it and exit
-q            | suppress non-error messages during configuration testing
-s signal     | send signal to a master process: stop, quit, reopen, reload
-p prefix     | set prefix path (default: /usr/local/Cellar/nginx/1.17.10/)
-c filename   | set configuration file (default: /usr/local/etc/nginx/nginx.conf)
-g directives | set global directives out of configuration file

## command

command | comment
-|-
nginx                   | 启动nginx
nginx -?,-h             | 打开帮助信息
nginx -v                | 显示版本信息
nginx -V                | 显示版本和配置选项信息
nginx -t                | 不运行，而仅仅测试配置文件语法是否正确。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件。
nginx -T                | 检测配置文件是否有语法错误，转储并退出
nginx -q                | 在检测配置文件期间屏蔽非错误信息
nginx -s stop           | 快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。
nginx -s quit           | 平稳关闭Nginx，保存相关信息，有安排的结束web服务。
nginx -s reload         | 优雅重启,配置重载;因改变了Nginx相关配置，需要重新加载配置而重载。
nginx -s reopen         | 重新打开日志文件。
nginx -p prefix         | 设置前缀路径(默认是:/usr/share/nginx/)
nginx -c filename       | 指定配置文件代替缺省配置文件(默认是:/etc/nginx/nginx.conf)
nginx -g directives     | 设置配置文件外的全局指令
-|-
ps -ef |grep nginx      | 查看nginx的进程号
kill -9 nginxPid        | 杀死nginx进程
killall nginx           | 杀死所有nginx进程
whereis nginx.conf      | 查找nginx配置文件

### nginx -s  reload

```text
    该命令加载修改后的配置文件,命令下达后发生如下事件
    1. Nginx的master进程检查配置文件的正确性，若是错误则返回错误信息，
        nginx继续采用原配置文件进行工作（因为worker未受到影响）
    2. Nginx启动新的worker进程，采用新的配置文件
    3. Nginx将新的请求分配新的worker进程
    4. Nginx等待以前的worker进程的全部请求已经都返回后，关闭相关worker进程
    5. 重复上面过程，知道全部旧的worker进程都被关闭掉。
    所以，重启之后，master的进程号不变，worker的进程号会改变。
```
