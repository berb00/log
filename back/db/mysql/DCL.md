# DCL

[TOC]

## database

```sql

    CREATE DATABASE `blog`;
    USE `blog`;

    -- 创建数据库
    CREATE {DATABASE|SCHEMA}[IF NOT EXISTS] db_name [[DEFAULT] CHARACTER SET [=] charset_name];

```

## table

```sql

DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `created_at` datetime DEFAULT NULL,
    `is_finish` tinyint(1) DEFAULT NULL,
    `chunk_total` bigint(20) DEFAULT NULL,
    `title` varchar(200) DEFAULT '',
    `content` varchar(500) DEFAULT '',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='文章表';

LOCK TABLES `article` WRITE;
INSERT INTO `article` VALUES (1,'aaaa','AAAAAAA');
UNLOCK TABLES;


```
