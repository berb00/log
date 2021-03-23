# yum Commands

command | comment
-|-
check          |Check for problems in the rpmdb
check-update   |Check for available package updates
clean          |Remove cached data
deplist        |List a package's dependencies distribution-synchronization Synchronize installed packages to the latest available versions
downgrade      |downgrade a package
erase          |Remove a package or packages from your system
fs             |Acts on the filesystem data of the host, mainly for removing docs/lanuages for minimal hosts.
fssnapshot     |Creates filesystem snapshots, or lists/deletes current snapshots.
groups         |Display, or use, the groups information
help           |Display a helpful usage message
history        |Display, or use, the transaction history
info           |Display details about a package or group of packages
install        |Install a package or packages on your system
list           |List a package or groups of packages
load-transaction |load a saved transaction from filename
makecache      |Generate the metadata cache
provides       |Find what package provides the given value
reinstall      |reinstall a package
repo-pkgs      |Treat a repo. as a group of packages, so we can install/remove all of them
repolist       |Display the configured software repositories
search         |Search package details for the given string
shell          |Run an interactive yum shell
swap           |Simple way to swap packages, instead of using shell
update         |Update a package or packages on your system
update-minimal |Works like upgrade, but goes to the 'newest' package match which fixes a problem that affects your system
updateinfo     |Acts on repository update information
upgrade        |Update packages taking obsoletes into account
version        |Display a version for the machine and/or available repos.

## conmment

option | comment
-|-
check          检查 RPM 数据库问题
check-update   检查是否有可用的软件包更新
clean          删除缓存数据
deplist        列出软件包的依赖关系
distribution-synchronization 已同步软件包到最新可用版本
downgrade      降级软件包
erase          从系统中移除一个或多个软件包
fs             Acts on the filesystem data of the host, mainly for removing docs/lanuages for minimal hosts.
fssnapshot     Creates filesystem snapshots, or lists/deletes current snapshots.
groups         显示或使用、组信息
help           显示用法提示
history        显示或使用事务历史
info           显示关于软件包或组的详细信息
install        向系统中安装一个或多个软件包
list           列出一个或一组软件包
load-transaction 从文件名中加载一个已存事务
makecache      创建元数据缓存
provides       查找提供指定内容的软件包
reinstall      覆盖安装软件包
repo-pkgs      将一个源当作一个软件包组，这样我们就可以一次性安装/移除全部软件包。
repolist       显示已配置的源
search         在软件包详细信息中搜索指定字符串
shell          运行交互式的 yum shell
swap           Simple way to swap packages, instead of using shell
update         更新系统中的一个或多个软件包
update-minimal Works like upgrade, but goes to the 'newest' package match which fixes a problem that affects your system
updateinfo     Acts on repository update information
upgrade        更新软件包同时考虑软件包取代关系
version        显示机器和/或可用的源版本。

remove         删除包

## Options

option | comment
-|-
-h, --help            |show this help message and exit
-t, --tolerant        |be tolerant of errors
-C, --cacheonly       |run entirely from system cache, don't update cache
-c [config file], --config=[config file] |config file location
-R [minutes], --randomwait=[minutes] |maximum command wait time
-d [debug level], --debuglevel=[debug level] |debugging output level
--showduplicates      |show duplicates, in repos, in list/search commands
-e [error level], --errorlevel=[error level] |error output level
--rpmverbosity=[debug level name] |debugging output level for rpm
-q, --quiet           |quiet operation
-v, --verbose         |verbose operation
-y, --assumeyes       |answer yes for all questions
--assumeno            |answer no for all questions
--version             |show Yum version and exit
--installroot=[path]  |set install root
--enablerepo=[repo]   |enable one or more repositories (wildcards allowed)
--disablerepo=[repo]  |disable one or more repositories (wildcards allowed)
-x [package], --exclude=[package] |exclude package(s) by name or glob
--disableexcludes=[repo] |disable exclude from main, for a repo or for everything
--disableincludes=[repo] |disable includepkgs for a repo or for everything
--obsoletes           |enable obsoletes processing during updates
--noplugins           |disable Yum plugins
--nogpgcheck          |disable gpg signature checking
--disableplugin=[plugin] |disable plugins by name
--enableplugin=[plugin] |enable plugins by name
--skip-broken         |skip packages with depsolving problems
--color=COLOR         |control whether color is used
--releasever=RELEASEVER |set value of $releasever in yum config and repo files
--downloadonly        |don't update, just download
--downloaddir=DLDIR   |specifies an alternate directory to store packages
--setopt=SETOPTS      |set arbitrary config and repo options
--bugfix              |Include bugfix relevant packages, in updates
--security            |Include security relevant packages, in updates
--advisory=ADVS, --advisories=ADVS |Include packages needed to fix the given advisory, in updates
--bzs=BZS             |Include packages needed to fix the given BZ, in updates
--cves=CVES           |Include packages needed to fix the given CVE, in updates
--sec-severity=SEVS, --secseverity=SEVS |Include security relevant packages matching the severity, in updates

```text

Usage: yum [options] COMMAND

List of Commands:

check          检查 RPM 数据库问题
check-update   检查是否有可用的软件包更新
clean          删除缓存数据
deplist        列出软件包的依赖关系
distribution-synchronization 已同步软件包到最新可用版本
downgrade      降级软件包
erase          从系统中移除一个或多个软件包
fs             Acts on the filesystem data of the host, mainly for removing docs/lanuages for minimal hosts.
fssnapshot     Creates filesystem snapshots, or lists/deletes current snapshots.
groups         显示或使用、组信息
help           显示用法提示
history        显示或使用事务历史
info           显示关于软件包或组的详细信息
install        向系统中安装一个或多个软件包
list           列出一个或一组软件包
load-transaction 从文件名中加载一个已存事务
makecache      创建元数据缓存
provides       查找提供指定内容的软件包
reinstall      覆盖安装软件包
repo-pkgs      将一个源当作一个软件包组，这样我们就可以一次性安装/移除全部软件包。
repolist       显示已配置的源
search         在软件包详细信息中搜索指定字符串
shell          运行交互式的 yum shell
swap           Simple way to swap packages, instead of using shell
update         更新系统中的一个或多个软件包
update-minimal Works like upgrade, but goes to the 'newest' package match which fixes a problem that affects your system
updateinfo     Acts on repository update information
upgrade        更新软件包同时考虑软件包取代关系
version        显示机器和/或可用的源版本。


Options:
  -h, --help            显示此帮助消息并退出
  -t, --tolerant        忽略错误
  -C, --cacheonly       完全从系统缓存运行，不升级缓存
  -c [config file], --config=[config file]
                        配置文件路径
  -R [minutes], --randomwait=[minutes]
                        命令最长等待时间
  -d [debug level], --debuglevel=[debug level]
                        调试输出级别
  --showduplicates      在 list/search 命令下，显示源里重复的条目
  -e [error level], --errorlevel=[error level]
                        错误输出级别
  --rpmverbosity=[debug level name]
                        RPM 调试输出级别
  -q, --quiet           静默执行
  -v, --verbose         详尽的操作过程
  -y, --assumeyes       回答全部问题为是
  --assumeno            回答全部问题为否
  --version             显示 Yum 版本然后退出
  --installroot=[path]  设置安装根目录
  --enablerepo=[repo]   启用一个或多个软件源(支持通配符)
  --disablerepo=[repo]  禁用一个或多个软件源(支持通配符)
  -x [package], --exclude=[package]
                        采用全名或通配符排除软件包
  --disableexcludes=[repo]
                        禁止从主配置，从源或者从任何位置排除
  --disableincludes=[repo]
                        disable includepkgs for a repo or for everything
  --obsoletes           更新时处理软件包取代关系
  --noplugins           禁用 Yum 插件
  --nogpgcheck          禁用 GPG 签名检查
  --disableplugin=[plugin]
                        禁用指定名称的插件
  --enableplugin=[plugin]
                        启用指定名称的插件
  --skip-broken         忽略存在依赖关系问题的软件包
  --color=COLOR         配置是否使用颜色
  --releasever=RELEASEVER
                        在 yum 配置和 repo 文件里设置 $releasever 的值
  --downloadonly        仅下载而不更新
  --downloaddir=DLDIR   指定一个其他文件夹用于保存软件包
  --setopt=SETOPTS      设置任意配置和源选项
  --bugfix              Include bugfix relevant packages, in updates
  --security            Include security relevant packages, in updates
  --advisory=ADVS, --advisories=ADVS
                        Include packages needed to fix the given advisory, in
                        updates
  --bzs=BZS             Include packages needed to fix the given BZ, in
                        updates
  --cves=CVES           Include packages needed to fix the given CVE, in
                        updates
  --sec-severity=SEVS, --secseverity=SEVS
                        Include security relevant packages matching the
                        severity, in updates

  插件选项:


yum-config-manager options:
    --save              save the current options (useful with --setopt)
    --enable            enable the specified repos (automatically saves)
    --disable           disable the specified repos (automatically saves)
    --add-repo=ADDREPO  add (and enable) the repo from the specified file or


```
