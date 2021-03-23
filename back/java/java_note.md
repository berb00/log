# java note

## tips

```text
    * 理解java的加载与执行
    * 搭建Java开发环境
    * 编写HelloWorld，编译运行
    * 掌握环境变量path的原理及配置
    * 掌握环境变量原理及配置
    * public class 与 class 的区别

```

## Java知识点

```text
基础
    基础知识
    基本语法
    基本数据类型
        装箱拆箱
    修饰符
    方法
    集合
    异常
    多线程
    I/O
    异常处理
    反射(Reflection)
    注解
    泛型
    日期与时间
面向对象
    继承
    重写(Override)与重载(Overload)
    多态
    抽象类
    封装
    接口
    包(package)

高级教程
    数据结构
    泛型
    序列化
    网络编程
    发送邮件
    多线程编程
    Applet基础
    文档注释
    单元测试
    正则表达式
    加密与安全
    多线程
    Maven基础
    网络编程
    XML与JSON
    JDBC编程
    函数式编程
    设计模式
    Web开发
    Spring开发
    Spring Boot开发
    Spring Cloud开发


Java快速入门
面向对象编程
异常处理
反射
注解
泛型
集合
IO
日期与时间
单元测试
正则表达式
加密与安全
多线程
Maven基础
网络编程
XML与JSON
JDBC编程
函数式编程





教程
教程
简介
开发环境配置
基础语法
对象和类
基本数据类型
变量类型
修饰符
运算符
循环结构
条件语句
switch case
Number & Math 类
Character 类
String 类
StringBuffer
数组
日期时间
正则表达式
方法
Stream、File、IO
Scanner 类
异常处理




#、多态
    方式一：重写
    方式二：接口
        1. 生活中的接口最具代表性的就是插座，例如一个三接头的插头都能接在三孔插座中，因为这个是每个国家都有各自规定的接口规则，有可能到国外就不行，那是因为国外自己定义的接口类型。
        2. java中的接口类似于生活中的接口，就是一些方法特征的集合，但没有方法的实现。
    方式三：抽象类和抽象方法


#、方法重载overload构成条件
    1、在同一个类中
    2、方法名相同
    3、参数列表不同(数量、顺序、类型)



```

## Java快速入门

```text
面向对象编程
异常处理
反射
注解
泛型
集合
IO
日期与时间
单元测试
正则表达式
加密与安全
多线程
Maven基础
网络编程
XML与JSON
JDBC编程
函数式编程
设计模式
Web开发
Spring开发
Spring Boot开发
Spring Cloud开发

```

## 常用包、接口、类

```text
    常用的类：
        BufferedReader
        BufferedWriter
        FileReader
        FileWirter
        String
        Integer
        Date
        Class
        HashMap
        Object
        Runtime
        file
        Long
        Thread


    常用的包：
        java.lang
        java.io
        java.util
        java.sql
        java.swt
        java.math
        javax.servlet
        org.apache.struts.action
        org.hibernate


    常用的接口：
        List
        Map
        Document
        NodeList
        Servlet
        HttpServletResponse
        Session
        Transaction
        HttpSession
        Iterator
        Comparable
        Clone
        Serializable
        Runnable



    #、内存空间
        Stack:
            存放方法实参、方法中的局部变量
            作用域:一旦超出作用域，立刻从栈内存中消失
            方法的运行一定在栈中
        Heap:
            凡是new 出来的东西,都在堆当中
            堆内存中的数据都有一个十六进制的地址
            堆内存内的数据都有默认值:
                int         0
                float       0.0
                char        '\u0000'
                bool        false
                引用类型     null
        Method Area(方法区):
            存储.class相关信息,包含方法的信息
        Native Method Stack(本地方法栈):
            与操作系统相关
        PC Register(寄存器):
            与CPU相关




    #、java注解
        @Deprecated         // 已弃用
        @Override           // 覆写


    #、frequently word
        POJO(Plain Ordinary Java Object) 简单的Java对象，实际就是普通JavaBeans
        POJO 是 DO / DTO / BO / VO 的统称.
        DO(Data Object)                 此对象与数据库表结构一一对应,通过 DAO 层向上传输数据源对象。
        DTO(Data Transfer Object)       数据传输对象, Service 或 Manager 向外传输的对象。
        BO(Business Object)             业务对象,由 Service 层输出的封装业务逻辑的对象。
        VO(View Object)                 显示层对象,通常是 Web 向模板渲染引擎层传输的对象。
        AO (Application Object)         应用对象,在 Web 层与 Service 层之间抽象的复用对象模型,极为贴近展示层,复用度不高。


    #、tips
        protected:  类成员方法只对继承类公开

    #、public class 与 class 的区别:
        一个java源文件中可以定义多个class
        一个class编译后对应为一个字节码文件
        一个java源文件中public class 可以有 0个或1个   且该文件的文件名需与public class 名相同
        每一个class中都可以编写main方法 都可以设定程序的入口  java xxx.class  即执行该类的主方法
```

## Java learn path

```text
    #、Java基础
        基础语法
        面向对像
        集合
        IO
        线程/并发
        异常
        网络编程
    #、数据库
        MySQL
        Oracle
        JDBC
        C3P0
        Druid
    #、Java编程强化
        设计模式
        JVM调优
        数据结构/算法
        多线程高级
        MINA
        Netty
        NIO
    #、软件项目管理
        Maven
        Git
        码云
        Jenkins
        Sonar
    #、框架
        SpringMVC
        MyBatis
        Mybatis Plus
        JPA
        Spring Data
        Spring
    #、分布式架构
        Dubbo
        Zookeeper
        SpringBoot
        SpringCloud
        Eureka
        Consul
        Hystrix
        Zuul
        Gateway
        Skywalking
        Pinpoint
    #、服务器中间件
        RabbitMQ
        RocketMQ
        Kafka
        JMS
        Sharding-JDBC
        MyCat
        Redis
        Neo4j
        MongoDB
    #、服务器技术
        Tomcat
        Jetty
        Nginx
        Linux
    #、容器技术
        Docker
        Kubernetes
    #、企业业务解决方案
        Elasticsearch
        Kibana
        Logstash
        Beats
        JCL
        LOG4J
        Logback
        SLF4J
        Lucene
        Solr
        D3
        EChart
        AntV
        JasperReport
        POI
        Quartz
        Elastic-Job
        FreeMarker
        Thymeleaf
        Shiro
        Spring Security
        Activiti
        微信/支付宝支付
        百度/高德地图
    #、项目类型:
        博客项目
        OA办公系统
        交友项目
        在线商城
        电商综合平台
        采购管理系统
        营销管理系统
```
