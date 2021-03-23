# flutter command

## global options

```text
    Global options:
    -h, --help                  Print this usage information.
    -v, --verbose               Noisy logging, including all shell commands executed.
                                If used with --help, shows hidden options.
    -d, --device-id             Target device id or name (prefixes allowed).
        --version               Reports the version of this tool.
        --suppress-analytics    Suppress analytics reporting when this command runs.


```

## create-

```sh
    # Create a new Flutter project in the specified directory.
    flutter create <output directory>       

    flutter create flutter_app                                  # 项目名不能含有'-'
    flutter create 
        --org=com.example                   # 指定包名
        --project-name=projeckname          # 指定项目名
        -i, --ios-language                  # 指定平台语言 [objc, swift (default)]
        -a, --android-language              # 指定平台语言 [java, kotlin (default)]
        --[no-]overwrite
        --platforms android,ios,
        flutter_app

    -h, --help                 Print this usage information.
    --[no-]pub                 Whether to run "flutter pub get" after the project has   been created.
                               (defaults to on)
    --[no-]offline             When "flutter pub get" is run by the create command, this indicates whether
                               to run it in offline mode or not. In offline mode, it will need to have all
                               dependencies already available in the pub cache to succeed.
    --[no-]with-driver-test    (Deprecated) Also add a flutter_driver dependency and generate a sample
                               'flutter drive' test. This flag has been deprecated, instead see
                               package:integration_test at https://pub.dev/packages/integration_test .
    --[no-]overwrite           When performing operations, overwrite existing files.
    --description              The description to use for your new Flutter project. This string ends up in
                               the pubspec.yaml file.
                               (defaults to "A new Flutter project.")
    --org                      The organization responsible for your new Flutter project, in reverse domain
                               name notation. This string is used in Java package names and as prefix in the
                               iOS bundle identifier.
                               (defaults to "com.example")
    --project-name             The project name for this new Flutter project. This must be a valid dartpackage name.
    -i, --ios-language         [objc, swift (default)]
    -a, --android-language     [java, kotlin (default)]
    --platforms                The platforms supported by this project. This argument only works when the
                               --template is set to app or plugin. Platform folders (e.g. android/) will be
                               generated in the target project. When adding platforms to a plugin project,
                               the pubspec.yaml will be updated with the requested platform. Adding desktop
                               platforms requires the corresponding desktop config setting to be enabled.
                               [ios (default), android (default), windows (default), linux (default), macos
                               (default), web (default)]
-t, --template=<type>          Specify the type of project to create.
          [app]                (default) Generate a Flutter application.
          [module]             Generate a project to add a Flutter module to an existing Android or iOS application.
          [package]            Generate a shareable Flutter project containing modular Dart code.
          [plugin]             Generate a shareable Flutter project containing an API in Dart code with a
                               platform-specific implementation for Android, for iOS code, or for both.

-s, --sample=<id>              Specifies the Flutter code sample to use as the main.dart for an application.
                               Implies --template=app. The value should be the sample ID of the desired
                               sample from the API documentation website (http://docs.flutter.dev). An
                               example can be found at
                               https://master-api.flutter.dev/flutter/widgets/SingleChildScrollView-class.ht
                               ml
    --list-samples=<path>      Specifies a JSON output file for a listing of Flutter code samples that can
                               be created with --sample.
```

## run-

```sh
    # Run your Flutter application on an attached device or in an emulator.
    flutter run [options]
    flutter run                 # 运行app
        -d <device-id>          # 在指定设备上运行
```

## analyze

```sh
    # Analyze the project's Dart code.


```

## assemble

```sh
    # Assemble and build Flutter resources.


```

## attach

```sh
    # Attach to a running app.
    flutter attach              # 热更新断开时 重新链接设备(无需重装)


```

## bash-completion

```sh
    # Output command line shell completion setup scripts.


```

## build

```sh
    # Build an executable app or install bundle.
    flutter build <subcommand> [arguments]
    -h, --help    Print this usage information.
    --release   // 生产包 (默认)
    --debug     //debug 包

    flutter build aar             Build a repository containing an AAR and a POM file.
    flutter build apk             Build an Android APK file from your app.
    flutter build appbundle       Build an Android App Bundle file from your app.
    flutter build bundle          Build the Flutter assets directory from your app.
    flutter build ipa             Build an iOS archive bundle (Mac OS X host only).
    flutter build web             Build a web application bundle.
    flutter build ios             Build an iOS application bundle (Mac OS X host only).
    flutter build ios-framework   Produces .xcframeworks for a Flutter project and 
                                    its plugins for integration into existing, plain Xcode projects.


```

subcommand      | build path                                            | -
aar             | .                                                     | -
apk             | build/app/outputs/apk/release/app-release.apk         | -
appbundle       | build/app/outputs/bundle/release/app-release.aab      | -
bundle          | .                                                     | -
ipa             | .                                                     | -
web             | /build/web                                            | -
ios             | .                                                     | -
ios-framework   | .                                                     | -

## channel

```sh
    # List or switch Flutter channels.
    flutter channel     # 列出flutter channel
        master      最初的版本，功能可能会在后面的版本中被删减
        dev         由master过来的经过全面测试的，比master更稳定完善的版本
        beta        由master分支过来的，比dev版本更稳定的版本
        * stable    由beta版本过来的，最终稳定的版本，生产环境建议使用此版本

    flutter channel master      # 切换到master channel
    flutter config              # 了解某个功能在哪个版本受支持
```

## clean

```sh
    # Delete the build/ and .dart_tool/ directories.

    flutter clean               # 清理临时文件

```

## config

```sh
    # Configure Flutter settings.
    flutter config [arguments]
-h, --help                                       Print this usage information.
    --[no-]analytics                             Enable or disable reporting anonymously tool usage statistics and crash reports.
    --clear-ios-signing-cert                     Clear the saved development certificate choice used to sign apps for iOS device deployment.
    --android-sdk                                The Android SDK directory.
    --android-studio-dir                         The Android Studio install directory.
    --build-dir=<out/>                           The relative path to override a projects build directory
    --[no-]enable-web                            Enable or disable Flutter for web. This setting will take effect on the master, dev, beta, and stable
                                                 channels.
    --[no-]enable-linux-desktop                  Enable or disable beta-quality support for desktop on Linux. This setting will take effect on the master,
                                                 dev, beta, and stable channels. Newer beta versions are available on the beta channel.
    --[no-]enable-macos-desktop                  Enable or disable beta-quality support for desktop on macOS. This setting will take effect on the master,
                                                 dev, beta, and stable channels. Newer beta versions are available on the beta channel.
    --[no-]enable-windows-desktop                Enable or disable beta-quality support for desktop on Windows. This setting will take effect on the master,
                                                 dev, beta, and stable channels. Newer beta versions are available on the beta channel.
    --[no-]single-widget-reload-optimization     Enable or disable Hot reload optimization for changes to class body of a single widget. This setting will
                                                 take effect on the master, dev, and beta channels.
    --[no-]enable-android                        Enable or disable Flutter for Android. This setting will take effect on the master, dev, beta, and stable
                                                 channels.
    --[no-]enable-ios                            Enable or disable Flutter for iOS. This setting will take effect on the master, dev, beta, and stable
                                                 channels.
    --[no-]enable-fuchsia                        Enable or disable Flutter for Fuchsia. This setting will take effect on the master channel.
    --[no-]experimental-invalidation-strategy    Enable or disable Hot reload optimization that reduces incremental artifact size. This setting will take
                                                 effect on the master, dev, and beta channels.
    --clear-features                             Remove all configured features and restore them to the default values.



```

## create

```sh
    # Create a new Flutter project.


```

## devices

```sh
    # List all connected devices.
    flutter devices             # 列出所有可链接的设备


```

## doctor

```sh
    # Show information about the installed tooling.
:<<EOF
    [✓] Flutter (Channel stable, 2.0.1, on macOS 11.2.3 20D91 darwin-x64, locale zh-Hans-CN)
    [✓] Android toolchain - develop for Android devices (Android SDK version 30.0.3)
    [✗] Xcode - develop for iOS and macOS
    [✓] Chrome - develop for the web
    [!] Android Studio (not installed)
    [✓] IntelliJ IDEA Ultimate Edition (version 2020.3.2)
    [✓] VS Code (version 1.50.1)
    [✓] Connected device (2 available)
EOF

    flutter doctor      # 检查 显示已安装的工具
    flutter doctor -v   # 检查 显示已安装的工具(显示详细信息)



```

## downgrade

```sh
    # Downgrade Flutter to the last active version for the current channel.


```

## drive

```sh
    # Run integration tests for the project on an attached device or emulator.


```

## emulators

```sh
    # List, launch and create emulators.


```

## format

```sh
    # Format one or more Dart files.
    -h, --help                   Print this usage information.
    -n, --dry-run                Show which files would be modified but make no changes.
        --set-exit-if-changed    Return exit code 1 if there are any formatting changes.
    -m, --machine                Produce machine-readable JSON output.
    -l, --line-length            Wrap lines longer than this length. Defaults to 80 characters.(defaults to "80")


    flutter format <one or more paths>
    flutter format .            # 递归格式化代码
    flutter format --machine .  # 输出机器可读的json文件本
    flutter format --dry-run .  # 输出将要被格式化的文件 但不格式化

```

## gen-l10n

```sh
    # Generate localizations for the current project.


```

## install

```sh
    # Install a Flutter app on an attached device.
    flutter install         # 安装pp

```

## logs

```sh
    # Show log output for running Flutter apps.
    flutter logs                # 展示日志

```

## precache

```sh
    # Populate the Flutter tool's cache of binary artifacts.


```

## pub

```sh
    # Commands for managing Flutter packages.
    flutter pub <subcommand> [arguments]
    flutter pub add         # Add a dependency to pubspec.yaml..
    flutter pub cache       # Work with the Pub system cache.
    flutter pub deps        # Print package dependencies.
    flutter pub downgrade   # Downgrade packages in a Flutter project.
    flutter pub get         # Get packages in a Flutter project.
    flutter pub global      # Work with Pub global packages.
    flutter pub login       # Log into pub.dev..
    flutter pub logout      # Log out of pub.dev..
    flutter pub outdated    # Analyze dependencies to find which ones can be upgraded.
    flutter pub pub         # Pass the remaining arguments to Dart's "pub" tool.
    flutter pub publish     # Publish the current package to pub.dartlang.org.
    flutter pub remove      # Removes a dependency from the current package..
    flutter pub run         # Run an executable from a package.
    flutter pub test        # Run the "test" package.
    flutter pub upgrade     # Upgrade the current package's dependencies to latest versions..
    flutter pub uploader    # Manage uploaders for a package on pub.dev.
    flutter pub version     # Print Pub version.

```

## run

```sh
    # Run your Flutter app on an attached device.


```

## screenshot

```sh
    # Take a screenshot from a connected device.


```

## symbolize

```sh
    # Symbolize a stack trace from an AOT-compiled Flutter app.


```

## test

```sh
    # Run Flutter unit tests for the current project.


```

## upgrade

```sh
    # Upgrade your copy of Flutter.

    flutter upgrade         # 下载更新flutter SDK

```
