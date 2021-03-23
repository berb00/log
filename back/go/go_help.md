# go help

## commands

### go run

```text
    go run          编译并运行

```

### go build

```text
    go build        编译命令
    go build -o newname             // 指定生成可执行文件名

```

### go get

```text
    go get pkgname                  下载本地不存在的代码包，而不会更新已有的代码包。
    go get -u pkgname               更新已有代码包及其依赖包
    go get -x pkgname               打印安装的具体过程
    go get -d pkgname               让命令程序只执行下载动作，而不执行安装动作。

    go get -u pkgname
        让命令利用网络来更新已有代码包及其依赖包。
        默认情况下，该命令只会从网络上下载本地不存在的代码包，而不会更新已有的代码包。

    go get -f pkgname
        仅在使用-u标记时才有效。该标记会让命令程序忽略掉对已下载代码包的导入路径的检查。
        如果下载并安装的代码包所属的项目是你从别人那里Fork过来的，那么这样做就尤为重要了。

    go get -fix      pkgname    让命令程序在下载代码包后先执行修正动作，而后再进行编译和安装。
    go get -t        pkgname    让命令程序同时下载并安装指定的代码包中的测试源码文件中依赖的代码包。

    go get -insecure pkgname
        允许命令程序使用非安全的scheme（如HTTP）去下载指定的代码包。
        如果你用的代码仓库（如公司内部的Gitlab）没有HTTPS支持，可以添加此标记。请在确定安全的情况下使用它。

    go get          一键获取代码、编译并安装

```

### go install

```sh


    # go install 是建立在 GOPATH 上的，无法在独立的目录里使用 go install。
    # GOPATH 下的 bin 目录放置的是使用 go install 生成的可执行文件，可执行文件的名称来自于编译时的包名。
    # go install 输出目录始终为 GOPATH 下的 bin 目录，无法使用-o附加参数进行自定义。
    # GOPATH 下的 pkg 目录放置的是编译期间的中间包文件。

    # 编译并安装
    # 第一步: 编译代码
    # 第二步: 将生成的可执行文件拷贝到 GOPATH/bin目录(可以在终端直接执行)
    go install


```

### go fix

```text

```

### go list

```text
    go list             在go.mod目录下执行该命令 列出包依赖
```

### go mod

```textd
    go mod download    download modules to local cache
    go mod edit        edit go.mod from tools or scripts
    go mod graph       print module requirement graph               打印模块依赖图
    go mod init        initialize new module in current directory   go mod init modulename
    go mod tidy        add missing and remove unused modules
    go mod vendor      make vendored copy of dependencies           将依赖复制到本项目verndor下
    go mod verify      依赖校验。检查三方库有没有本地修改 修改返回非0 否则验证成功
    go mod why         explain why packages or modules are needed

```

### go clean

```text
    go clean                    // 清除编译文件
    go clean -i                 // 清除关联的安装的包和可运行文件，也就是通过go install安装的文件；
    go clean -n                 // 把需要执行的清除命令打印出来，但是不执行，这样就可以很容易的知道底层是如何运行的；
    go clean -r                 // 循环的清除在 import 中引入的包；
    go clean -x                 // 打印出来执行的详细命令，其实就是 -n 打印的执行版本；
    go clean -cache             // 删除所有go build命令的缓存
    go clean -testcache         // 删除当前包所有的测试结果

```

### go fmt

```text
    go fmt                      // 格式化代码文件

```

### go doc

```text

    go doc <pkg>
    go doc <sym>[.<methodOrField>]
    go doc [<pkg>.]<sym>[.<methodOrField>]
    go doc [<pkg>.][<sym>.]<methodOrField>

    go doc
            Show documentation for current package.
    go doc Foo
            Show documentation for Foo in the current package.
            (Foo starts with a capital letter so it cannot match
            a package path.)
    go doc encoding/json
            Show documentation for the encoding/json package.
    go doc json
            Shorthand for encoding/json.
    go doc json.Number (or go doc json.number)
            Show documentation and method summary for json.Number.
    go doc json.Number.Int64 (or go doc json.number.int64)
            Show documentation for json.Number's Int64 method.
    go doc cmd/doc
            Show package docs for the doc command.
    go doc -cmd cmd/doc
            Show package docs and exported symbols within the doc command.
    go doc template.new
            Show documentation for html/template's New function.
            (html/template is lexically before text/template)
    go doc text/template.new # One argument
            Show documentation for text/template's New function.
    go doc text/template new # Two arguments
            Show documentation for text/template's New function.

    At least in the current tree, these invocations all print the
    documentation for json.Decoder's Decode method:

    go doc json.Decoder.Decode
    go doc json.decoder.decode
    go doc json.decode

```

### go env

```sh
    go env                      # 输出所有go环境变量(以shellscript形式)
    go env GOROOT               # 输出某个go环境变量
    go env -json                # 输出所有go环境变量(以json形式)
    go env -u GOROOT            # 重置(初始化)某个环境变量
    go env -w GOROOT=""         # 修改go变量

```

### go version

```sh

    go version      # go version go1.15.5 darwin/amd64

```

### go test

```sh
    # 自动读取源码目录下面名为 *_test.go 的文件，生成并运行测试用的可执行文件

    go test                     # 测试命令

```

### go bug

```sh
    go bug
```

### go vet

```sh

    # vet可以用来检查 go 代码中可以通过编译但仍然有可能存在错误的代码
    # 如无法访问的代码、错误的锁使用、不必要的赋值、布尔运算错误等。
    # go vet <directory|files|packages>
    go vet package/path/name            # 检查包
    go tool vet source/directory/*.go   # 检查文件
    go tool vet source/directory        # 检查目录
    go vet -printf=false main.go        # 禁用某个诊断器
    go vet -printf=true main.go         # 使用特定诊断器
    go vet -c=2 main.go                 # 输出错误代码行的上下相邻2行源代码
    go vet -json main.go                # 将错误报告以json形式输出


    # vet的代码分析是由多个子诊断器组成的，目前包含22个（基于go 1.14.1
    # 1asmdecl      report mismatches between assembly files and Go declarations
    # 2assign       check for useless assignments
    # 3atomic       check for common mistakes using the sync/atomic package
    # 4bools        check for common mistakes involving boolean operators
    # 5buildtag     check that +build tags are well-formed and correctly located
    # 6cgocall      detect some violations of the cgo pointer passing rules
    # 7composites   check for unkeyed composite literals
    # 8copylocks    check for locks erroneously passed by value
    # 9errorsas     report passing non-pointer or non-error values to errors.As
    # 10httpresponse check for mistakes using HTTP responses
    # 11loopclosure  check references to loop variables from within nested functions
    # 12lostcancel   check cancel func returned by context.WithCancel is called
    # 13nilfunc      check for useless comparisons between functions and nil
    # 14printf       check consistency of Printf format strings and arguments
    # 15shift        check for shifts that equal or exceed the width of the integer
    # 16stdmethods   check signature of methods of well-known interfaces
    # 17structtag    check that struct field tags conform to reflect.StructTag.Get
    # 18tests        check for common mistaken usages of tests and examples
    # 19unmarshal    report passing non-pointer or non-interface values to unmarshal
    # 20unreachable  check for unreachable code
    # 21unsafeptr    check for invalid conversions of uintptr to unsafe.Pointer
    # 22unusedresult check for unused results of calls to some functions
```

### go generate

```sh

:<<EOF
使用go generate命令时有以下几点需要注意：
    该特殊注释必须在 .go 源码文件中；
    每个源码文件可以包含多个 generate 特殊注释；
    运行go generate命令时，才会执行特殊注释后面的命令；
    当go generate命令执行出错时，将终止程序的运行；
    特殊注释必须以//go:generate开头，双斜线后面没有空格。


在下面这些场景下，我们会使用go generate命令：
    yacc：从 .y 文件生成 .go 文件；
    protobufs：从 protocol buffer 定义文件（.proto）生成 .pb.go 文件；
    Unicode：从 UnicodeData.txt 生成 Unicode 表；
    HTML：将 HTML 文件嵌入到 go 源码；
    bindata：将形如 JPEG 这样的文件转成 go 代码中的字节数组。

go generate [-run regexp] [-n] [-v] [-x] [command] [build flags] [file.go... | packages]
参数说明：
    -run 正则表达式匹配命令行，仅执行匹配的命令；
    -v 输出被处理的包名和源文件名；
    -n 显示不执行命令；
    -x 显示并执行命令；
    command 可以是在环境变量 PATH 中的任何命令。

EOF

    go generate                 # 在编译前自动化生成某类代码

```

### go tool

```text

```

## go help: commands

```text

Go is a tool for managing Go source code.

    go <command> [arguments]

    run         compile and run Go program
    build       compile packages and dependencies

    get         add dependencies to current module and install them
    install     compile and install packages and dependencies
    fix         update packages to use new APIs
    list        list packages or modules
    mod         module maintenance

    clean       remove object files and cached files
    fmt         gofmt (reformat) package sources

    doc         show documentation for package or symbol
    env         print Go environment information
    version     print Go version

    test        test packages
    bug         start a bug report
    vet         report likely mistakes in packages

    generate    generate Go files by processing source
    tool        run specified go tool


Use "go help <command>" for more information about a command.
```

## go help: Additional help topics

```text
    buildmode       build modes
    c               calling between Go and C
    cache           build and test caching
    environment     environment variables
    filetype        file types
    go.mod          the go.mod file
    gopath          GOPATH environment variable
    gopath-get      legacy GOPATH go get
    goproxy         module proxy protocol
    importpath      import path syntax
    modules         modules, module versions, and more
    module-get      module-aware go get
    module-auth     module authentication using go.sum
    module-private  module configuration for non-public modules
    packages        package lists and patterns
    testflag        testing flags
    testfunc        testing functions

Use "go help <topic>" for more information about that topic.

```

## go help environment

```text

The go command and the tools it invokes consult environment variables
for configuration. If an environment variable is unset, the go command
uses a sensible default setting. To see the effective setting of the
variable <NAME>, run 'go env <NAME>'. To change the default setting,
run 'go env -w <NAME>=<VALUE>'. Defaults changed using 'go env -w'
are recorded in a Go environment configuration file stored in the
per-user configuration directory, as reported by os.UserConfigDir.
The location of the configuration file can be changed by setting
the environment variable GOENV, and 'go env GOENV' prints the
effective location, but 'go env -w' cannot change the default location.
See 'go help env' for details.

General-purpose environment variables:

        GCCGO
                The gccgo command to run for 'go build -compiler=gccgo'.
        GOARCH
                The architecture, or processor, for which to compile code.
                Examples are amd64, 386, arm, ppc64.
        GOBIN
                The directory where 'go install' will install a command.
        GOCACHE
                The directory where the go command will store cached
                information for reuse in future builds.
        GOMODCACHE
                The directory where the go command will store downloaded modules.
        GODEBUG
                Enable various debugging facilities. See 'go doc runtime'
                for details.
        GOENV
                The location of the Go environment configuration file.
                Cannot be set using 'go env -w'.
        GOFLAGS
                A space-separated list of -flag=value settings to apply
                to go commands by default, when the given flag is known by
                the current command. Each entry must be a standalone flag.
                Because the entries are space-separated, flag values must
                not contain spaces. Flags listed on the command line
                are applied after this list and therefore override it.
        GOINSECURE
                Comma-separated list of glob patterns (in the syntax of Go's path.Match)
                of module path prefixes that should always be fetched in an insecure
                manner. Only applies to dependencies that are being fetched directly.
                Unlike the -insecure flag on 'go get', GOINSECURE does not disable
                checksum database validation. GOPRIVATE or GONOSUMDB may be used
                to achieve that.
        GOOS
                The operating system for which to compile code.
                Examples are linux, darwin, windows, netbsd.
        GOPATH
                For more details see: 'go help gopath'.
        GOPROXY
                URL of Go module proxy. See 'go help modules'.
        GOPRIVATE, GONOPROXY, GONOSUMDB
                Comma-separated list of glob patterns (in the syntax of Go's path.Match)
                of module path prefixes that should always be fetched directly
                or that should not be compared against the checksum database.
                See 'go help module-private'.
        GOROOT
                The root of the go tree.
        GOSUMDB
                The name of checksum database to use and optionally its public key and
                URL. See 'go help module-auth'.
        GOTMPDIR
                The directory where the go command will write
                temporary source files, packages, and binaries.

Environment variables for use with cgo:

        AR
                The command to use to manipulate library archives when
                building with the gccgo compiler.
                The default is 'ar'.
        CC
                The command to use to compile C code.
        CGO_ENABLED
                Whether the cgo command is supported. Either 0 or 1.
        CGO_CFLAGS
                Flags that cgo will pass to the compiler when compiling
                C code.
        CGO_CFLAGS_ALLOW
                A regular expression specifying additional flags to allow
                to appear in #cgo CFLAGS source code directives.
                Does not apply to the CGO_CFLAGS environment variable.
        CGO_CFLAGS_DISALLOW
                A regular expression specifying flags that must be disallowed
                from appearing in #cgo CFLAGS source code directives.
                Does not apply to the CGO_CFLAGS environment variable.
        CGO_CPPFLAGS, CGO_CPPFLAGS_ALLOW, CGO_CPPFLAGS_DISALLOW
                Like CGO_CFLAGS, CGO_CFLAGS_ALLOW, and CGO_CFLAGS_DISALLOW,
                but for the C preprocessor.
        CGO_CXXFLAGS, CGO_CXXFLAGS_ALLOW, CGO_CXXFLAGS_DISALLOW
                Like CGO_CFLAGS, CGO_CFLAGS_ALLOW, and CGO_CFLAGS_DISALLOW,
                but for the C++ compiler.
        CGO_FFLAGS, CGO_FFLAGS_ALLOW, CGO_FFLAGS_DISALLOW
                Like CGO_CFLAGS, CGO_CFLAGS_ALLOW, and CGO_CFLAGS_DISALLOW,
                but for the Fortran compiler.
        CGO_LDFLAGS, CGO_LDFLAGS_ALLOW, CGO_LDFLAGS_DISALLOW
                Like CGO_CFLAGS, CGO_CFLAGS_ALLOW, and CGO_CFLAGS_DISALLOW,
                but for the linker.
        CXX
                The command to use to compile C++ code.
        FC
                The command to use to compile Fortran code.
        PKG_CONFIG
                Path to pkg-config tool.

Architecture-specific environment variables:

        GOARM
                For GOARCH=arm, the ARM architecture for which to compile.
                Valid values are 5, 6, 7.
        GO386
                For GOARCH=386, the floating point instruction set.
                Valid values are 387, sse2.
        GOMIPS
                For GOARCH=mips{,le}, whether to use floating point instructions.
                Valid values are hardfloat (default), softfloat.
        GOMIPS64
                For GOARCH=mips64{,le}, whether to use floating point instructions.
                Valid values are hardfloat (default), softfloat.
        GOWASM
                For GOARCH=wasm, comma-separated list of experimental WebAssembly features to use.
                Valid values are satconv, signext.

Special-purpose environment variables:

        GCCGOTOOLDIR
                If set, where to find gccgo tools, such as cgo.
                The default is based on how gccgo was configured.
        GOROOT_FINAL
                The root of the installed Go tree, when it is
                installed in a location other than where it is built.
                File names in stack traces are rewritten from GOROOT to
                GOROOT_FINAL.
        GO_EXTLINK_ENABLED
                Whether the linker should use external linking mode
                when using -linkmode=auto with code that uses cgo.
                Set to 0 to disable external linking mode, 1 to enable it.
        GIT_ALLOW_PROTOCOL
                Defined by Git. A colon-separated list of schemes that are allowed
                to be used with git fetch/clone. If set, any scheme not explicitly
                mentioned will be considered insecure by 'go get'.
                Because the variable is defined by Git, the default value cannot
                be set using 'go env -w'.

Additional information available from 'go env' but not read from the environment:

        GOEXE
                The executable file name suffix (".exe" on Windows, "" on other systems).
        GOGCCFLAGS
                A space-separated list of arguments supplied to the CC command.
        GOHOSTARCH
                The architecture (GOARCH) of the Go toolchain binaries.
        GOHOSTOS
                The operating system (GOOS) of the Go toolchain binaries.
        GOMOD
                The absolute path to the go.mod of the main module.
                If module-aware mode is enabled, but there is no go.mod, GOMOD will be
                os.DevNull ("/dev/null" on Unix-like systems, "NUL" on Windows).
                If module-aware mode is disabled, GOMOD will be the empty string.
        GOTOOLDIR
                The directory where the go tools (compile, cover, doc, etc...) are installed.

```
