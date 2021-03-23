# DQL

## SELECT完整语句

```sql

    SELECT  --  第三步执行
        id,sex,age,                                     --  查询的字段列表 *:查询所有字段
        GROUP_COUNT(username),
        COUNT(*) AS totalUser,                          -- AS alias_name    为查询的字段起别名
        MAX(age) AS max_age,                            -- 字段值不加引号
        MIN(age) AS min_age,
        SUM(age) AS sum_age,
        CONCAT(field1, field2, IFNULL(filed3,0)) AS newfieldname,      -- 多字段拼接为一个字段  IFNULL:若字段值为null则使用0参与拼接
    FROM tb_1   -- 第一步执行-查询的表名
    [INNER | LEFT |RIGHT] JOIN tb_2 ON conditions       -- 根据某些连接条件从其他表中获取数据
    WHERE   -- 第二步执行
        condition
        id>1                    -- 条件-第一次筛选
    GROUP BY sex                -- 将一组行组合成小分组，并对每个小分组应用聚合函数 对第一次筛选结果进行分组
    HAVING COUNT(*)>=2          -- 对分组结果进行二次筛选(HAVING group_conditions)基于group by
    ORDER BY age DESC           -- 对二次筛选结果按照某字段进行排序
    LIMIT 0,2;                  -- 进行分页限制每页出现记录条数

```

## 基础查询

```sql

    SELECT * FROM tb_name;
    SELECT tb_name.* FROM tb_name;                                  -- 查询指定表所有字段
    SELECT id,name... FROM tb_name;                                 -- 查询指定字段

    SELECT id,name FROM tb_name AS t;                               -- 给表起别名
    SELECT id,name FROM tb_name t;                                  -- 给表起别名
    SELECT id AS id_1, name AS name_1 FROM tb_name;                 -- 给字段起别名

    SELECT t.id,t.name... FROM tb_name AS t;                        -- 字段来自哪张表(多表查询时)
    SELECT tb_name.id,tb_name.name... FROM db_name.tb_name;         -- 字段来自哪张表(多表查询时)

    SELECT DISTINCT fieldname FROM tablename;                       -- 对查询结果去重

```

## 条件查询

```sql

    SELECT id,name FROM tb_name WHERE id=1;                 -- 查询id等于1(=不能匹配NULL)
    SELECT id,name FROM tb_name WHERE id<=>1;               -- 查询id等于1(<=>可以匹配NULL)
    SELECT id,name FROM tb_name WHERE id!=1;                -- 查询id不等于1
    SELECT id,name FROM tb_name WHERE id<>1;                -- 查询id不等于1
    SELECT id,name FROM tb_name WHERE age<=>NULL;           -- 查询age等于NULL
    SELECT id,name FROM tb_name WHERE age IS NULL;          -- 查询age等于NULL
    SELECT id,name FROM tb_name WHERE age IS NOT NULL;      -- 查询age不等于NULL

    SELECT id,name FROM tb_name WHERE id BETWEEN 3 AND 10;       -- 查询编号在3~10之间的数据   [3,10]
    SELECT id,name FROM tb_name WHERE id NOT BETWEEN 3 AND 10;   -- 查询编号不在3~10之间的数据

    SELECT id,name FROM tb_name WHERE id IN (1,3,4,8,...);                  -- 查询集合中编号的数据
    SELECT id,name FROM tb_name WHERE id NOT IN (1,3,4,8,...);              -- 查询非集合中编号的数据
    SELECT id,name FROM tb_name WHERE name IN ("aa","bb","cc","dd",...);    -- 查询集合中姓名的数据

    SELECT id,name FROM tb_name WHERE name LIKE "张%";               -- 查询姓张的数据
    SELECT id,name FROM tb_name WHERE name LIKE "%海%";              -- 查询名字中含有海的数据
    SELECT id,name FROM tb_name WHERE name LIKE "___";               -- 查询名字为三位的数据
    SELECT id,name FROM tb_name WHERE name LIKE "_i%";               -- 查询
    SELECT id,name FROM tb_name WHERE name NOT LIKE "_i%";           -- 查询

    SELECT id,name FROM tb_name WHERE name="aa" AND age=12;          -- 查询name为aa age为18的数据
    SELECT id,name FROM tb_name WHERE id>=3 AND age IS NOT NULL;     -- 查询id大于3 且 age不为空的数据
    -- 查询id大于3 且 age不为空且name以i结尾的数据
    SELECT id,name FROM tb_name WHERE id>=3 AND age IS NOT NULL AND name LIKE "%i";
    -- 查询姓张或年龄在3～10之间的数据
    SELECT id,name FROM tb_name WHERE name LIKE "张%" OR age BETWEENT 3 AND 10;

```

## 分组查询

```sql

    -- 按照性别分组 查询出所有性别分组后的第一个数据(只显示组的第一个数据 不知道每组中有几条数据)
    SELECT * FROM tb_name GROUP BY sex;
    SELECT * FROM tb_name GROUP BY 2;                  -- 按照字段位置分组
    SELECT * FROM tb_name GROUP BY sex,age;            -- 按照多个字段分组(先按sex分组 再按age分组)
    SELECT * FROM tb_name WHERE age>12 GROUP BY sex;   -- 查询age大于12的数据按性别分组

    -- 查询id,sex,name详情(组内包含的name) 按照sex分组
    SELECT id,sex,GROUP_CONCAT(name) FROM tb_name GROUP BY sex;

    -- 查询id,sex,name详情(组内包含的name),sex详情 按照sex分组
    SELECT id,GROUP_CONCAT(name),GROUP_CONCAT(age) FROM tb_name GROUP BY sex;

    -- 查询id,name详情(组内包含的name),组中总数, 按照sex分组
    SELECT id,GROUP_CONCAT(name),COUNT(*) AS total FROM tb_name GROUP BY sex;

    SELECT COUNT(*) AS total FROM tb_name;            -- 查询表中数据总数
    SELECT COUNT(age) AS total FROM tb_name;          -- 查询表中数据总数(不统计NULL值)

    -- 查询d,sex,name详情,组中总数,组中最大年龄,组中最小年龄,组中平均年龄,组中年龄总和 按照sex分组
    SELECT id,sex,GROUP_CONCAT(name),
    COUNT(*) AS total,
    MAX(age) AS max_age,
    MIN(age) AS min_age,
    AVG(age) AS avg_age,
    SUM(age) AS sum_age
    FROM tb_name
    WHERE id>1
    GROUP BY sex
    WITH ROLLUP
    HAVING COUNT(*)>=2                                  -- 对分组结果进行二次筛选(组中大于等于2条数据的)
    ORDER BY age DESC                                   -- 对二次筛选结果按照age字段进行降序排序
    LIMIT 0,2;                                          -- 进行分页限制每页出现记录条数

    SELECT * FROM tb_name ORDER BY id ASC;              -- 按id升序排列
    SELECT * FROM tb_name ORDER BY id DESC;             -- 按id降序排列
    SELECT * FROM tb_name ORDER BY id ASC,age DESC      -- 复合排序 先按id升序排序再按age降序排序

    SELECT * FROM tb_name LIMIT 1;                      -- 查询表中第一条记录
    SELECT * FROM tb_name LIMIT 3;                      -- 查询表中前三条记录
    SELECT * FROM tb_name ORDER BY id DESC LIMIT 3;     -- 查询表中降序前三条记录
    SELECT * FROM tb_name LIMIT 0, 5;                   -- 从第1条数据开始 查询5条
    SELECT * FROM tb_name LIMIT 5, 5;                   -- 从第6条数据开始 查询5条

```

## 内连接查询

```sql

    -- INNER JOIN只返回同时存在于两张表的行数据

    -- 内连接查询方式
    SELECT u.id,u.name,u.sex,p.name
    FROM user [AS] u                        -- 确定主表
    [INNER|CROSS] JOIN province [AS] p      -- 确定连接表
    ON u.provinceId=p.id;                   -- 连接条件

    -- 内连接查询方式只查询男
    SELECT u.id,u.name,u.sex,p.name FROM user [AS] u 
    [INNER|CROSS] JOIN province [AS] p
    ON u.provinceId=p.id
    WHERE sex='man';

    -- 内连接三张表
    SELECT u.id,u.name,u.sex,p.name [AS] province,d.name [AS] department 
    FROM user [AS] u
    JOIN province [AS] p ON u.provinceId=p.id
    JOIN department [AS] d ON u.dId=d.id;

```

## 外连接查询

```sql

    -- 左外连接查询方式
    -- LEFT OUTER JOIN则返回左表都存在的行
    SELECT u.id,u.name,u.sex,p.name
    FROM user [AS] u                        -- 左表
    LEFT [OUTER] JOIN province [AS] p       -- 右表
    ON u.provinceId=p.id;

    -- 右外连接查询方式
    -- RIGHT OUTER JOIN返回右表都存在的行。如果某一行仅在右表存在，那么结果集就会以NULL填充剩下的字段。
    SELECT u.id,u.name,u.sex,p.name
    FROM user AS u
    RIGHT [OUTER] JOIN province [AS] p
    ON u.provinceId=p.id;

```

## 多表查询(笛卡尔查询)

```sql

    -- 结果集的列数是tb_1表和tb_2表的列数之和，行数是tb_1表和tb_2表的行数之积。
    SELECT * FROM `tb_1`, `tb_2`;   -- 从多张表同时查询数据
    SELECT t1.id `id1`, t2.id `id2` FROM `tb_1` `t1`, `tb_2` `t2`;

    -- 从两张表中查询 用户名,省分(查询出的结果是笛卡尔积的形式、像双层for循环的形式)
    SELECT user.id,user.name,province.name [AS] province
    FROM user,province;

    -- WHERE方式 从两张表中查询 用户名,省分;
    SELECT user.id,user.name,province.name [AS] province
    FROM user,province
    WHERE user.pId=province.id;

```

## 联合查询

```sql
    -- 把多个表的查询结果合并(各表查询的字段数目需一样)
    -- 两个表的查询字段数要相同
    SELECT name FROM employee UNION SELECT name FROM user;      -- 查询两个表中的字段(去重)
    SELECT name FROM employee UNION ALL SELECT name FROM user;  -- 查询两个表中的字段(不去重)
    -- UNION               合并且去掉重复记录
    -- UNION ALL           合并不去掉重复记录

    SELECT username FROM  employee UNION SELECT username FROM t1;     -- 表employee与表t1联合查询 去重
    SELECT username FROM  employee UNION ALL SELECT username FROM t1; -- 表employee与表t1联合查询 不去重

```

## 正则表达式查询

```sql

    SELECT * FROM user WHERE name REGEXP '^t';  -- 查询name以t开头的数据
    REGEXP 'ok$'            -- 以ok结尾
    REGEXP 'mar'            -- 包含'mar'
    REGEXP '^[aeiou]|ok$'   -- 

```

## GROUP BY查询结果分组

```sql

    SELECT * FROM t1 GROUP BY proId;         -- 按照用户所属省份分组; 只显示每组的第一个记录
    SELECT * FROM t1 GROUP BY sex;           -- 按照用户性别分组; 只显示每组的第一个记录
    SELECT * FROM t1 GROUP BY 6;             -- 按照字段位置分组; 只显示每组的第一个记录
    SELECT * FROM t1 GROUP BY sex,proId;     -- 按照多个字段分组 先按sex分组、再在各组按proId分组；只显示每组的第一个记录
    SELECT * FROM t1 WHERE id>=5 GROUP BY sex;  -- 查询编号大于等于5的记录并按照sex分组  只显示每组的第一个记录

    -- 查询id,sex,用户名详情 按性别分组; GROUP_CONCAT(字段名) 得到分组详情
    SELECT id,sex,GROUP_CONCAT(username) FROM t1 GROUP BY sex;

    -- 聚合函数
        -- COUNT(字段名)    统计记录的总数
        -- 查询id,sex,用户名详情,组中人数 按照sex分组
        SELECT id,sex,GROUP_CONCAT(username) AS users,COUNT(*) AS totalUsers FROM t1 GROUP BY sex;
        SELECT COUNT(*) AS totalUsers FROM t1;     -- 统计表中所有记录个数
        SELECT COUNT(id) AS totalUsers FROM t1;    -- 统计表中所有id个数
        SELECT COUNT(age) AS totalUsers FROM t1;   -- COUNT()不统计NULL值
        -- MAX()    统计某个字段的最大值
        -- MIN()    统计某个字段的最小值
        -- AVG()    统计某个字段的平均值
        -- SUM()    统计某个字段的和
    -- 查询:
        SELECT  id,sex,                     -- 编号,性别
                GROUP_CONCAT(username),     -- 用户名详情
                COUNT(*) AS totalUsers,     -- 组中总人数
                MAX() AS max_age,           -- 组中最大年龄
                MIN() AS min_age,           -- 最小年龄
                AVG() AS avg_age,           -- 平均年龄
                SUM() AS sum_age,           -- 年龄总和
        FROM t1
        GROUP BY sex                        -- 按照性别分组
        WITH ROLLUP;                        -- 在末尾添加一条记录    记录上面所有记录的总和、最大值、最小值等

```

## HAVING 子句

```sql

    -- 对分组结果进行二次筛选; 只能使用到分组之后 在分组之后二次筛选才有意义
    -- 查询语句
        SELECT  sex,                                    -- 性别
                GROUP_CONCAT(username) AS users,        -- 用户名详情
                COUNT(*) AS totalUsers,                 -- 组中人数
                MAX(age) AS max_age,                    -- 最大年龄
                MIN(age) AS min_age,                    -- 最小年龄
                SUM(age) AS sum_age,                    -- 年龄总和
        FROM t1
        GROUP BY sex                                    -- 按性别分组
        HAVING COUNT(*)>2 AND MAX(age)>60               -- 查询组中人数大于2且最大年龄大于60的记录
        ORDER BY age DESC,id ASC;                       -- 按年龄降序,id升序排序

```

## ORDER BY排序(对查询结果排序)

```sql

    SELECT * FROM t1 ORDER BY id ASC;               -- 按照id升序排序ASC 默认ASC
    SELECT * FROM t1 ORDER BY id DESC;              -- 按照id降序排列DESC 
    SELECT * FROM t1 ORDER BY 2 ASC;                -- 按照第二个字段升序排序ASC
    SELECT * FROM t1 ORDER BY age ASC,id DESC;      -- 按照年龄升序,id降序排列 (多个字段排序以逗号分隔)
    SELECT * FROM t1 ORDER BY RAND();               -- 随机排序

```

## LIMIT限制查询结果显示条数(实现分页)

```sql

    SELECT * FROM t1 LIMIT 3;                       -- 查询升序表中前3条记录
    SELECT * FROM t1 ORDER BY id DESC LIMIT 3;      -- 查询降序表中前3条记录
    SELECT * FROM t1 LIMIT 1;                       -- 查询表中前一条记录
    -- 偏移量,显示该页条数(UPDATE语句使用LIMIT时不能使用偏移量模式)
    -- 假设:存在分页，每页5条记录。则:
    -- LIMIT: pageSize
    -- OFFSET: pageSize * (pageIndex - 1)
    -- LIMIT <M> OFFSET <N>:    从第N条记录开始 最多查询M条数据
    SELECT * FROM t1 LIMIT 0,5;                     -- 第一页5条记录    (偏移量从0开始)
    SELECT * FROM t1 LIMIT 5 OFFSET 0;              -- 第一页5条记录    (偏移量从0开始)
    SELECT * FROM t1 LIMIT 5,5;                     -- 第二页5条记录
    SELECT * FROM t1 LIMIT 10,5;                    -- 第三页5条记录

```

## 聚合查询

```sql

    -- 使用聚合函数进行查询
    SELECT COUNT(id) FROM `tb_name`;            -- 查询表数据总条数 列名是COUNT(*)
    SELECT COUNT(*) FROM `tb_name`;             -- 查询表数据总条数 同COUNT(id)
    SELECT COUNT(*) num FROM `tb_name`;         -- 查询表数据总条数 给列名设置一个别名 列名是num

    -- GROUP_COUNT(field),
    -- COUNT(field),    计算某一列的条数                        0
    -- MAX(field),      计算某一列的最大值                      NULL
    -- MIN(field),      计算某一列的最小值                      NULL
    -- SUM(field),      计算某一列的合计值，该列必须为数值类型      NULL
    -- AVG(field),      计算某一列的平均值，该列必须为数值类型      NULL
    -- [AS]alias_name 赋予别名 -- 连接查询有字段重名时 可起别名避免重名    AS关键字可省略

```

## ============================================================

## 条件查询(执行顺序 1、2、3)

```text
    语法：
        SELECT                  // 3
            查询列表
        FROM                    // 1
            表名
        WHERE                   // 2
            比较                =、!=、<、<=、>=、>、<>、!<、!>、<=>
            指定范围             BETWEEN AND、NOT BETWEEN AND
            指定集合            IN、NOT IN
            匹配字符            LIKE、NOT LIKE
            是否为空            IS NULL、IS NOT NULL
            多个查询条件         AND、OR

    分类:
        按条件表达式筛选
            <
            >
            =
            !=
            <>
            <=
            >=
        按逻辑表达式筛选
            and     or      not
            &&      ||      !
```

## 模糊查询

```text
    LIKE
        通配符(\:默认转义)
        %:          // 匹配0个、1个、多个任意字符
        _:          // 匹配1个任意字符
    BETWEEN AND
    IN              // IN 列表中的值需统一或兼容 且不支持通配
    IS NULL         // 仅可判断NULL         =、<>不能用于判断NULL
    IS NOT NULL
    <=>             // 安全等于 可以判断NULL和普通值
```

## 排序查询

```text
    排序查询示例
    排序查询总结
    【案例讲解】排序查询
```

## 函数

```text
    单行函数
    字符函数
    数学函数
    日期函数
    其他函数
    流程控制函数-if函数
    流程控制函数-case结构
    分组函数的介绍
    分组函数的使用特点
    分组函数和distinct搭配使用
    count函数的具体介绍
    分组函数使用的其他注意事项
```

## 分组查询1

```text
    简单使用
    添加分组前筛选
    添加分组后筛选
    添加筛选的总结
    按函数分组
    按多个字段分组
    添加排序

## 连接查询

```text
    笛卡尔乘积
    连接查询的分类
    等值连接的介绍
    等值连接的示例
    非等值连接
    自连接
    sql99语法介绍
    sql99语法—等值连接
    sql99语法—非等值连接
    sql99语法—自连接
    sql99语法—左（右）外连接
    全外连接
    交叉连接
    总结连接查询
    【案例讲解】多表连接
## 子查询介绍

```text
    where后面的标量子查询使用
    where后面的列子查询使用
    where后面的行子查询使用
    select后面的子查询使用
    from后面的子查询使用
    exists后面的子查询使用
    【案例讲解】子查询
## 分页查询

```text
## 联合查询

```text
    联合查询的特点

    插入语句的方式一
    插入语句的方式二
    两种插入方式大pk
    修改单表的记录
    修改多表的记录
    删除语句的介绍
```

## 查询表中的数据

```sql
    SELECT <字段1，字段2，…> from < 表名 > where < 表达式 >
    SELECT * from <tablename>;                                 -- 查看表中所有行数据
    SELECT * from <tablename> order by id limit 0,2;           -- 查看表中前二行数据
    SELECT * from <tablename> limit 0,2;                       -- 查看表中前二行数据
```

## 查询记录

```sql
    SELECT select_expr [,select_sxpr,...]
    [
        FROM tbname
        [WHERE 条件]
        [GROUP BY {col_name|position} [ASC|DESC],...分组]   -- 分组查询
        [HAVING 条件]                                       -- 对分组结果进行二次筛选
        [ORDER BY {col_name|position} [ASC|DESC],...排序]   -- 对二次筛选结果排序
        [LIMIT 限制显示条数]
    ]
```

## WHERE 条件

```text
    1.比较
        =、<、>、<=、>=、!<、!>、<=>   WHERE age <=> NULL                                    查询年龄为NULL的记录
                                            WHERE age <=> 18                                        查询年龄为18的记录
        !=、<>  // 不等于 推荐使用 <>
    2.指定范围(范围查询)
        BETWEEN AND             WHERE id BETWEEN a AND b;                            查询[a,b]之间的记录
        NOT BETWEEN AND
    3.指定集合(范围查询)
        IN                      WHERE id IN(1,3,5,7,9,11,13,110);                    查询编号为(1,3,5,7,9,11,13,110)的记录
                                WHERE username IN('张三''李二')                       查询用户名为('张三','李二')的记录(忽略大小写)
        NOT IN
    4.匹配字符(模糊查询)
        LIKE                    WHERE username LIKE '张%';                            查询用户以'张'字符开头的记录
        NOT LIKE
        IS NULL
                                WHERE username LIKE '%张%';                            查询用户名含有'张'字符的记录(%-代表0个或多个任意字符)
                                WHERE username LIKE '%';                              查询所有的记录
                                WHERE username LIKE '___';                            查询所有用户名为三位字符的记录(_-代表1个任意字符)
                                WHERE username LIKE '_i%';                            查询用户名第二位为'i'的记录
                                WHERE username LIKE '张三';                            查询用户名为'张三'的记录

    5.是否为空
        IS NULL
        IS NOT NULL             WHERE id>=3 AND age IS NOT NULL                        查询编号大于等于3且年龄不为空的记录
                                WHERE id>=3 AND age IS NOT NULL AND tel=123            查询编号大于等于3且年龄不为空且电话为123的记录

    6.多个查询条件
        AND &&
            WHERE username='king' AND pwd="123"                    查询用户名为'king'且密码为'123'的记录
            WHERE id BETWEEN 5 AND 10 AND username LIKE '___'      查询编号在[5,10]之间且用户名为三位的记录
        OR  ||
            WHERE username LIKE '张%' OR id IN(1,5,3,9)            查询用户名以'张'开头或编号为(1,5,3,9)的记录
        NOT !
```

## DQL2

```sql
    基础查询

    条件查询
        按条件表达式筛选
            查询工资大于12000的员工信息
                SELECT * FROM employees WHERE salary > 12000;
            查询部门编号不等于90号的员工名于和部门编号
                SELECT last_name,department_id FROM employees WHERE department_id<>90;
        按逻辑表达式筛选
            查询工资在10000～20000间的员工名、工资及奖金
                SELECT last_name,salary,commission_pct FROM employees WHERE salary >= 10000 && salary <= 20000;
            查询部门编号不在90～100之间 或工资高于15000的员工信息
                SELECT * FROM employees WHERE department_id <= 90 || department_id >=100 || salary >= 15000;
                SELECT * FROM employees WHERE NOT(department_id >= 90 AND department_id <=100) || salary >= 15000;


    模糊查询
        LIKE
            #、查询员工名中包含字符a的员工信息
                SELECT * FROM employeesn WHERE last_name LIKE '%a%';
            #、查询员工名中第三个字符为e,第五个字符为a的员工名和工资
                SELECT salary,last_name FROM employees WHERE last_name LIKE '__e_a%';
            #、查询员工名中第二个字符为_的员工
                SELECT * FROM employees WHERE last_name LIKE '_\_%';                // \:默认转义
                SELECT * FROM employees WHERE last_name LIKE '_$_%' ESCAPE '$';     // $:指定转义
        BETWEEN AND [a, b]
            #、查询员工编号在100到120之间的员工信息
                SELECT * FROM employees WHERE employee_id BETWEEN 100 AND 120;
                SELECT * FROM employees WHERE employee_id>=100 100 AND employee_id <= 120;

                SELECT * FROM employees WHERE employee_id BETWEEN 120 AND 100;
                SELECT * FROM employees WHERE employee_id>=120 100 AND employee_id <= 100;
        IN
            #、查询员工的工种编号是AD_PRES、AD_VP、IT_PROG中的一个员工名和工种编号
                SELECT last_name,job_id FROM employees WHERE job_id IN ('AD_PRES', 'AD_VP', 'IT_PROG');
                SELECT last_name,job_id FROM employees WHERE job_id = 'AD_PRES' OR job_id = 'AD_VP' OR job_id = 'IT_PROG';
        IS NULL
            #、查询没有奖金的员工名和奖金率
                SELECT last_name,commission_pct FROM employees WHERE commission_pct IS NULL;
                SELECT last_name,commission_pct FROM employees WHERE commission_pct <=> NULL;
                SELECT last_name,commission_pct FROM employees WHERE commission_pct = NULL;// Error 等于号无法匹配null
            #、查询有奖金的员工名和奖金率
                SELECT last_name,commission_pct FROM employees WHERE commission_pct IS NOT NULL;
        <=> 安全等于
            #、查询没有奖金的员工名和奖金率
            SELECT last_name,commission_pct FROM employees WHERE commission_pct <=> NULL;
            #、查询工资为12000的员工
            SELECT * FROM employees WHERE salary <=> 12000;

    排序查询
    函数
    分组查询
    连接查询
    子查询介绍
    分页查询
    联合查询
```

## title

```text
    基础查询
        查询常量、表达式、函数
        起别名
        去重
        +号的作用
        使用concat实现连接
    条件查询(执行顺序 1、2、3)
        SELECT                  // 3
            查询列表
        FROM                    // 1
            表名
        WHERE                   // 2
            筛选条件
        条件运算符的使用
        逻辑运算符的使用

    模糊查询
        like关键字
        betweenand关键字
        in关键字
        isnull关键字
        【补充】安全等于的介绍
        【案例讲解】条件查询

    排序查询
        排序查询示例
        排序查询总结
        【案例讲解】排序查询

    函数
        单行函数
        字符函数
        数学函数
        日期函数
        其他函数
        流程控制函数-if函数
        流程控制函数-case结构
        分组函数的介绍
        分组函数的使用特点
        分组函数和distinct搭配使用
        count函数的具体介绍
        分组函数使用的其他注意事项

    分组查询
        简单使用
        添加分组前筛选
        添加分组后筛选
        添加筛选的总结
        按函数分组
        按多个字段分组
        添加排序

    连接查询
        笛卡尔乘积
        连接查询的分类
        等值连接的介绍
        等值连接的示例
        非等值连接
        自连接
        测试题2讲解
        复习前一天内容
        作业讲解
        sql99语法介绍
        sql99语法—等值连接
        sql99语法—非等值连接
        sql99语法—自连接
        sql99语法—左（右）外连接
        全外连接
        交叉连接
        总结连接查询
        【案例讲解】多表连接
    子查询介绍
        where后面的标量子查询使用
        where后面的列子查询使用
        where后面的行子查询使用
        select后面的子查询使用
        from后面的子查询使用
        exists后面的子查询使用
        【案例讲解】子查询
    分页查询
        测试题3讲解
        复习前一天内容
        子查询经典案例讲解
        作业讲解
    联合查询
        联合查询的特点

        插入语句的方式一
        插入语句的方式二
        两种插入方式大pk
        修改单表的记录
        修改多表的记录
        删除语句的介绍
        删除方式一
        删除方式二
        【案例讲解】数据的增删改
```

## 连接查询

```text
    将两个或两个以上的表按某种条件连接起来。可同时查询被连接的表
    当表中存在相同字段时，可通过该字段连接这几个表
```

## 内连接查询-显示两个表中符合连接条件的记录    ON 连接条件

```text
    JOIN
    CROSS JOIN
    INNER JOIN
    两张表:
    用户表t1           -id,sex,username,age,email,proId        用户表中proId字段值对应省份表id 从而获取省份值
    省份表provinces    -id,proName
    以下使用WHERE和连接查询的三种方法效果相同
        SELECT t1.id,username,proName FROM t1,provinces WHERE t1.proId=provinces.proName;        查询用户表id,username/省份表proName(两表中都存在id字段，故需使用ti.id确定是查询用户表中的id)
    查询用户表中的id,username,email,sex/省份表中的proName
        SELECT u.id,u.username,u.email,u.sex,p.proName
        FROM t1 AS u                    从用户表查询           为用户表取别名为u
        INNER JOIN provinces AS p       内连接到省份表         为省份表取别名为p
        ON u.proId=p.id;                连接条件

        SELECT u.id,u.username,u.email,u.sex,p.proName
        FROM provinces AS p             从省份表查询        为省份表取别名为p
        JOIN t1 AS u                    内连接到用户表      为用户表取别名为u
        ON u.proId=p.id;                连接条件
```

## 外链接查询

```text

    左外连接:LEFT  [OUTER] JOIN     显示左表的全部记录及右表符合连接条件的记录  不足的以NULL填充
    右外连接:RIGHT [OUTER] JOIN     显示右表的全部记录及左表符合连接条件的记录  不足的以NULL填充

        SELECT u.id,u.username,u.email,u.sex,p.proName
        FROM t1 AS u                    从用户表查询         LEFT JOIN左的为主表    先查询主表中的记录 再查询副表中符合条件的记录
        LEFT JOIN provinces AS p        左外连接到省份表
        ON u.proId=p.id;                连接条件


        SELECT u.id,u.username,u.email,u.sex,p.proName
        FROM t1 AS u                    从用户表查询
        RIGHT JOIN provinces AS p       右外连接到省份表     RIGHT JOIN右的为主表
        ON u.proId=p.id;                连接条件
```

## 外键 外键所在的表为子表

```text
    外键是子表的字段 主键是父表的字段
    先有父表再有子表
    外键依赖于主键

    外键建立了子表与父表的关联关系 可实现一对一或一对多关系
    父表中的记录被操作时，子表中与之对应的信息随之改变
    父表与子表必须使用相同的存储引擎且禁止使用临时表(仅INNODB支持外键)
    数据表的存储引擎只能为INNODB(物理外键)(逻辑外键:存储引擎不使用INNODB时 不支持外键，可使用逻辑构造外键)
    外键列和参照列必须具有相同的数据类型 数字长度及符号位必须相同
    外键列和参照列必须设置索引，不存在索引则自动创建
    外键约束的参照操作:
        RESTRICT        拒绝对父表的删除或更新操作    (默认)
        CASCADE         从父表删除或更新且自动删除或更新子表中的记录
        SET NULL        从父表删除或更新记录，并设置子表外键为NULL(使用该选项需保证子表没有指定NOT NULL)
        NO ACTION       标准SQL关键字，在MySQL中与RESTRICT相同
```

## 子查询1

```sql

-- 一个查询语句嵌套入另一个查询语句，内层查询结果作为外层查询条件
-- 1.引发子查询的情况
    -- 1.[NOT] IN
        SELECT id FROM departments;
        SELECT id,username FROM employee WHERE depId IN(1,2,3,4);
        -- 以上两行语句可由子查询合并为一句:
        SELECT id,username FROM employee WHERE depId IN(SELECT id FROM departments;);

    -- 2.[NOT] EXISTS
        SELECT * FROM department WHERE id=5;# 查询不存在的部门

        -- 若内存语句查到结果(返回真)才执行外层语句
        SELECT id,username FROM employee WHERE EXISTS(SELECT * FROM department WHERE id=5);

        -- 若内存语句查不到结果(返回假)才执行外层语句
        SELECT id,username FROM employee WHERE NOT EXISTS(SELECT * FROM department WHERE id=5);

    -- 3.ANY|SOME|ALL
    --             ANY         SOME        ALL
    -- >、>=       最小值      最小值       最大值
    -- <、<=       最大值      最大值       最小值
    -- =           任意值      任意值
    -- <>、!=                             任意值

    -- 查询所有获得奖学金的学员
    SELECT id,username,score FROM student WHERE score>=SOME(SELECT level FROM scholarship);

    -- 查询所有学员中获得一等奖学金的学员
    SELECT id,username,score FROM student WHERE score>=ALL(SELECT level FROM scholarship);

    -- 查询学员表中没有获得奖学金的学员 (小于70分)
    SELECT id,username,score FROM student WHERE score<ALL(SELECT level FROM scholarship);

    -- 查询学员表中获得奖学金的学员 (小于70分)
    SELECT id,username,score FROM student WHERE score<ANY(SELECT level FROM scholarship);

    -- 查询学员表中获得奖学金的学员
    SELECT id,username,score FROM student WHERE score<=ANY(SELECT level FROM scholarship);

    -- 查询学员表中分数等于(90、80、70)的学员
    SELECT id,username,score FROM student WHERE score IN(SELECT level FROM scholarship);

    -- (相当于IN的效果)
    SELECT id,username,score FROM student WHERE score=ANY(SELECT level FROM scholarship);

    -- (查询学员表中分数不等于(90、80、70)的学员
    SELECT id,username,score FROM student WHERE score NOT IN(SELECT level FROM scholarship);

    -- (查询学员表中分数等于(90、80、70)的学员
    SELECT id,username,score FROM student WHERE score<> ALL(SELECT level FROM scholarship);


    -- 4.比较运算符:
        -- 创建学院表student-id,username,score  
        CREATE TABLE IF NOT EXISTS student(
            id TINYINT KEY UNSIGNED AUTO_INCREMENT,
            username VARCHAR(20) NOT NULL UNIQUE,
            score TINYINT UNSIGNED
        );
        INSERT student (username,score) VALUE ('张三1',1),('张三2',2),('张三3',3),('张三4',4);
        -- 创建奖学金表scholarship-id,level
        CREATE TABLE scholarship (
            id TINYINT UNSIGNED AUTO_INCREMENT KEY,
            level TINYINT UNSIGNED,
        );
        INSERT scholarship (level) VALUE (90),(80),(70);

        -- 查询获得1等奖学金的学员
        SELECT level FROM scholarship WHERE id=1;
        SELECT id,username FROM student WHERE score>=90;
        -- 将以上两行语句合并
        SELECT id,username FROM student WHERE score>=(SELECT level FROM scholarship WHERE id=1);


```

## MySQL存储引擎

```sql

-- 查看存储引擎(表的类型)。数据库的存储类型决定了表在计算机中的存储方式。
    SHOW ENGINES                         -- 查看MySQL支持的存储引擎
    SHOW VARIABLES LIKE 'have%'          -- 查看支持的存储引擎信息
    SHOW VARIABLES LIKE 'storage_engine' -- 查看默认的存储引擎

-- 修改MySQL命令提示符 prompt
    PROMPT set to
    \D-完整的日期
    \d-当前数据库
    \h-服务器名称
    \u-当前用户名

```
