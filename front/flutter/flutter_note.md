# flutter note

## install

```sh



    # 获取Flutter SDK zip包 解压安装

    # vim ~/.bash_profile
    export PUB_HOSTED_URL=https://pub.flutter-io.cn
    export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
    export PATH=PATH_TO_FLUTTER_GIT_DIRECTORY/flutter/bin:$PATH

    source $HOME/.bash_profile


    flutter doctor   # 查看是否需要安装其它依赖项来完成安装

    flutter doctor --android-licenses # 本机已安装了AndroidSDK，Android许可不被接受,同意许可


```

## 发布至 AppGallery Connect

```text
    1. 生成新的上传密钥。
    keytool -genkey -alias upload-keystore -keyalg RSA -keysize 10240 -keystore upload-keystore.jks -validity 365
    ~/.ssh/keytool/upload-keystore.jks
        输入密钥库口令: Z*9
        您的名字与姓氏是什么? 刘
        您的组织单位名称是什么? 星辰阁
        您的组织名称是什么? 星辰阁
        您所在的城市或区域名称是什么? 天机
        您所在的省/市/自治区名称是什么? 天机
        该单位的双字母国家/地区代码是什么? phoenix
        CN=刘, OU=星辰阁, O=星辰阁, L=天机, ST=天机, C=phoenix是否正确?
        正在为以下对象生成 10,240 位RSA密钥对和自签名证书 (SHA512withRSA) (有效期为 365 天):
                CN=刘, OU=星辰阁, O=星辰阁, L=天机, ST=天机, C=phoenix

    2. 为新生成的上传密钥导出证书 (PEM 格式)。须替换以粗体突出显示的参数。
    keytool -export -rfc -keystore upload-keystore.jks -alias upload-keystore -file upload_certificate.pem
    ~/.ssh/keytool/upload_certificate.pem

应用签名证书：
    这是您的应用分发前，为其签名时所用的应用签名密钥的公钥证书。
    应用签名密钥不可访问。请使用以下证书向 API 提供商注册应用签名密钥。
    ~/.ssh/keytool/certificate_sing.pem
SHA-256 证书指纹:
    B6:9B:78:2C:36:1F:03:E1:BC:A4:0F:8F:11:43:8F:AB:3E:93:52:5C:E4:E1:3C:59:48:E7:22:20:27:2A:CE:6C
上传证书：
    这是您持有的上传密钥的公钥证书，请使用上传密钥为每个版本签名，以便 AG Connect 确认相应版本是您上传的。
    测试应用时，请使用以下证书向 API 提供商注册应用签名密钥。
    ~/.ssh/keytool/certificate_upload.pem
SHA-256 证书指纹:
    28:13:43:5E:39:40:93:55:C5:6E:BC:99:B8:77:59:EB:A5:5B:BB:7E:4D:4F:9D:03:BE:86:4E:65:CC:1F:54:D7

```

## 修改应用名称和图标

```text


    dpi:
        dpi是Dots Per Inch的缩写, 每英寸点数，即每英寸包含像素个数。比如320X480分辨率的手机，宽2英寸，高3英寸, 每英寸包含的像素点的数量为320/2=160dpi（横向）或480/3=160dpi（纵向），160就是这部手机的dpi，横向和纵向的这个值都是相同的，原因是大部分手机屏幕使用正方形的像素点。
    density:
        屏幕密度，density和dpi的关系为 density = dpi/160


    Android:
        path: /android/app/src/main/AndroidManifest.xml

        android:label="flutter_app"                 // app name
        android:icon="@mipmap/ic_launcher"          // app icon png格式 多个icon适配不同机型
                                                    // /android/app/src/main/res/mipmap-*/
        mipmap-ldpi (dpi=120, density=0.75)
        mipmap-mdpi (dpi=160, density=1)
        mipmap-hdpi (dpi=240, density=1.5)
        mipmap-xhdpi (dpi=320, density=2)
        mipmap-xxhdpi (dpi=480, density=3)

    IOS:
        name path: /ios/Runner/Info.plist
            <key>CFBundleName</key>
            <string>this is application name</string>
        icon path: /ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json




```

## tips

```text
    Flutter 是完全基于 widget (小部件) 的。
    widget (小部件)
        button (按钮)
        list (列表)
        table (表格)
        input box (输入框)
        card view (卡片视图)
```
