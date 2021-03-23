# redis note

## -

```shell

redis-cli -h 127.0.0.1 -p 6379 shutdown     # 关闭redis服务
redis-server &                              # 启动redis服务
redis-cli                                   # 启动 redis 客户端

ps -ef |grep redis
netstat -lntp | grep 6379


127.0.0.1:6379> PING                        # 检测 redis 服务是否启动  启动返回PONG



```
