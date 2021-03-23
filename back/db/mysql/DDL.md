# DDL

## DATABASE

```sql

    -- 创建数据库
    CREATE {DATABASE|SCHEMA}[IF NOT EXISTS] db_name [[DEFAULT] CHARACTER SET [=] charset_name];

    -- 删除指定数据库
    DROP {DATABASE|SCHEMA} [IF EXISTS] db_name;

    -- 修改指定数据库的编码方式
    ALTER {DATABASE|SCHEMA} dn_name [DEFAULT] CHARACTER SET [=] charset_name;

    USE db_name;                                -- 打开指定数据库
    SHOW {DATABASES|SCHEMAS};                   -- 查看当前服务器下的数据库列表
    SHOW CREATE {DATABASE|SCHEMA} db_name;      -- 查看指定数据库的定义方式
    SELECT DATABASE();                          -- 查看当前打开的数据库

```

## TABLE

```sql
    SHOW TABLES;                    -- 查看数据库下的数据表
    DESC tb_name;                   -- 查看指定表的表结构
    DESCRIBE tb_name;               -- 查看指定表的表结构
    SHOW COLUMNS FROM tb_name;      -- 查看指定表的表结构

    -- 删除库中所有表
    SELECT CONCAT('DROP TABLE ', table_name,';') FROM information_schema.tables WHERE table_schema='db_name';

    -- 创建数据表
    CREATE TABLE [IF NOT EXISTS] tb_name(
        field fieldtype [完整性约束条件] [COMMENT 注释内容],
        field fieldtype [UNDIGNED|ZEROFILL] [NOT NULL] [[PRIMARY] KEY] [UNIQUE [KEY]] [AUTO_INCREMENT] [DEFAULT 默认值] [COMMENT 注释内容]
    )ENGINE=InnoDB CHARSET=utf8mb4 AUTO_INCREMENT=10;# 自增长步长

    --  完整性约束条件:
    --  PRIMARY KEY        主键        一个表只能有一个主键
    --  FOREIGN KEY        外键
    --  UNIQUE KEY         唯一        一个表可以有多个唯一 使用时该条件时 该字段的记录值不能重复   NULL值不算重复
    --  AUTO_INCREMENT     自增长
    --  NOT NULL           非空        使用时该条件时 插入记录值时不能为空    不使用默认值为NULL
    --  DEFAULT            默认值


    1、完整性
        实体完整性
        参照完整性
        用户定义的完整性
    2、五个约束
        NOT NULL    (非空)约束
        UNIQUE      (惟一)约束
        PRIMARY KEY (主键属)约束
        FOREIGN KEY (外键)约束
        CHECK       (校验)约束

    ZEROFILL           零填充       标记零填充时默认无符号
    UNSIGNED           无符号


    -- 删除数据表
        DROP TABLE [IF EXISTS] tb_name [,tb_name,...]

    -- 修改表名
        ALTER TABLE tb_name RENAME [TO|AS] new_name;
        RENAME TABLE tb_name TO new_name;

    -- 添加字段
        ALTER TABLE tb_name ADD field filedtype [完整性约束条件] [FIRST|AFTER field];

    -- 删除字段
        ALTER TABLE tb_name DROP field;
        ALTER TABLE tb_name DROP field1,DROP field2...;

    -- 修改字段(不能修改字段名)(不能修改主键)
        ALTER TABLE tb_name MODIFY field filedtype [完整性约束条件] [FIRST|AFTER];

    -- 修改字段(能修改字段名)
        ALTER TABLE tb_name CHANGE oldfield newfield filedtype [完整性约束条件] [FIRST|AFTER field];

    -- 添加/修改默认值
        ALTER TABLE tb_name ALTER field SET DEFAULT 默认值;

    -- 删除默认值
        ALTER TABLE tb_name ALTER field DROP DEFAULT;

    -- 添加主键
        ALTER TABLE tb_name ADD [CONSTRAINT [symbol]] PRIMARY KEY [index_type] (field,...); -- 可添加多主键

    -- 删除主键(自增长状态的主键不能删除)
        ALTER TABLE tb_name DROP PRIMARY KEY;

    -- 添加索引
        ALTER TABLE tb_name ADD [CONSTRAINT [symbol]] INDEX  `index_name`(field,...);

    -- 添加唯一
        ALTER TABLE tb_name ADD [CONSTRAINT [symbol]] UNIQUE [INDEX|KEY] [索引名] (field,...);

    -- 删除唯一
        ALTER TABLE tb_name DROP {INDEX|KEY} `index_name`;

    -- 添加外键
        -- 主表 tb_a
        -- 从表 tb_b
        ALTER TABLE `tb_b`
        ADD CONSTRAINT `fk_id`
        FOREIGN KEY (`b_id`) REFERENCES `tb_a`(`a_id`)
        ON DELETE CASCADE
        ON UPDATE CASCADE;
        [ON DELETE reference_option]        -- 指定主表delete操作时，子表对应的数据怎么响应
        [ON UPDATE reference_option];       -- 指定主表update操作时，子表对应的数据怎么响应

        -- CONSTRAINT fk_id:
        --     创建名为fk_id的外键约束 不写则系统自动生成外键约束名 (一般默认外键约束的名字开头是fk_)
        -- FOREIGN KEY (b_id) REFERENCES tb_a(a_id):
        --     tb_a表中的a_id字段就是tb_b表中的a_id的外键约束
        --     tb_b表中的b_id字段和tb_a表中的a_id字段关联
    -- 删除外键
        ALTER TABLE tb_name DROP FORGINE KEY `fk_id`;

    -- 修改表的存储引擎
        ALTER TABLE tb_name ENGINE=INNODB;

    -- 设置自增长步长
        ALTER TABLE tb_name AUTO_INCREMENT=value;

    -- 修改数据表的字符集:
    　　ALTER TABLE tb_name DEFAULT CHARACTER SET utf8mb4;

    -- 修改数据表中的 nickname 字段的字符集:
    　　ALTER TABLE tb_name CHANGE nickname nickname VARCHAR(256) CHARACTER SET utf8mb4 NOT NULL;

    -- 只修改表的字符集，影响后续该表新增列的默认定义，已有列的字符集不受影响。
        ALTER TABLE tb_name CHARACTER SET utf8mb4;

    -- 同时修改表字符集和已有列字符集，并将已有数据进行字符集编码转换。
        ALTER TABLE tb_name CONVERT TO CHARACTER SET utf8mb4;

    -- 修改列 字符集
        ALTER TABLE tb_name MODIFY col_name VARCHAR(col_length) CHARACTER SET utf8mb4;

```

## catalog

```text

    库

    表
        创建
        修改
        删除
        复制

    数据类型
        整型
        浮点型
        字符型
        日期型
    约束
        创建表时添加列级约束
        创建表时添加表级约束
        主键和唯一的区别
        外键的特点
        修改表时添加约束
        修改表时删除约束
    标识列
    事务的介绍
    演示事务的使用步骤
    事务并发问题的介绍
    演示事务的隔离级别
    回滚点的演示
    视图
        视图的创建
        视图的修改
        视图的查看和删除
        视图的更新
        视图和表的对比
    变量
        系统变量的介绍和语法
        全局变量的演示
        会话变量的演示
        自定义变量—用户变量
        自定义变量—局部变量
    存储过程
        存储过程的语法
        空参的存储过程
        带in模式的存储过程
        带out模式的存储过程
        带inout模式的存储过程
        存储过程的删除
        存储过程的查看
    函数
        函数的创建和调用语法
        案例演示函数的使用
        函数的查看和删除
    流程控制结构
        分支结构——if函数
        分支结构—case结构
        分支结构—if结构
        循环结构的介绍
        循环结构的演示
        循环结构的总结
        流程控制经典案例讲解


    _RPM安装
    ROOT密码设置和开机自启动
    安装位置
    修改字符集
    MySQL配置文件
    MySQL逻辑架构简介
    存储引擎简介
    SQL性能下降原因
    SQL执行加载顺序
    七种JOIN理论
    七种JOIN的SQL编写
    索引是什么
    索引优势劣势
    索引分类和建索引命令语句
    索引结构与检索原理
    哪些情况适合建索引
    哪些情况不适合建索引
    性能分析前提知识
    explain
    小表驱动大表
    in和exists
    为排序使用索引OrderBy优化
    慢查询日志
    批量插入数据脚本
    用ShowProfile进行sql分析
    全局查询日志
    锁
    主从复制

```
