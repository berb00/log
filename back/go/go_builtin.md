# go builtin

## buildin

```text

godoc -http=:6060

archive                //
    tar                //   实现了tar格式压缩文件的存取.
    zip                //   提供了zip档案文件的读写服务.
bufio                  //   通过对 io 包的封装，提供了数据缓冲功能，能够一定程度减少大块数据读写带来的开销。
builtin                //   为Go的预声明标识符提供了文档.
bytes                  //   实现了操作[]byte的常用函数。本包的函数和strings包的函数相当类似。
                            提供了对字节切片进行读写操作的一系列函数。字节切片处理的函数比较多，
                            分为基本处理函数、比较函数、后缀检查函数、索引函数、分割函数、大小写处理函数和子切片处理函数等。
compress               //
    bzip2              //   实现bzip2的解压缩
    flate              //   实现了deflate压缩数据格式，参见RFC 1951。gzip包和zlib包实现了对基于deflate的文件格式的访问
    gzip               //   实现了gzip格式压缩文件的读写
    lzw                //   实现了用于GIF、TIFF、PDF文件的lzw压缩格式，这是一种最长达到12位的变长码，头两个非字面码为clear和EOF码。
    zlib               //   实现了对zlib格式压缩数据的读写,提供了在读取时解压和写入时压缩的滤镜
container              //
    heap               //   提供了对任意类型（实现了heap.Interface接口）的堆操作。
                            （最小）堆是具有“每个节点都是以其为根的子树中最小值”属性的树。
                            树的最小元素为其根元素，索引0的位置。
    list               //   实现了双向链表
    ring               //   实现了环形链表的操作
context                //
crypto                 //   收集常用密码/算法常量
    aes                //   实现了AES加密算法
    cipher             //   实现了多个标准的用于包装底层块加密算法的加密算法实现
    des                //   实现了DES标准和TDEA算法
    dsa                //   实现FIPS 186-3定义的数字签名算法（Digital Signature Algorithm），即DSA算法。
    ecdsa              //   实现了椭圆曲线数字签名算法
    ed25519            //
    elliptic           //   实现了几条覆盖素数有限域的标准椭圆曲线
    hmac               //   实现了HMAC（加密哈希信息认证码）。HMAC是使用key标记信息的加密hash。接收者使用相同的key逆运算来认证hash。
    md5                //   实现了在 RFC 1321 中定义的 MD5 哈希算法.
    rand               //   实现了用于加解密的更安全的随机数生成器
    rc4                //   实现了RC4加密算法
    rsa                //   实现了PKCS#1规定的RSA加密算法
    sha1               //   实现了SHA1哈希算法
    sha256             //   实现了SHA224和SHA256哈希算法
    sha512             //   实现了SHA384和SHA512哈希算法
    subtle             //
    tls                //   实现了TLS 1.2
    x509               //   解析X.509编码的证书和密钥
        pkix           //   提供了共享的、低层次的结构体，用于ASN.1解析和X.509证书、CRL、OCSP的序列化
database               //
    sql                //   提供了通用的SQL（或类SQL）数据库接口.提供了保证SQL或类SQL数据库的泛用接口。使用sql包时必须注入（至少）一个数据库驱动
        driver         //   定义了应被数据库驱动实现的接口，这些接口会被sql包使用。绝大多数代码应使用sql包。
debug                  //
    dwarf              //
    elf                //
    gosym              //
    macho              //
    pe                 //
    plan9obj           //
encoding               //   定义了供其它包使用的可以将数据在字节水平和文本表示之间转换的接口。
                            encoding/gob、encoding/json、encoding/xml三个包都会检查使用这些接口。
    ascii85            //   实现了ascii85数据编码（5个ascii字符表示4个字节）,该编码用于btoa工具和Adobe的PostScript语言和PDF文档格式
    asn1               //   实现了DER编码的ASN.1数据结构的解析
    base32             //   实现了RFC 4648规定的base32编码
    base64             //   实现了RFC 4648规定的base64编码
    binary             //   实现了简单的数字与字节序列的转换以及变长值的编解码
    csv                //   读写逗号分隔值（csv）的文件
    gob                //   管理gob流——在编码器（发送器）和解码器（接受器）之间交换的binary值。
                            一般用于传递远端程序调用（RPC）的参数和结果，如net/rpc包就有提供。
    hex                //   实现了16进制字符表示的编解码
    json               //   实现了json对象的编解码
    pem                //   实现了PEM数据编码（源自保密增强邮件协议）。目前PEM编码主要用于TLS密钥和证书
    xml                //
errors                 //   实现了用于错误处理(创建错误值)的函数
expvar                 //   提供了公共变量的标准接口，如服务的操作计数器。本包通过HTTP在/debug/vars位置以JSON格式导出了这些变量。
flag                   //   实现命令行标签解析.提供命令行参数的规则定义和传入参数解析的功能。绝大部分的命令行程序都需要用到这个包。
fmt                    //   实现了格式化I/O函数，类似于C的 printf 和 scanf.
go                     //
    ast                //
    build              //
    constant           //
    doc                //   从Go的AST提取源码文档
    format             //
    importer           //
    parser             //
    printer            //
    scanner            //
    token              //
    types              //
hash                   //   提供hash函数的接口
    adler32            //   实现了Adler-32校验和算法
    crc32              //   实现了32位循环冗余校验（CRC-32）的校验和算法
    crc64              //
    fnv                //   实现了FNV-1和FNV-1a（非加密hash函数）
    maphash            //
html                   //   提供了用于转义和解转义HTML文本的函数
    template           //   template包（html/template）实现了数据驱动的模板，用于生成可对抗代码注入的安全HTML输出。
                            本包提供了和text/template包相同的接口，无论何时当输出是HTML的时候都应使用本包。
image                  //   实现了基本的二维图像库;基本接口叫作Image
    color              //   实现了基本的颜色库
        palette        //   提供了标准的调色板
    draw               //   提供组装图片的方法(图像合成函数)
    gif                //   实现了GIF图片的编码器和解码器
    jpeg               //   实现了jpeg格式图像的编解码  JPEG格式参见: http://www.w3.org/Graphics/JPEG/itu-t81.pdf
    png                //   实现了PNG图像的编码和解码   PNG格式参见：http://www.w3.org/TR/PNG/
index                  //
    suffixarray        //   通过使用内存中的后缀树实现了对数级时间消耗的子字符串搜索
io                     //   提供了原始的 I/O 操作界面; 为I/O原语提供了基础的接口;本包的基本任务是包装这些原语已有的实现（如os包里的原语），
                            使之成为共享的公共接口，这些公共接口抽象出了泛用的函数并附加了一些相关的原语的操作
    ioutil             //   实现了一些I/O的工具函数
log                    //   主要用于在程序中输出日志;实现了简单的日志服务。本包定义了Logger类型，该类型提供了一些格式化输出的方法。
    syslog             //   提供一个简单的系统日志服务的接口
math                   //   提供了基本常数和数学函数
    big                //   实现了大数高精度运算
    bits               //
    cmplx              //   为复数提供了基本的常量和数学函数
    rand               //   实现了伪随机数生成器
mime                   //   实现了MIME的部分规定
    multipart          //   实现了MIME的multipart解析，该实现适用于HTTP（RFC 2388）和常见浏览器生成的multipart主体
    quotedprintable    //
net                    //   提供了可移植的网络I/O接口，包括TCP/IP、UDP、域名解析和Unix域socket
    http               //   http包提供了HTTP客户端和服务端的实现
        cgi            //   实现了RFC3875协议描述的CGI(Common Gateway Interface 公共网关接口)
        cookiejar      //   实现了保管在内存中的符合RFC 6265标准的http.CookieJar接口
        fcgi           //   实现了FastCGI协议;目前只支持响应器的角色
        httptest       //   提供HTTP测试的单元工具
        httptrace      //   提供了跟踪HTTP客户端请求中事件的机制
        httputil       //   提供了HTTP公用函数，是对net/http包的更常见函数的补充
        pprof          //   通过它的HTTP服务端提供pprof可视化工具期望格式的运行时剖面文件数据服务
    mail               //   实现了解析邮件消息的功能
    rpc                //   提供了一个方法来通过网络或者其他的I/O连接进入对象的外部方法;提供了通过网络或其他I/O连接对一个对象的导出方法的访问
        jsonrpc        //   使用了rpc的包实现了一个JSON-RPC的客户端解码器和服务端的解码器
    smtp               //   实现了简单邮件传输协议(SMTP)
    textproto          //   实现了对基于文本的请求/回复协议的一般性支持，包括HTTP、NNTP和SMTP
    url                //   解析URL并实现了查询的逸码
os                     //   提供了不依赖平台的操作系统函数接口;
                            设计为Unix风格的，虽然错误处理是go风格的；失败的调用会返回错误值而非错误码。通常错误值里包含更多信息。
    exec               //   执行外部命令。它包装了os.StartProcess函数以便更容易的修正输入和输出，使用管道连接I/O，以及作其它的一些调整。
    signal             //   实现了对输入信号的访问
    user               //   允许通过名称或ID查询用户帐户
path                   //   实现了对斜杠分隔的路径的实用操作函数
    filepath           //   实现了兼容各操作系统的文件路径的实用操作函数
plugin                 //   实现Go插件的加载和符号解析
reflect                //   实现了运行时反射，允许程序操作任意类型的对象。典型用法是用静态类型interface{}保存一个值，
                            通过调用TypeOf获取其动态类型信息，该函数返回一个Type类型值。
regexp                 //   实现了正则表达式搜索。正则表达式采用RE2语法（除了\c、\C），和Perl、Python等语言的正则基本一致。
    syntax             //
runtime                //   TODO(osc): 需更新 runtime 包含与Go的运行时系统进行交互的操作，例如用于控制Go程的函数.
                            提供和go运行时环境的互操作，如控制go程的函数。它也包括用于reflect包的低层次类型信息；
                            参见reflect报的文档获取运行时类型系统的可编程接口。
    cgo                //   含有 cgo 工具生成的代码的运行时支持
    debug              //   含有程序在运行时调试其自身的功能;
    msan               //
    pprof              //   通过提供HTTP服务返回runtime的统计数据，这个数据是以pprof可视化工具规定的返回格式返回的
    race               //   实现了数据竞争检测逻辑;没有提供公共接口
    trace              //
sort                   //   提供了用于对切片和用户定义的集合进行排序的功能
strconv                //   提供了将字符串转换成基本数据类型，或者从基本数据类型转换为字符串的功能。
strings                //   主要是处理字符串的一些函数集合，包括合并、查找、分割、比较、后缀检查、索引、大小写处理等等。
sync                   //   实现多线程中锁机制以及其他同步互斥机制。提供了互斥锁这类的基本的同步原语
    atomic             //   提供了底层的原子性内存原语，这对于同步算法的实现很有用
syscall                //
    js                 //
testing                //   提供对 Go 包的自动化测试的支持
    iotest             //   实现了主要用于测试的读取器和编写器
    quick              //   实现实用程序功能，以帮助进行黑盒测试
text                   //
    scanner            //   供对utf-8文本的token扫描服务。它会从一个io.Reader获取utf-8文本，通过对Scan方法的重复调用获取一个个token
    tabwriter          //   实现了写入过滤器（tabwriter.Writer），可以将输入的缩进修正为正确的对齐文本
    template           //   实现了数据驱动的用于生成文本输出的模板
        parse          //   为由text/template和html/template定义的模板构建解析树
time                   //   提供了对时间的显示和操作的方法。日历的计算采用的是公历
    tzdata             //
unicode                //   提供了一些测试Unicode码点属性的数据和函数
    utf16              //   实现了对UTF-16序列的编码和解码
    utf8               //   实现了支持UTF-8文本编码的函数和常量;实现了对utf-8文本的常用函数和常数的支持，包括rune和utf-8编码byte序列之间互相翻译的函数
unsafe                 //   含有关于Go程序类型安全的所有操作;提供了一些跳过go语言类型安全限制的操作

```
