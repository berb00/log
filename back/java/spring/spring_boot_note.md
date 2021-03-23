# spring boot note

## 持久层技术

```text
    JDBC



```

## key words

```text
VO

value object：值对象
通常用于业务层之间的数据传递，由new创建，由GC回收。

PO
persistant object：持久层对象
对应数据库中表的字段。
VO和PO，都是属性加上属性的get和set方法；表面看没什么不同，但代表的含义是完全不同的。

DTO
data transfer object：数据传输对象。
表里面有十几个字段：id,name,gender(M/F),age,conmpanyId(如001)...
页面需要展示四个字段：name,gender(男/女),age,conmpanyName(如今日头条股份有限公司)。
DTO由此产生，一是能提高数据传输的速度（减少了传输字段），二能隐藏后端表结构。

BO
business object：业务对象
BO把业务逻辑封装为一个对象。
我理解是PO的组合，比如投保人是一个PO，被保险人是一个PO，险种信息是一个PO等等，他们组合起来是第一张保单的BO。

POJO
plain ordinary java object：简单无规则java对象
纯的传统意义的java对象，最基本的Java Bean只有属性加上属性的get和set方法。
可以转化为PO、DTO、VO；比如POJO在传输过程中就是DTO。

DAO
data access object：数据访问对象
主要用来封装对数据的访问，注意，是对数据的访问，不是对数据库的访问。

```

## tips

```text

pom.xml     // 依赖配置文件


#、打jar包
    程序调试完成后
    点击打开IDEA最右边菜单栏maven --> Lifecycle --> package
    在target目录生成jar包

#、启动jar包
    java -jar packagename.jar



bottom-btn
$('#complaint_info').css('marginBottom', '62px');

```
