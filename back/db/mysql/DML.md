# DML

## 插入数据

```sql

    -- 不指定具体字段名(插入时，主键id插入NULL/0即可，MySQL会自动处理)
    INSERT [INTO] tb_name VALUES|VALUE (datas...);

    -- 指定字段名
    INSERT [INTO] tb_name (field...) VALUES|VALUE (datas...);

    -- 同时插入多条记录
    INSERT [INTO] tb_name [(field...)] VALUES (datas...),(datas...)...;

    -- 通过SET形式插入记录
    INSERT [INTO] tb_name [(field...)] SET key=value,...;

    -- 将查询结果插入到列表
    INSERT [INTO] tb_name [(field...)] SELECT field FROM tb_name [WHERE 条件];
    INSERT [INTO] tb_name [( <field1>[,..<fieldn > ])] VALUES ( value1 )[,( valuen )];

    -- 往表tb_name中插入二条记录, 
    -- 这二条记录表示：编号为1的名为Tom的成绩为96.45, 编号为2 的名为Joan 的成绩为82.99，编号为3 的名为Wang 的成绩为96.5.
    INSERT [INTO] tb_name VALUES(1,’Tom’,96.45),(2,’Joan’,82.99),(2,’Wang’, 96.59);

    -- 插入或更新
    INSERT INTO students (id, class_id, name, gender, score) VALUES (1, 1, '小明', 'F', 99) 
    ON DUPLICATE KEY            -- 如果记录已经存在，就更新该记录
    UPDATE name='小明', gender='F', score=99;

    -- 插入或忽略(如果记录已经存在，就啥事也不干直接忽略)
    INSERT IGNORE INTO students (id, class_id, name, gender, score) VALUES (1, 1, '小明', 'F', 99);



```

## 更新数据

```sql

    UPDATE tb_name SET field=value,... [WHERE 条件] [ORDER BY 字段名] [LIMIT 限制条数];
    UPDATE tb_name SET field=value,… WHERE 条件;
    UPDATE tb_name SET field=newvalue WHERE 条件;
    UPDATE tb_name SET field=replace(field,oldvalue,newvalue);

    -- 文章前面加入4个空格
    UPDATE tb_name SET content=concat('',content);

    -- 更新用户名含A的用户 使其年龄减3
    UPDATE tb_name SET age=age-3 WHERE name LIKE "%A%";

    -- 更新前三条记录 让已有age+10 (更新/删除时不能LIMIT使用偏移量)
    UPDATE tb_name SET age=age+10 ORDER BY id DESC LIMIT 3;


```

## 删除数据

```sql

    TRUNCATE [TABLE] tb_name;   -- 清空数据表       // id会被重置为1开始 被绑定外键时执行出错
    DELETE FROM tb_name;        -- 清空数据表

    -- 删除匹配的数据
    DELETE FROM tb_name [WHERE 条件] [ORDER BY field] [LIMIT 限制条数];

    -- 删除一条按id升序的男性的记录(LIMIT语句此时不能使用偏移量)
    DELETE FROM tb_name WHERE sex="man" ORDER BY id ASC LIMIT 1;
    DELETE FROM tb_name WHERE id=11;

```

## 插入或替换

```sql

    -- 如果我们希望插入一条新记录（INSERT），但如果记录已经存在，就先删除原记录，再插入新记录。
    -- 此时，可以使用REPLACE语句，这样就不必先查询，再决定是否先删除再插入

    REPLACE INTO students (id, class_id, name, gender, score) VALUES (1, 1, '小明', 'F', 99);

```

## 快照

```sql

    -- 如果想要对一个表进行快照，即复制一份当前表的数据到一个新表，可以结合CREATE TABLE和SELECT：
    -- 新创建的表结构和SELECT使用的表结构完全一致。

    -- 对class_id=1的记录进行快照，并存储为新表students_of_class1:
    CREATE TABLE students_of_class1 SELECT * FROM students WHERE class_id=1;

```

## 写入查询结果集

```sql
    -- 如果查询结果集需要写入到表中，可以结合INSERT和SELECT，将SELECT语句的结果集直接插入到指定表中。

    -- 例如，创建一个统计成绩的表statistics，记录各班的平均成绩：
    CREATE TABLE statistics (
        id BIGINT NOT NULL AUTO_INCREMENT,
        class_id BIGINT NOT NULL,
        average DOUBLE NOT NULL,
        PRIMARY KEY (id)
    );

    -- 然后，我们就可以用一条语句写入各班的平均成绩
    INSERT INTO statistics (class_id, average) SELECT class_id, AVG(score) FROM students GROUP BY class_id;

```

## 强制使用指定索引

```sql

    -- 在查询的时候，数据库系统会自动分析查询语句，并选择一个最合适的索引。
    -- 但是很多时候，数据库系统的查询优化器并不一定总是能使用最优索引。
    -- 如果我们知道如何选择索引，可以使用FORCE INDEX强制查询使用指定的索引。
    -- 指定索引的前提是索引idx_class_id必须存在。
    SELECT * FROM students
    FORCE INDEX (idx_class_id)
    WHERE class_id=1
    ORDER BY id DESC;

```

## 重复数据

```sql

    -- 统计表中 first_name 和 last_name的重复记录数
    SELECT COUNT(*) as repetitions, last_name, first_name
    FROM `tb_name`
    GROUP BY last_name, first_name
    HAVING repetitions > 1;         -- 设置重复数大于1


-- 过滤重复数据
    SELECT DISTINCT * FROM `tb_name`;       -- 读取不重复的数据

    SELECT field1, field2
    FROM `tb_name`
    GROUP BY (field1, field2);              -- 读取不重复的数据

-- 删除重复数据
    -- 方式一
    CREATE TABLE `tb_tmp` SELECT field1, field2 FROM `tb_name`  GROUP BY (field1, field2);
    DROP TABLE `tb_name`;
    ALTER TABLE `tb_tmp` RENAME TO `tb_name`;

    -- 方式二: 在数据表中添加 INDEX(索引) 和 PRIMAY KEY(主键)
    ALTER IGNORE TABLE `tb_name`
    ADD PRIMARY KEY (field1, field2);

```
