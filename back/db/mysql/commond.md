# MySQL command

## SET Statements

```sql
    SET variable = expr [, variable = expr] ...

    variable: {
        user_var_name
        | param_name
        | local_var_name
        | {GLOBAL | @@GLOBAL.} system_var_name
        | {PERSIST | @@PERSIST.} system_var_name
        | {PERSIST_ONLY | @@PERSIST_ONLY.} system_var_name
        | [SESSION | @@SESSION. | @@] system_var_name
    }

    SET var_name = value

    SET CHARACTER SET
    SET NAMES assign values to character set and collation variables associated with the current connection to the server. See Section 13.7.6.2, “SET CHARACTER SET Statement”, and Section 13.7.6.3, “SET NAMES Statement”. 

    SET DEFAULT ROLE and SET ROLE set the default role and current role for user accounts. See Section 13.7.1.9, “SET DEFAULT ROLE Statement”, and Section 13.7.1.11, “SET ROLE Statement”.

    SET PASSWORD assigns account passwords. See Section 13.7.1.10, “SET PASSWORD Statement”.

    SET RESOURCE GROUP assigns threads to a resource group. See Section 13.7.2.4, “SET RESOURCE GROUP Statement”.

    SET TRANSACTION ISOLATION LEVEL sets the isolation level for transaction processing. See Section 13.3.7, “SET TRANSACTION Statement”. 



```

## SHOW Statements

```sql
    SHOW {BINARY | MASTER} LOGS
    SHOW BINLOG EVENTS [IN 'log_name'] [FROM pos] [LIMIT [offset,] row_count]
    SHOW CHARACTER SET [like_or_where]
    SHOW COLLATION [like_or_where]
    SHOW [FULL] COLUMNS FROM tbl_name [FROM db_name] [like_or_where]
    SHOW CREATE DATABASE db_name
    SHOW CREATE EVENT event_name
    SHOW CREATE FUNCTION func_name
    SHOW CREATE PROCEDURE proc_name
    SHOW CREATE TABLE tbl_name
    SHOW CREATE TRIGGER trigger_name
    SHOW CREATE VIEW view_name
    SHOW DATABASES [like_or_where]
    SHOW ENGINE engine_name {STATUS | MUTEX}
    SHOW [STORAGE] ENGINES
    SHOW ERRORS [LIMIT [offset,] row_count]
    SHOW EVENTS
    SHOW FUNCTION CODE func_name
    SHOW FUNCTION STATUS [like_or_where]
    SHOW GRANTS FOR user
    SHOW INDEX FROM tbl_name [FROM db_name]
    SHOW MASTER STATUS
    SHOW OPEN TABLES [FROM db_name] [like_or_where]
    SHOW PLUGINS
    SHOW PROCEDURE CODE proc_name
    SHOW PROCEDURE STATUS [like_or_where]
    SHOW PRIVILEGES
    SHOW [FULL] PROCESSLIST
    SHOW PROFILE [types] [FOR QUERY n] [OFFSET n] [LIMIT n]
    SHOW PROFILES
    SHOW RELAYLOG EVENTS [IN 'log_name'] [FROM pos] [LIMIT [offset,] row_count]
    SHOW {REPLICAS | SLAVE HOSTS}
    SHOW {REPLICA | SLAVE} STATUS [FOR CHANNEL channel]
    SHOW [GLOBAL | SESSION] STATUS [like_or_where]
    SHOW TABLE STATUS [FROM db_name] [like_or_where]
    SHOW [FULL] TABLES [FROM db_name] [like_or_where]
    SHOW TRIGGERS [FROM db_name] [like_or_where]
    SHOW [GLOBAL | SESSION] VARIABLES [like_or_where]
    SHOW WARNINGS [LIMIT [offset,] row_count]

    like_or_where: {
        LIKE 'pattern'
    | WHERE expr
    }

```

## 获取服务器元数据

```sql
    SELECT VERSION() \c                     -- 使用\c取消执行当前命令
    SELECT VERSION(), CURRENT_DATE;         -- 显示版本号和当前日期
    SELECT VERSION();                       -- 显示当前版本
    SELECT NOW();                           -- 显示当前日期时间
    SELECT USER();                          -- 显示当前用户
    SELECT DATABASE();                      -- 显示当前打开的数据库名称
    SELECT @@GLOBAL.SQL_MODE;               -- 查看sql_mode的语句

    SHOW [GLOBAL | SESSION] STATUS [LIKE 'pattern' | WHERE expr];            -- 显示MySQL的状态信息
    SHOW PLUGINS;                           -- 显示已安装的插件信息
    SHOW PRIVILEGES;                        -- 显示支持的所有权限信息
    SHOW [FULL] PROCESSLIST;                -- 显示线程快照信息  显示哪些线程正在运行
    SHOW PROFILES                           -- 显示当前会话多个SQL语句的执行耗时
    SHOW WARNINGS;                          -- 查看上一步操作产生的警告

    SHOW COUNT(*) WARNINGS;
    SHOW VARIABLES;                                                     -- 查看MySQL变量
    SHOW VARIABLES LIKE 'port';                                         -- 查看MySQL服务端口
    SHOW VARIABLES LIKE 'have%';                                        -- 查看支持的存储引擎信息
    SHOW VARIABLES LIKE 'storage_engine';                               -- 查看默认的存储引擎
    SHOW VARIABLES LIKE 'skip_networking';                              -- 查看skip-networking参数
    SHOW VARIABLES LIKE 'character%';                                   -- 查看字符编码设置
    SHOW VARIABLES LIKE 'collation_%';                                  -- 查看当前字符集和校对规则设置
    SHOW [GLOBAL|SESSION] VARIABLES [LIKE 'pattern' | WHERE expr];      -- 显示MySQL所有系统变量信息

    SHOW ENGINES;                                   -- 查看各类引擎 表格显示
    SHOW ENGINES\G;                                 -- 查看各类引擎 行显示
    SHOW ENGINE engine_name {STATUS | MUTEX};       -- 显示指定存储引擎运行时的快照信息
    SHOW [STORAGE] ENGINES;                         -- 显示支持的所有存储引擎

    SHOW CHAR SET;                                  -- 查看现在支持的所有编码方式
    SHOW CHARACTER SET;                             -- 查看现在支持的所有编码方式
    SHOW CHARACTER SET [LIKE'pattern' |WHERE expr]; -- 显示所有可用的字符集

    SHOW COLLATION;                                 -- 输出包括所有可用的字符集 查看支持的所有检验规则
    SHOW COLLATION LIKE 'latin1%';
    SHOW COLLATION [LIKE'pattern' | WHERE expr];    -- 显示所有支持的字符集校验规则

    SHOW {BINARY|MASTER} LOGS;                      -- 显示MySQL上的Binlog文件信息
    SHOW MASTER STATUS;                             -- 显示主库的Binlog日志信息

    SHOW GRANTS [FOR user];                 -- 显示指定用户的授权信息
    SHOW GRANTS [FOR CURRENT_USER];         -- 查看相关权限
    SHOW GRANTS [FOR CURRENT_USER()];       -- 查看相关权限

    SHOW DATABASES;                                             -- 显示数据库
    SHOW {DATABASES | SCHEMAS} [LIKE 'pattern' | WHERE expr];   -- 显示数据库名称

    SHOW PROCEDURE CODE proc_name;                          -- 显示指定存储过程的代码信息
    SHOW PROCEDURE STATUS [LIKE 'pattern' | WHERE expr];    -- 显示指定存储过程的状态信息

    SHOW SLAVE HOSTS;                           -- 显示当前主库上注册的从库信息
    SHOW SLAVE STATUS [FOR CHANNEL channel];    -- 显示从库的复制信息

    SHOW ERRORS [LIMIT [offset,] row_count];    -- 显示错误信息和错误个数
    SHOW COUNT(*) ERRORS;                       -- 显示错误信息和错误个数 等同于 SELECT @@error_count;

```

## 数据库和数据表的信息

```sql

    SELECT * FROM `tb_name`;                -- 显示表中的记录

    SHOW COLUMNS FROM tb_name;                                  -- 获取表结构
    SHOW COLUMNS FROM tb_name1 FROM tb_name2;                   -- 获取表结构
    SHOW TABLES;                                                -- 当前数据库包含的非TEMPORARY表信息
    SHOW [FULL] TABLES [{FROM | IN} db_name] [LIKE 'pattern' | WHERE expr];  -- 显示指定库中的所有表信息
    SHOW TABLE STATUS [{FROM | IN} db_name] [LIKE 'pattern' | WHERE expr];   -- 显示指定表的状态信息

    SHOW CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name;    -- 显示指定库的建库语句
    SHOW CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name\G;  -- 显示指定库的建库语句
    SHOW CREATE EVENT event_name;                               -- 显示指定事件的创建语句
    SHOW CREATE FUNCTION func_name;                             -- 显示指定函数的创建语句
    SHOW CREATE PROCEDURE proc_name;                            -- 显示指定存储过程的创建语句
    SHOW CREATE TABLE tb_name;                                  -- 显示指定表的建表语句
    SHOW CREATE TABLE tb_name\G;                                -- 显示指定表的建表语句
    SHOW CREATE TRIGGER trigger_name;                           -- 显示指定触发器的创建语句
    SHOW CREATE USER user;                                      -- 显示指定用户的创建语句
    SHOW CREATE VIEW view_name;                                 -- 显示指定视图的创建语句

    SHOW FUNCTION CODE func_name;                               -- 显示指定函数的函数代码
    SHOW FUNCTION STATUS [LIKE 'pattern' | WHERE expr];         -- 显示指定函数的状态信息

    SHOW INDEX FROM tb_name [FROM db_name];                     -- 显示表索引信息
    SHOW INDEX FROM mydb.mytable;                               -- 显示表索引信息

    SHOW EVENTS [{FROM | IN} schema_name] [LIKE 'pattern' | WHERE expr];    -- 显示事件管理器中的事件
    SHOW {INDEX | INDEXES | KEYS} {FROM | IN} tbl_name [{FROM | IN} db_name] [WHERE expr]; -- 显示表的索引信息
    SHOW OPEN TABLES [{FROM | IN} db_name] [LIKE 'pattern' | WHERE expr];   -- 显示表缓存中打开的非临时表信息

    -- 显示一个表的字段信息
    SHOW [FULL] {COLUMNS | FIELDS} {FROM | IN} tbl_name [{FROM | IN} db_name] [LIKE 'pattern' | WHERE expr];



```

## Other Commond

```sql

    SELECT LENGTH(str);                     -- 查询utf8下字符长度
    SELECT CHAR_LENGTH(str);                -- 查询字符数(一个汉字一个字符数)

    SHOW TRIGGERS [{FROM | IN} db_name] [LIKE 'pattern' | WHERE expr];       -- 显示指定库中的所有触发器信息

    -- 显示当前会话的SQL语句的资源使用情况
    SHOW PROFILE [type [, type] ... ] [FOR QUERY n] [LIMIT row_count [OFFSET offset]];
    -- 显示relay log文件中的event，可以指定具体的relay log文件，开始的位置，偏移等。
    SHOW RELAYLOG EVENTS [IN 'log_name'] [FROM pos] [LIMIT [offset,] row_count] [channel_option];
    -- 显示警告信息和警告个数， SHOW COUNT(*) WARNINGS 等同于 SELECT @@warning_count;
    SHOW WARNINGS [LIMIT [offset,] row_count]， SHOW COUNT(*) WARNINGS;
    -- 显示Binlog文件中的event，可以指定具体的Binlog文件，开始的位置，偏移等
    SHOW BINLOG EVENTS [IN 'log_name'] [FROM pos] [LIMIT [offset,] row_count];


    FLUSH privileges;                                       -- 刷新MySQL的系统权限相关表
    HELP keyword                                            -- 查看帮助文档
    ? keyword                                               -- 查看帮助文档
    ? MEDIUMINT                                             -- 查看该数据类型的详细信息
    SET NAMES 'utf8';                                       -- 设置编码字符集
    
    DELIMITER \\                                            -- 使用\\作为分隔符(默认为分号)
    mysql -uroot -p --delimiter=\\                          -- 使用\\作为分隔符(默认为分号)
    \T outfilepath                                          -- 开启输出日志(把命令及结果保存到日志文本中)
    \t                                                      -- 关闭输出日志
    \s                                                      -- 查询数据库配置相关信息
    EXIT                                                    -- 断开客户端与服务端的连接

```

```shell

    CREATE DATABASE `new` DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI;   # 创建新数据库
    mysqldump old -u root -p123456  | mysql new -u root -p123456                # 拷贝数据库


    mysqladmin --verdion                                    # 查看版本号
    mysqladmin drop db_name;                                # 删除数据库前，有提示
    mysqladmin -u root -p shutdown

    mysqld                                                  # 运行MySQL服务器
    mysqld --verbose --help |grep -A 1 'Default options';   # 查看MySQL配置文件路径

    systemctl start mysql.service
    systemctl restart mysqld;                               # 重启MySQL
    service mysqld restart;                                 # 重启MySQL
    systemctl status mysqld.service                         # 查看服务信息

    set password for 'root'@'localhost' = password('phoenixMysql_00'); # 设置密码
    grant all on *.* to 'mysqlremote'@'%' IDENTIFIED BY 'phoenixMysql_00'; # 设置用户
    flush privileges;   # 刷新缓存
```

## 用户管理

```sql
    -- 查询用户
    USE mysql;
    SELECT * FROM user;

    -- 添加用户
    CREATE USER 'username'@'hostname' IDENTIFIED BY 'password'; -- hostname 主机名为通配符'%'时 表示允许任意主机访问

    -- 创建一个用户在特定客户端登录,可访问特定数据库db
    GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP ON db.* TO 'username'@'hostname' identified BY 'password';

    -- 删除用户
    DROP USER 'username'@'hostname';

    -- 修改用户密码
    ALTER mysql.user 'username'@'hostname' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'newpassword';  -- 方式一

    UPDATE USER SET PASSWORD = PASSWORD('newpassword') WHERE USER = 'username';
    SET PASSWORD FOR 'username'@'hostname' = PASSWORD('newpassword');           -- 方式二

    UPDATE mysql.user SET authentication_string = '12345600'  WHERE user='user1' AND host='%';

```

## 权限管理

```sql
    -- 查询权限
    SHOW GRANTS FOR 'username'@'hostname';
    SHOW GRANTS for 'username'@'hostname';
    SHOW GRANTS for root@'localhost';
    SHOW GRANTS for webgametest@10.3.18.158;
    SHOW CREATE DATABASE dbname;  -- 这个可以看到创建数据库时用到的一些参数。
    SHOW CREATE TABLE tickets;    -- 可以看到创建表时用到的一些参数

    -- root权限:
    -- SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD,
    -- SHUTDOWN, PROCESS, FILE, REFERENCES, INDEX, ALTER, SHOW DATABASES,
    -- SUPER, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, REPLICATION SLAVE,
    -- REPLICATION CLIENT, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE,
    -- CREATE USER, EVENT, TRIGGER, CREATE TABLESPACE, CREATE ROLE, DROP ROLE

    -- 授予权限
    GRANT '权限列表' ON 'db_name'.'tb_name' TO 'username'@'hostname';   # 授予某用户某个表的某些权限
    GRANT ALL [PRIVILEGES] ON *.* TO 'username'.'hostname';            # 授予某用户所有数据库的所有权限

    -- 撤销权限
    REVOKE '权限列表' ON 'db_name'.'tb_name' FROM 'username'.'hostname'; # 撤销某用户的某些权限
    REVOKE ALL PRIVILEGES ON *.* FROM 'username'@'hostname';
    DELETE FROM USER WHERE USER='username' AND HOST='hostname';
    FLUSH PRIVILEGES;

    GRANT privileges ON db TO 'username'@'hostname';
    GRANT privileges ON *.* TO 'username'@'hostname' WITH GRANT OPTION;
    GRANT ALL ON *.* to 'username'@'hostname';
```

## 事物

```sql

    BEGIN                           -- 显式地开启一个事务
    START TRANSACTION               -- 显式地开启一个事务
    ROLLBACK                        -- 事务回滚 并撤销正在进行的所有未提交的修改
    ROLLBACK WORK                   -- 事务回滚 并撤销正在进行的所有未提交的修改
    COMMIT                          -- 提交事务 并使已对数据库进行的所有修改成为永久性的
    COMMIT WORK                     -- 提交事务 并使已对数据库进行的所有修改成为永久性的

    SET AUTOCOMMIT=0                -- 禁止自动提交
    SET AUTOCOMMIT=1                -- 开启自动提交

    SAVEPOINT identifier            -- 在事务中创建一个保存点，一个事务中可以有多个 SAVEPOINT；
    RELEASE SAVEPOINT identifier    -- 删除一个事务的保存点，当没有指定的保存点时，执行该语句会抛出一个异常；
    ROLLBACK TO identifier          -- 把事务回滚到标记点

    SET TRANSACTION                 -- 用来设置事务的隔离级别。

    -- InnoDB 存储引擎提供事务的隔离级别:
    READ UNCOMMITTED                -- 读未提交
    READ COMMITTED                  -- 读提交
    REPEATABLE READ                 -- 可重复读
    SERIALIZABLE                    -- 串行化


```

## 复制表

```sql

    -- 原表: tb_1       复制表: tb_2

    -- 方式一:复制表结构
    CREATE TABLE `tb_2` LIKE `tb1`;
    CREATE TABLE `tb_2` SELECT * FROM `tb_1` WHERE 1=2;
    SHOW CREATE TABLE `tb_1`;                           -- 并手动复制建表语句创建新表

    -- 方式二:复制表结构及数据到新表
    CREATE TABLE `tb_2` SELECT * FROM `tb_1`

```

## 导出数据

```sql
    SELECT * FROM `tb_name` INTO OUTFILE '/tmp/tmp.txt'; -- 将数据表数据导出到 /tmp/tmp.txt 文件

```
