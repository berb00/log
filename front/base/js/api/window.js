const win = {
    frames: Window,
    parent: Window,
    self: Window,
    top: Window,
    window: Window,
    globalThis: Window,
    __proto__: Window,


    document: document,


    // =======================attrbute===========================
    closed: false,
    crossOriginIsolated: false,
    defaultStatus: "",
    defaultstatus: "",
    devicePixelRatio: 2,
    frameElement: null,
    innerHeight: 568,
    innerWidth: 320,
    isSecureContext: true,
    length: 0,
    name: "",
    opener: null,
    orientation: 0,
    origin: "null",
    outerHeight: 568,
    outerWidth: 320,
    pageXOffset: 0,
    pageYOffset: 0,
    screenLeft: 0,
    screenTop: 0,
    screenX: 0,
    screenY: 0,
    scrollX: 0,
    scrollY: 0,
    status: "",

    event: undefined,
    offscreenBuffering: true,
    undefined: undefined,
    Infinity: Infinity,
    NaN: NaN,




    // =======================object===========================
    caches: {},  // CacheStorage
    chrome: {
        app: {
            InstallState: {
                DISABLED: "disabled", 
                INSTALLED: "installed", 
                NOT_INSTALLED: "not_installed"
            },
            RunningState: {
                CANNOT_RUN: "cannot_run", 
                READY_TO_RUN: "ready_to_run", 
                RUNNING: "running"
            },
            getDetails: function() {},
            getIsInstalled: function() {},
            installState: function() {},
            isInstalled: false,
            runningState: function() {},
            // get isInstalled: function() {}
        }, 
        loadTimes: function() {},
        csi: function() {}
    },
    clientInformation: { // Navigator
        appCodeName: "Mozilla",
        appName: "Netscape",
        appVersion: "5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
        bluetooth:  {}, // Bluetooth
        clipboard:  {}, // Clipboard
        connection:  {  // NetworkInformation
            onchange: null, 
            effectiveType: "4g", 
            rtt: 100, 
            downlink: 10, 
            saveData: false
        },
        cookieEnabled: true,
        credentials: {}, // CredentialsContainer
        deviceMemory: 8,
        doNotTrack: null,
        geolocation: {}, // Geolocation
        hardwareConcurrency: 4,
        keyboard: {}, // Keyboard
        language: "zh-CN",
        languages: (2) ["zh-CN", "zh"],
        locks: {}, // LockManager
        maxTouchPoints: 1,
        mediaCapabilities: {}, // MediaCapabilities
        mediaDevices:  { // MediaDevices
            ondevicechange: null
        },
        mediaSession: { // MediaSession
            metadata: null, 
            playbackState: "none"
        },
        mimeTypes: { // MimeTypeArray
            length: 0
        },
        onLine: true,
        permissions: {}, // Permissions
        platform: "MacIntel",
        plugins: { // PluginArray
            length: 0
        },
        presentation: { // Presentation
            defaultRequest: null, 
            receiver: null
        },
        product: "Gecko",
        productSub: "20030107",
        scheduling:  {}, // Scheduling
        serviceWorker:  { // ServiceWorkerContainer
            controller: null, 
            ready: Promise, 
            oncontrollerchange: null, 
            onmessage: null, 
            onmessageerror: null
        },
        storage: {}, // StorageManager
        usb: { // USB
            onconnect: null, 
            ondisconnect: null
        },
        userActivation: { // UserActivation
            hasBeenActive: true, 
            isActive: false
        },
        userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
        vendor: "Google Inc.",
        vendorSub: "",
        wakeLock: {}, // WakeLock
        webkitPersistentStorage:  {}, // DeprecatedStorageQuota
        webkitTemporaryStorage:  {}, // DeprecatedStorageQuota
        xr:  { // XRSystem
            ondevicechange: null
        }
    },
    cookieStore: {  // CookieStore
        onchange: null
    },
    crypto: {  // Crypto
        subtle: SubtleCrypto
    },
    customElements: {},// CustomElementRegistry
    external: {},// External
    history: { // History
        length: 1, 
        scrollRestoration: "auto", 
        state: null
    },
    indexedDB: {},// IDBFactory
    localStorage: { // Storage
        
    },
    location: {    // Location
        ancestorOrigins: { // DOMStringList
            length: 0
        },
        assign: function() {},
        hash: "",
        host: "",
        hostname: "",
        href: "file:///Users/berb00/Desktop/gitee/Log/front/test/index.html",
        origin: "file://",
        pathname: "/Users/berb00/Desktop/gitee/Log/front/test/index.html",
        port: "",
        protocol: "file:",
        reload: function() {},
        replace: function() {},
        search: "",
        toString: function() {},
        valueOf: function() {}
    },
    navigator: { // Navigator
        appCodeName: "Mozilla",
        appName: "Netscape",
        appVersion: "5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
        bluetooth:  {}, // Bluetooth
        clipboard:  {}, // Clipboard
        connection: { // NetworkInformation
            onchange: null, 
            effectiveType: "4g", 
            rtt: 100,
            downlink: 10, 
            saveData: false
        },
        cookieEnabled: true,
        credentials:  {},   // CredentialsContainer
        deviceMemory: 8,
        doNotTrack: null,
        geolocation:  {},   // Geolocation
        hardwareConcurrency: 4,
        keyboard:  {},  // Keyboard
        language: "zh-CN",
        languages: ["zh-CN", "zh"],
        locks:  {}, // LockManager
        maxTouchPoints: 1,
        mediaCapabilities: {},  // MediaCapabilities
        mediaDevices: { // MediaDevices
            ondevicechange: null
        },
        mediaSession: { // MediaSession
            metadata: null, 
            playbackState: "none"
        },
        mimeTypes: { // MimeTypeArray
            length: 0
        },
        onLine: true,
        permissions: {},  // Permissions
        platform: "MacIntel",
        plugins: {  // PluginArray
            length: 0
        },
        presentation: { // Presentation
            defaultRequest: null, 
            receiver: null
        },
        product: "Gecko",
        productSub: "20030107",
        scheduling:  {}, // Scheduling
        serviceWorker: { // ServiceWorkerContainer
            controller: null, 
            ready: Promise, 
            oncontrollerchange: null, 
            onmessage: null, 
            onmessageerror: null
        },
        storage: {}, // StorageManager
        usb:  { // USB
            onconnect: null, 
            ondisconnect: null
        },
        userActivation: { // UserActivation
            hasBeenActive: true, 
            isActive: false
        },
        userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
        vendor: "Google Inc.",
        vendorSub: "",
        wakeLock:  {}, // WakeLock
        webkitPersistentStorage: {}, // DeprecatedStorageQuota
        webkitTemporaryStorage: {}, // DeprecatedStorageQuota
        xr: { // XRSystem
            ondevicechange: null
        }
    },
    performance: { // Performance
        eventCounts: { // EventCounts
            size: 36
        },
        memory: { // MemoryInfo
            totalJSHeapSize: 10000000, 
            usedJSHeapSize: 10000000, 
            jsHeapSizeLimit: 2190000000
        },
        navigation: { // PerformanceNavigation
            type: 1, 
            redirectCount: 0
        },
        onresourcetimingbufferfull: null,
        timeOrigin: 1614739990063.187,
        timing:  { // PerformanceTiming
            connectEnd: 1614739990063,
            connectStart: 1614739990063,
            domComplete: 1614739990104,
            domContentLoadedEventEnd: 1614739990104,
            domContentLoadedEventStart: 1614739990104,
            domInteractive: 1614739990104,
            domLoading: 1614739990073,
            domainLookupEnd: 1614739990063,
            domainLookupStart: 1614739990063,
            fetchStart: 1614739990063,
            loadEventEnd: 1614739990104,
            loadEventStart: 1614739990104,
            navigationStart: 1614739990063,
            redirectEnd: 0,
            redirectStart: 0,
            requestStart: 1614739990063,
            responseEnd: 1614739990066,
            responseStart: 1614739990063,
            secureConnectionStart: 0,
            unloadEventEnd: 1614739990072,
            unloadEventStart: 1614739990072
        }
    },
    screen: { // Screen
        availHeight: 568,
        availLeft: 0,
        availTop: 0,
        availWidth: 320,
        colorDepth: 30,
        height: 568,
        orientation: { // ScreenOrientation
            angle: 0, 
            type: "portrait-primary", 
            onchange: null
        },
        pixelDepth: 30,
        width: 320
    },
    sessionStorage: { // Storage
        length: 0
    },
    speechSynthesis: { // SpeechSynthesis
        pending: false, 
        speaking: false, 
        paused: false, 
        onvoiceschanged: null
    },
    styleMedia: { // StyleMedia
        type: "screen"
    },
    trustedTypes: { // TrustedTypePolicyFactory
        emptyHTML: TrustedHTML, 
        emptyScript: TrustedScript, 
        defaultPolicy: null
    },
    visualViewport: { // VisualViewport
        height: 568,
        offsetLeft: 0,
        offsetTop: 0,
        onresize: null,
        onscroll: null,
        pageLeft: 0,
        pageTop: 0,
        scale: 1,
        width: 320
    },
    webkitStorageInfo: {}, // DeprecatedStorageInfo
    Atomics: { //Atomics
        add: function() {},
        and: function() {},
        compareExchange: function() {},
        exchange: function() {},
        isLockFree: function() {},
        load: function() {},
        notify: function() {},
        or: function() {},
        store: function() {},
        sub: function() {},
        wait: function() {},
        waitAsync: function() {},
        xor: function() {},
        // Symbol(Symbol.toStringTag): "Atomics"
    },
    Intl: { // Intl
        Collator: function() {},
        DateTimeFormat: function() {},
        DisplayNames: function() {},
        ListFormat: function() {},
        Locale: function() {},
        NumberFormat: function() {},
        PluralRules: function() {},
        RelativeTimeFormat: function() {},
        Segmenter: function() {},
        getCanonicalLocales: function() {},
        v8BreakIterator: function() {},
        // Symbol(Symbol.toStringTag): "Intl"
    },
    JSON: { // JSON
        parse: function() {}, 
        stringify: function() {},
        // Symbol(Symbol.toStringTag): "JSON"
    },
    Math: { //Math
        E: 2.718281828459045,
        LN2: 0.6931471805599453,
        LN10: 2.302585092994046,
        LOG2E: 1.4426950408889634,
        LOG10E: 0.4342944819032518,
        PI: 3.141592653589793,
        SQRT1_2: 0.7071067811865476,
        SQRT2: 1.4142135623730951,
        abs: function() {},
        acos: function() {},
        acosh: function() {},
        asin: function() {},
        asinh: function() {},
        atan: function() {},
        atan2: function() {},
        atanh: function() {},
        cbrt: function() {},
        ceil: function() {},
        clz32: function() {},
        cos: function() {},
        cosh: function() {},
        exp: function() {},
        expm1: function() {},
        floor: function() {},
        fround: function() {},
        hypot: function() {},
        imul: function() {},
        log: function() {},
        log1p: function() {},
        log2: function() {},
        log10: function() {},
        max: function() {},
        min: function() {},
        pow: function() {},
        random: function() {},
        round: function() {},
        sign: function() {},
        sin: function() {},
        sinh: function() {},
        sqrt: function() {},
        tan: function() {},
        tanh: function() {},
        trunc: function() {},
        // Symbol(Symbol.toStringTag): "Math"
    },
    Reflect: { // Reflect
        apply: function() {},
        construct: function() {},
        defineProperty: function() {},
        deleteProperty: function() {},
        get: function() {},
        getOwnPropertyDescriptor: function() {},
        getPrototypeOf: function() {},
        has: function() {},
        isExtensible: function() {},
        ownKeys: function() {},
        preventExtensions: function() {},
        set: function() {},
        setPrototypeOf: function() {},
        // Symbol(Symbol.toStringTag): "Reflect"
    },
    WebAssembly: { // WebAssembly
        compile: function() {},
        compileStreaming: function() {},
        instantiate: function() {},
        instantiateStreaming: function() {},
        validate: function() {},
        CompileError: function() {},
        Global: function() {},
        Instance: function() {},
        LinkError: function() {},
        Memory: function() {},
        Module: function() {},
        RuntimeError: function() {},
        Table: function() {},
        // Symbol(Symbol.toStringTag): "WebAssembly"
    },
    console: { // console
        assert: function() {},
        clear: function() {},
        context: function() {},
        count: function() {},
        countReset: function() {},
        debug: function() {},
        dir: function() {},
        dirxml: function() {},
        error: function() {},
        group: function() {},
        groupCollapsed: function() {},
        groupEnd: function() {},
        info: function() {},
        log: function() {},
        memory: { // MemoryInfo
            jsHeapSizeLimit: 2190000000,
            totalJSHeapSize: 10000000,
            usedJSHeapSize: 10000000
        },
        profile: function() {},
        profileEnd: function() {},
        table: function() {},
        time: function() {},
        timeEnd: function() {},
        timeLog: function() {},
        timeStamp: function() {},
        trace: function() {},
        warn: function() {},
        // Symbol(Symbol.toStringTag): "Object"
        // get memory: function() {}
        // set memory: function() {}
    },

    // BarProp
    locationbar: {  visible: true },
    menubar: { visible: true },
    personalbar: { visible: true },
    scrollbars: { visible: true },
    statusbar: { visible: true },
    toolbar: { visible: true },



    // ========================event==========================
    // mouse
    onclick: null,
    ondblclick: null,
    oncontextmenu: null,
    onmousedown: null,
    onmouseenter: null,
    onmouseleave: null,
    onmousemove: null,
    onmouseout: null,
    onmouseover: null,
    onmouseup: null,
    onmousewheel: null,     // obsolete
    onwheel: null,          // 鼠标滚轮在元素上下滚动时触发

    // keyboard
    onkeydown: null,
    onkeypress: null,
    onkeyup: null,

    // 框架/对象（Frame/Object）事件
    onabort: null,          // 图像的加载被中断
    onunload: null,         // 用户退出页面
    onbeforeunload: null,   // 即将离开页面（刷新或关闭）时触发
    onerror: null,          // 加载文档或图像时发生错误
    onhashchange: null,     // 当前 URL 的锚部分发生修改时触发
    onload: null,           // 一张页面或一幅图像完成加载
    onpagehide: null,       // 访问页面时触发
    onpageshow: null,       // 离开页面时触发
    onresize: null,         // 窗口或框架被重新调整大小
    onscroll: null,         // 文档被滚动时

    // clipboard
    oncopy: null,       // 拷贝元素内容时触发
    oncut: null,        // 剪切元素内容时触发
    onpaste: null,      // 粘贴元素内容时触发

    // print
    onafterprint: null,
    onbeforeprint: null,

    // drag
    ondrag: null,           // 元素正在拖动时触发
    ondragend: null,        // 完成元素的拖动时触发
    ondragenter: null,      // 拖动的元素进入放置目标时触发
    ondragleave: null,      // 拖动元素离开放置目标时触发
    ondragover: null,       // 拖动元素在放置目标上时触发
    ondragstart: null,      // 开始拖动元素时触发
    ondrop: null,           // 拖动元素放置在目标区域时触发

    // animation
    onanimationend: null,
    onanimationiteration: null,
    onanimationstart: null,    
    onwebkitanimationend: null,
    onwebkitanimationiteration: null,
    onwebkitanimationstart: null,

    // transition
    ontransitioncancel: null,
    ontransitionend: null,      // CSS 完成过渡后触发
    ontransitionrun: null,
    ontransitionstart: null,
    onwebkittransitionend: null,

    // form
    onblur: null,
    onfocus: null,
    onfocusin: null,
    onfocusout: null,
    oninput: null,
    onreset: null,          // 表单重置时触发
    onsearch: null,
    onselect: null,
    onsubmit: null,
    onchange: null,

    // media
    onabort: null,          // 视频/音频（audio/video）终止加载时触发
    oncancel: null,
    oncanplay: null,        // 用户可以开始播放视频/音频（audio/video）时触发
    oncanplaythrough: null, // 视频/音频（audio/video）可以正常播放且无需停顿和缓冲时触发
    ondurationchange: null, // 视频/音频（audio/video）的时长发生变化时触发。
    onemptied: null,        // 当期播放列表为空时触发
    onended: null,          // 视频/音频（audio/video）播放结束时触发
    onerror: null,          // 视频/音频（audio/video）数据加载期间发生错误时触发
    onloadeddata: null,     // 加载视频/音频（audio/video）当前帧时触发触发。 
    onloadedmetadata: null, // 指定视频/音频（audio/video）的元数据加载后触发
    onloadstart: null,      // 浏览器开始寻找指定视频/音频（audio/video）触发
    onpause: null,          // 视频/音频（audio/video）暂停时触发
    onplay: null,           // 视频/音频（audio/video）开始播放时触发
    onplaying: null,        // 视频/音频（audio/video）暂停或者在缓冲后准备重新开始播放时触发
    onprogress: null,       // 浏览器下载指定的视频/音频（audio/video）时触发
    onratechange: null,     // 视频/音频（audio/video）的播放速度发送改变时触发
    onseeked: null,         // 用户重新定位视频/音频（audio/video）的播放位置后触发
    onseeking: null,        // 用户开始重新定位视频/音频（audio/video）时触发
    onstalled: null,        // 浏览器获取媒体数据，但媒体数据不可用时触发
    onsuspend: null,        // 浏览器读取媒体数据中止时触发
    ontimeupdate: null,     // 当前的播放位置发送改变时触发
    onvolumechange: null,   // 音量发生改变时触发
    onwaiting: null,        // 视频由于要播放下一帧而需要缓冲时触发

    // mobile
    ontouchcancel: null,
    ontouchend: null,
    ontouchmove: null,
    ontouchstart: null,

    // other
    onoffline: null,            // 浏览器开始离线工作时触发
    ononline: null,             // 浏览器开始在线工作时触发
    onmessage: null,            // 通过或者从对象(WebSocket, Web Worker, Event Source 或者子 frame 或父窗口)接收到消息时触发
    onmessageerror: null,
    onpopstate: null,           // 窗口的浏览历史（history 对象）发生改变时触发
    onstorage: null,            // Web Storage更新时触发
    ontoggle: null,             // 打开或关闭 <details> 元素时触发
    onappinstalled: null,
    onauxclick: null,
    onbeforeinstallprompt: null,
    onclose: null,
    oncuechange: null,
    ondevicemotion: null,
    ondeviceorientation: null,
    ondeviceorientationabsolute: null,
    onformdata: null,
    ongotpointercapture: null,
    oninvalid: null,
    onlanguagechange: null,
    onlostpointercapture: null,
    onorientationchange: null,
    onpointercancel: null,
    onpointerdown: null,
    onpointerenter: null,
    onpointerleave: null,
    onpointermove: null,
    onpointerout: null,
    onpointerover: null,
    onpointerrawupdate: null,
    onpointerup: null,
    onrejectionhandled: null,
    onselectionchange: null,
    onselectstart: null,            // 目标对象被开始选中时( input/textarea不支持)
    onunhandledrejection: null,








    // =======================function===========================
    Window: function() {
        const winobj = {
            PERSISTENT: 1,
            TEMPORARY: 0
        }
    },
    History: function() {},
    Location: function() {},
    Navigator: function() {},
    Screen: function() {},



    Number: function() {
        const num = {
            EPSILON: 2.220446049250313e-16,
            MAX_SAFE_INTEGER: 9007199254740991,
            MIN_SAFE_INTEGER: -9007199254740991,
            MAX_VALUE: 1.7976931348623157e+308,
            MIN_VALUE: 5e-324,
            NEGATIVE_INFINITY: -Infinity,
            POSITIVE_INFINITY: Infinity,
            NaN: NaN,
            length: 1,
            name: "Number",
            isFinite: function() {},
            isInteger: function() {},
            isNaN: function() {},
            isSafeInteger: function() {},
            parseFloat: function() {},
            parseInt: function() {}
        }
    },
    Object: function() {
        const object = {
            assign: function() {},
            create: function() {},
            defineProperties: function() {},
            defineProperty: function() {},
            entries: function() {},
            freeze: function() {},
            fromEntries: function() {},
            getOwnPropertyDescriptor: function() {},
            getOwnPropertyDescriptors: function() {},
            getOwnPropertyNames: function() {},
            getOwnPropertySymbols: function() {},
            getPrototypeOf: function() {},
            is: function() {},
            isExtensible: function() {},
            isFrozen: function() {},
            isSealed: function() {},
            keys: function() {},
            length: 1,
            name: "Object",
            preventExtensions: function() {},
            seal: function() {},
            setPrototypeOf: function() {},
            values: function() {}
        }
    },
    Array: function() {
        const array = {
            from: function() {},
            isArray: function() {},
            length: 1,
            name: "Array",
            of: function() {}
        }
    },
    ArrayBuffer: function() {
        const arrayBuffer = {
            isView: function() {},
            length: 1,
            name: "ArrayBuffer"
        }
    },
    Boolean: function() {},
    Date: function() {
        const date = {
            UTC: function() {},
            now: function() {},
            parse: function() {},
            length: 7,
            name: "Date"
        }
    },
    Function: function() {},
    Map: function() {},
    Set: function() {},
    RegExp: function() {
        const regExp = {
            input: "",
            lastMatch: "",
            lastParen: "",
            leftContext: "",
            length: 2,
            name: "RegExp"
        }
    },
    String: function() {
        const string = {
            fromCharCode: function() {},
            fromCodePoint: function() {},
            length: 1,
            name: "String",
            raw: function() {}
        }
    },
    Symbol: function() {
        const symbol = {
            asyncIterator: Symbol(Symbol.asyncIterator),
            hasInstance: Symbol(Symbol.hasInstance),
            isConcatSpreadable: Symbol(Symbol.isConcatSpreadable),
            iterator: Symbol(Symbol.iterator),
            match: Symbol(Symbol.match),
            matchAll: Symbol(Symbol.matchAll),
            replace: Symbol(Symbol.replace),
            search: Symbol(Symbol.search),
            species: Symbol(Symbol.species),
            split: Symbol(Symbol.split),
            toPrimitive: Symbol(Symbol.toPrimitive),
            toStringTag: Symbol(Symbol.toStringTag),
            unscopables: Symbol(Symbol.unscopables),
            for: function() {},
            keyFor: function() {},
            length: 0,
            name: "Symbol"
        }
    },


    alert: function() {},
    confirm: function() {},

    blur: function() {},
    focus: function() {},

    atob: function() {},
    btoa: function() {},

    close: function() {},
    open: function() {},

    eval: function() {},
    isFinite: function() {},
    isNaN: function() {},
    parseFloat: function() {},
    parseInt: function() {},

    setInterval: function() {},
    setTimeout: function() {},
    clearInterval: function() {},
    clearTimeout: function() {},

    decodeURI: function() {},
    encodeURI: function() {},
    decodeURIComponent: function() {},
    encodeURIComponent: function() {},
    escape: function() {},
    unescape: function() {},

    cancelAnimationFrame: function() {},
    requestAnimationFrame: function() {},
    webkitCancelAnimationFrame: function() {},
    webkitRequestAnimationFrame: function() {},



    resizeBy: function() {},
    resizeTo: function() {},
    scroll: function() {},
    scrollBy: function() {},
    scrollTo: function() {},
    moveBy: function() {},
    moveTo: function() {},

    Animation: function() {},
    AnimationEffect: function() {},
    AnimationEvent: function() {},
    AnimationPlaybackEvent: function() {},
    AnimationTimeline: function() {},

    BigInt: function() {
        const bigInt = {
            asIntN: function() {},
            asUintN: function() {},
            length: 1,
            name: "BigInt"
        }
    },
    BigInt64Array: function() {
        const bigInt64Array = {
            BYTES_PER_ELEMENT: 8,
            length: 3,
            name: "BigInt64Array"
        }
    },
    BigUint64Array: function() {
        const bigUint64Array = {
            BYTES_PER_ELEMENT: 8,
            length: 3,
            name: "BigUint64Array"
        }
    },
    Int8Array: function() {},
    Int16Array: function() {},
    Int32Array: function() {},
    Float32Array: function() {},
    Float64Array: function() {},
    Uint8Array: function() {},
    Uint8ClampedArray: function() {},
    Uint16Array: function() {},
    Uint32Array: function() {},













// =======================================================
    postMessage: function() {},
    stop: function() {},
    fetch: function() {},
    find: function() {},
    BarProp: function() {},
    cancelIdleCallback: function() {},
    captureEvents: function() {},
    createImageBitmap: function() {},
    getComputedStyle: function() {},
    getSelection: function() {},
    matchMedia: function() {},
    openDatabase: function() {},
    print: function() {},
    prompt: function() {},
    queueMicrotask: function() {},
    releaseEvents: function() {},
    requestIdleCallback: function() {},
    AbsoluteOrientationSensor: function() {},
    Accelerometer: function() {},
    AggregateError: function() {},
    AnalyserNode: function() {},
    Attr: function() {},
    BarcodeDetector: function() {},
    BaseAudioContext: function() {},
    BatteryManager: function() {},
    BeforeInstallPromptEvent: function() {},
    BeforeUnloadEvent: function() {},
    BiquadFilterNode: function() {},
    BroadcastChannel: function() {},
    ByteLengthQueuingStrategy: function() {},
    CDATASection: function() {},
    CharacterData: function() {},
    CloseEvent: function() {},
    Comment: function() {},
    CompositionEvent: function() {},
    CompressionStream: function() {},
    ConstantSourceNode: function() {},
    ConvolverNode: function() {},
    CountQueuingStrategy: function() {},
    DecompressionStream: function() {},
    DelayNode: function() {},
    DragEvent: function() {},
    DynamicsCompressorNode: function() {},
    EvalError: function() {},
    External: function() {},
    FeaturePolicy: function() {},
    FederatedCredential: function() {},
    FinalizationRegistry: function() {},
    FocusEvent: function() {},
    FragmentDirective: function() {},
    GainNode: function() {},
    Gyroscope: function() {},
    HashChangeEvent: function() {},
    Headers: function() {},
    IIRFilterNode: function() {},
    IdleDeadline: function() {},
    KeyframeEffect: function() {},
    LargestContentfulPaint: function() {},
    LinearAccelerationSensor: function() {},
    MouseEvent: function() {},
    NamedNodeMap: function() {},
    NavigationPreloadManager: function() {},
    NetworkInformation: function() {},
    Notification: function() {},
    Option: function() {},
    OrientationSensor: function() {},
    OscillatorNode: function() {},
    OverconstrainedError: function() {},
    PageTransitionEvent: function() {},
    PannerNode: function() {},
    PasswordCredential: function() {},
    Path2D: function() {},
    PointerEvent: function() {},
    PopStateEvent: function() {},
    ProcessingInstruction: function() {},
    ProgressEvent: function() {},
    Proxy: function() {},
    PublicKeyCredential: function() {},
    RadioNodeList: function() {},
    ReferenceError: function() {},
    RelativeOrientationSensor: function() {},
    RemotePlayback: function() {},
    ReportingObserver: function() {},
    Request: function() {},
    Response: function() {},
    Scheduling: function() {},
    ScriptProcessorNode: function() {},
    SecurityPolicyViolationEvent: function() {},
    Selection: function() {},
    ShadowRoot: function() {},
    StaticRange: function() {},
    StereoPannerNode: function() {},
    SubmitEvent: function() {},
    SubtleCrypto: function() {},
    SyncManager: function() {},
    SyntaxError: function() {},
    TaskAttributionTiming: function() {},
    TimeRanges: function() {},
    TrackEvent: function() {},
    TransformStream: function() {},
    TransitionEvent: function() {},
    TreeWalker: function() {},
    TypeError: function() {},
    UIEvent: function() {},
    URIError: function() {},
    UserActivation: function() {},
    VTTCue: function() {},
    ValidityState: function() {},
    VideoPlaybackQuality: function() {},
    VisualViewport: function() {},
    WaveShaperNode: function() {},
    WebSocket: function() {},
    WheelEvent: function() {},

    Worker: function() {},
    Worklet: function() {},
    ScreenOrientation: function() {},



    showDirectoryPicker: function() {},
    showOpenFilePicker: function() {},
    showSaveFilePicker: function() {},

    AbortController: function() {},
    AbortSignal: function() {},

    Audio: function() {},
    AudioBuffer: function() {},
    AudioBufferSourceNode: function() {},
    AudioContext: function() {},
    AudioDestinationNode: function() {},
    AudioListener: function() {},
    AudioNode: function() {},
    AudioParam: function() {},
    AudioParamMap: function() {},
    AudioProcessingEvent: function() {},
    AudioScheduledSourceNode: function() {},
    AudioWorklet: function() {},
    AudioWorkletNode: function() {},

    AuthenticatorAssertionResponse: function() {},
    AuthenticatorAttestationResponse: function() {},
    AuthenticatorResponse: function() {},

    BackgroundFetchManager: function() {},
    BackgroundFetchRecord: function() {},
    BackgroundFetchRegistration: function() {},

    Blob: function() {},
    BlobEvent: function() {},

    Bluetooth: function() {},
    BluetoothCharacteristicProperties: function() {},
    BluetoothDevice: function() {},
    BluetoothRemoteGATTCharacteristic: function() {},
    BluetoothRemoteGATTDescriptor: function() {},
    BluetoothRemoteGATTServer: function() {},
    BluetoothRemoteGATTService: function() {},
    BluetoothUUID: function() {},

    CSS: function() {},
    CSSAnimation: function() {},
    CSSConditionRule: function() {},
    CSSFontFaceRule: function() {},
    CSSGroupingRule: function() {},
    CSSImageValue: function() {},
    CSSImportRule: function() {},
    CSSKeyframeRule: function() {},
    CSSKeyframesRule: function() {},
    CSSKeywordValue: function() {},
    CSSMathInvert: function() {},
    CSSMathMax: function() {},
    CSSMathMin: function() {},
    CSSMathNegate: function() {},
    CSSMathProduct: function() {},
    CSSMathSum: function() {},
    CSSMathValue: function() {},
    CSSMatrixComponent: function() {},
    CSSMediaRule: function() {},
    CSSNamespaceRule: function() {},
    CSSNumericArray: function() {},
    CSSNumericValue: function() {},
    CSSPageRule: function() {},
    CSSPerspective: function() {},
    CSSPositionValue: function() {},
    CSSPropertyRule: function() {},
    CSSRotate: function() {},
    CSSRule: function() {},
    CSSRuleList: function() {},
    CSSScale: function() {},
    CSSSkew: function() {},
    CSSSkewX: function() {},
    CSSSkewY: function() {},
    CSSStyleDeclaration: function() {},
    CSSStyleRule: function() {},
    CSSStyleSheet: function() {},
    CSSStyleValue: function() {},
    CSSSupportsRule: function() {},
    CSSTransformComponent: function() {},
    CSSTransformValue: function() {},
    CSSTransition: function() {},
    CSSTranslate: function() {},
    CSSUnitValue: function() {},
    CSSUnparsedValue: function() {},
    CSSVariableReferenceValue: function() {},

    Cache: function() {},
    CacheStorage: function() {},

    CanvasCaptureMediaStreamTrack: function() {},
    CanvasGradient: function() {},
    CanvasPattern: function() {},
    CanvasRenderingContext2D: function() {},

    ChannelMergerNode: function() {},
    ChannelSplitterNode: function() {},

    Clipboard: function() {},
    ClipboardEvent: function() {},
    ClipboardItem: function() {},

    CookieChangeEvent: function() {},
    CookieStore: function() {},
    CookieStoreManager: function() {},

    Credential: function() {},
    CredentialsContainer: function() {},

    Crypto: function() {},
    CryptoKey: function() {},

    CustomElementRegistry: function() {},
    CustomEvent: function() {},

    DOMError: function() {},
    DOMException: function() {},
    DOMImplementation: function() {},
    DOMMatrix: function() {},
    DOMMatrixReadOnly: function() {},
    DOMParser: function() {},
    DOMPoint: function() {},
    DOMPointReadOnly: function() {},
    DOMQuad: function() {},
    DOMRect: function() {},
    DOMRectList: function() {},
    DOMRectReadOnly: function() {},
    DOMStringList: function() {},
    DOMStringMap: function() {},
    DOMTokenList: function() {},

    DataTransfer: function() {},
    DataTransferItem: function() {},
    DataTransferItemList: function() {},
    DataView: function() {},

    DeviceMotionEvent: function() {},
    DeviceMotionEventAcceleration: function() {},
    DeviceMotionEventRotationRate: function() {},
    DeviceOrientationEvent: function() {},

    Document: function() {},
    DocumentFragment: function() {},
    DocumentTimeline: function() {},
    DocumentType: function() {},

    Element: function() {},
    ElementInternals: function() {},

    Error: function() {},
    ErrorEvent: function() {},

    Event: function() {},
    EventCounts: function() {},
    EventSource: function() {},
    EventTarget: function() {},

    File: function() {},
    FileList: function() {},
    FileReader: function() {},
    FileSystemDirectoryHandle: function() {},
    FileSystemFileHandle: function() {},
    FileSystemHandle: function() {},
    FileSystemWritableFileStream: function() {},

    FontFace: function() {},
    FontFaceSetLoadEvent: function() {},

    FormData: function() {},
    FormDataEvent: function() {},

    Gamepad: function() {},
    GamepadButton: function() {},
    GamepadEvent: function() {},
    GamepadHapticActuator: function() {},

    Geolocation: function() {},
    GeolocationCoordinates: function() {},
    GeolocationPosition: function() {},
    GeolocationPositionError: function() {},

    HTMLAllCollection: function() {},
    HTMLAnchorElement: function() {},
    HTMLAreaElement: function() {},
    HTMLAudioElement: function() {},
    HTMLBRElement: function() {},
    HTMLBaseElement: function() {},
    HTMLBodyElement: function() {},
    HTMLButtonElement: function() {},
    HTMLCanvasElement: function() {},
    HTMLCollection: function() {},
    HTMLContentElement: function() {},
    HTMLDListElement: function() {},
    HTMLDataElement: function() {},
    HTMLDataListElement: function() {},
    HTMLDetailsElement: function() {},
    HTMLDialogElement: function() {},
    HTMLDirectoryElement: function() {},
    HTMLDivElement: function() {},
    HTMLDocument: function() {},
    HTMLElement: function() {},
    HTMLEmbedElement: function() {},
    HTMLFieldSetElement: function() {},
    HTMLFontElement: function() {},
    HTMLFormControlsCollection: function() {},
    HTMLFormElement: function() {},
    HTMLFrameElement: function() {},
    HTMLFrameSetElement: function() {},
    HTMLHRElement: function() {},
    HTMLHeadElement: function() {},
    HTMLHeadingElement: function() {},
    HTMLHtmlElement: function() {},
    HTMLIFrameElement: function() {},
    HTMLImageElement: function() {},
    HTMLInputElement: function() {},
    HTMLLIElement: function() {},
    HTMLLabelElement: function() {},
    HTMLLegendElement: function() {},
    HTMLLinkElement: function() {},
    HTMLMapElement: function() {},
    HTMLMarqueeElement: function() {},
    HTMLMediaElement: function() {},
    HTMLMenuElement: function() {},
    HTMLMetaElement: function() {},
    HTMLMeterElement: function() {},
    HTMLModElement: function() {},
    HTMLOListElement: function() {},
    HTMLObjectElement: function() {},
    HTMLOptGroupElement: function() {},
    HTMLOptionElement: function() {},
    HTMLOptionsCollection: function() {},
    HTMLOutputElement: function() {},
    HTMLParagraphElement: function() {},
    HTMLParamElement: function() {},
    HTMLPictureElement: function() {},
    HTMLPreElement: function() {},
    HTMLProgressElement: function() {},
    HTMLQuoteElement: function() {},
    HTMLScriptElement: function() {},
    HTMLSelectElement: function() {},
    HTMLShadowElement: function() {},
    HTMLSlotElement: function() {},
    HTMLSourceElement: function() {},
    HTMLSpanElement: function() {},
    HTMLStyleElement: function() {},
    HTMLTableCaptionElement: function() {},
    HTMLTableCellElement: function() {},
    HTMLTableColElement: function() {},
    HTMLTableElement: function() {},
    HTMLTableRowElement: function() {},
    HTMLTableSectionElement: function() {},
    HTMLTemplateElement: function() {},
    HTMLTextAreaElement: function() {},
    HTMLTimeElement: function() {},
    HTMLTitleElement: function() {},
    HTMLTrackElement: function() {},
    HTMLUListElement: function() {},
    HTMLUnknownElement: function() {},
    HTMLVideoElement: function() {},

    Image: function() {},
    ImageBitmap: function() {},
    ImageBitmapRenderingContext: function() {},
    ImageCapture: function() {},
    ImageData: function() {},

    IDBCursor: function() {},
    IDBCursorWithValue: function() {},
    IDBDatabase: function() {},
    IDBFactory: function() {},
    IDBIndex: function() {},
    IDBKeyRange: function() {},
    IDBObjectStore: function() {},
    IDBOpenDBRequest: function() {},
    IDBRequest: function() {},
    IDBTransaction: function() {},
    IDBVersionChangeEvent: function() {},

    InputDeviceCapabilities: function() {},
    InputDeviceInfo: function() {},

    InputEvent: function() {},
    IntersectionObserver: function() {},
    IntersectionObserverEntry: function() {},

    Keyboard: function() {},
    KeyboardEvent: function() {},
    KeyboardLayoutMap: function() {},

    LayoutShift: function() {},
    LayoutShiftAttribution: function() {},

    Lock: function() {},
    LockManager: function() {},

    MIDIAccess: function() {},
    MIDIConnectionEvent: function() {},
    MIDIInput: function() {},
    MIDIInputMap: function() {},
    MIDIMessageEvent: function() {},
    MIDIOutput: function() {},
    MIDIOutputMap: function() {},
    MIDIPort: function() {},

    MediaCapabilities: function() {},
    MediaDeviceInfo: function() {},
    MediaDevices: function() {},
    MediaElementAudioSourceNode: function() {},
    MediaEncryptedEvent: function() {},
    MediaError: function() {},
    MediaKeyMessageEvent: function() {},
    MediaKeySession: function() {},
    MediaKeyStatusMap: function() {},
    MediaKeySystemAccess: function() {},
    MediaKeys: function() {},
    MediaList: function() {},
    MediaMetadata: function() {},
    MediaQueryList: function() {},
    MediaQueryListEvent: function() {},
    MediaRecorder: function() {},
    MediaSession: function() {},
    MediaSource: function() {},
    MediaStream: function() {},
    MediaStreamAudioDestinationNode: function() {},
    MediaStreamAudioSourceNode: function() {},
    MediaStreamEvent: function() {},
    MediaStreamTrack: function() {},
    MediaStreamTrackEvent: function() {},

    MessageChannel: function() {},
    MessageEvent: function() {},
    MessagePort: function() {},

    MimeType: function() {},
    MimeTypeArray: function() {},

    MutationEvent: function() {},
    MutationObserver: function() {},
    MutationRecord: function() {},

    Node: function() {},
    NodeFilter: function() {},
    NodeIterator: function() {},
    NodeList: function() {},

    OfflineAudioCompletionEvent: function() {},
    OfflineAudioContext: function() {},

    OffscreenCanvas: function() {},
    OffscreenCanvasRenderingContext2D: function() {},

    PaymentAddress: function() {},
    PaymentInstruments: function() {},
    PaymentManager: function() {},
    PaymentMethodChangeEvent: function() {},

    PaymentRequest: function() {},
    PaymentRequestUpdateEvent: function() {},
    PaymentResponse: function() {},

    Performance: function() {},
    PerformanceElementTiming: function() {},
    PerformanceEntry: function() {},
    PerformanceEventTiming: function() {},
    PerformanceLongTaskTiming: function() {},
    PerformanceMark: function() {},
    PerformanceMeasure: function() {},
    PerformanceNavigation: function() {},
    PerformanceNavigationTiming: function() {},
    PerformanceObserver: function() {},
    PerformanceObserverEntryList: function() {},
    PerformancePaintTiming: function() {},
    PerformanceResourceTiming: function() {},
    PerformanceServerTiming: function() {},
    PerformanceTiming: function() {},

    PeriodicSyncManager: function() {},
    PeriodicWave: function() {},

    PermissionStatus: function() {},
    Permissions: function() {},

    PictureInPictureEvent: function() {},
    PictureInPictureWindow: function() {},

    Plugin: function() {},
    PluginArray: function() {},

    Presentation: function() {},
    PresentationAvailability: function() {},
    PresentationConnection: function() {},
    PresentationConnectionAvailableEvent: function() {},
    PresentationConnectionCloseEvent: function() {},
    PresentationConnectionList: function() {},
    PresentationReceiver: function() {},
    PresentationRequest: function() {},

    Promise: function() {},
    PromiseRejectionEvent: function() {},

    PushManager: function() {},
    PushSubscription: function() {},
    PushSubscriptionOptions: function() {},

    RTCCertificate: function() {},
    RTCDTMFSender: function() {},
    RTCDTMFToneChangeEvent: function() {},
    RTCDataChannel: function() {},
    RTCDataChannelEvent: function() {},
    RTCDtlsTransport: function() {},
    RTCEncodedAudioFrame: function() {},
    RTCEncodedVideoFrame: function() {},
    RTCError: function() {},
    RTCErrorEvent: function() {},
    RTCIceCandidate: function() {},
    RTCIceTransport: function() {},
    RTCPeerConnection: function() {},
    RTCPeerConnectionIceErrorEvent: function() {},
    RTCPeerConnectionIceEvent: function() {},
    RTCRtpReceiver: function() {},
    RTCRtpSender: function() {},
    RTCRtpTransceiver: function() {},
    RTCSctpTransport: function() {},
    RTCSessionDescription: function() {},
    RTCStatsReport: function() {},
    RTCTrackEvent: function() {},

    Range: function() {},
    RangeError: function() {},

    ReadableStream: function() {},
    ReadableStreamDefaultReader: function() {},

    ResizeObserver: function() {},
    ResizeObserverEntry: function() {},
    ResizeObserverSize: function() {},

    SVGAElement: function() {},
    SVGAngle: function() {},
    SVGAnimateElement: function() {},
    SVGAnimateMotionElement: function() {},
    SVGAnimateTransformElement: function() {},
    SVGAnimatedAngle: function() {},
    SVGAnimatedBoolean: function() {},
    SVGAnimatedEnumeration: function() {},
    SVGAnimatedInteger: function() {},
    SVGAnimatedLength: function() {},
    SVGAnimatedLengthList: function() {},
    SVGAnimatedNumber: function() {},
    SVGAnimatedNumberList: function() {},
    SVGAnimatedPreserveAspectRatio: function() {},
    SVGAnimatedRect: function() {},
    SVGAnimatedString: function() {},
    SVGAnimatedTransformList: function() {},
    SVGAnimationElement: function() {},
    SVGCircleElement: function() {},
    SVGClipPathElement: function() {},
    SVGComponentTransferFunctionElement: function() {},
    SVGDefsElement: function() {},
    SVGDescElement: function() {},
    SVGElement: function() {},
    SVGEllipseElement: function() {},
    SVGFEBlendElement: function() {},
    SVGFEColorMatrixElement: function() {},
    SVGFEComponentTransferElement: function() {},
    SVGFECompositeElement: function() {},
    SVGFEConvolveMatrixElement: function() {},
    SVGFEDiffuseLightingElement: function() {},
    SVGFEDisplacementMapElement: function() {},
    SVGFEDistantLightElement: function() {},
    SVGFEDropShadowElement: function() {},
    SVGFEFloodElement: function() {},
    SVGFEFuncAElement: function() {},
    SVGFEFuncBElement: function() {},
    SVGFEFuncGElement: function() {},
    SVGFEFuncRElement: function() {},
    SVGFEGaussianBlurElement: function() {},
    SVGFEImageElement: function() {},
    SVGFEMergeElement: function() {},
    SVGFEMergeNodeElement: function() {},
    SVGFEMorphologyElement: function() {},
    SVGFEOffsetElement: function() {},
    SVGFEPointLightElement: function() {},
    SVGFESpecularLightingElement: function() {},
    SVGFESpotLightElement: function() {},
    SVGFETileElement: function() {},
    SVGFETurbulenceElement: function() {},
    SVGFilterElement: function() {},
    SVGForeignObjectElement: function() {},
    SVGGElement: function() {},
    SVGGeometryElement: function() {},
    SVGGradientElement: function() {},
    SVGGraphicsElement: function() {},
    SVGImageElement: function() {},
    SVGLength: function() {},
    SVGLengthList: function() {},
    SVGLineElement: function() {},
    SVGLinearGradientElement: function() {},
    SVGMPathElement: function() {},
    SVGMarkerElement: function() {},
    SVGMaskElement: function() {},
    SVGMatrix: function() {},
    SVGMetadataElement: function() {},
    SVGNumber: function() {},
    SVGNumberList: function() {},
    SVGPathElement: function() {},
    SVGPatternElement: function() {},
    SVGPoint: function() {},
    SVGPointList: function() {},
    SVGPolygonElement: function() {},
    SVGPolylineElement: function() {},
    SVGPreserveAspectRatio: function() {},
    SVGRadialGradientElement: function() {},
    SVGRect: function() {},
    SVGRectElement: function() {},
    SVGSVGElement: function() {},
    SVGScriptElement: function() {},
    SVGSetElement: function() {},
    SVGStopElement: function() {},
    SVGStringList: function() {},
    SVGStyleElement: function() {},
    SVGSwitchElement: function() {},
    SVGSymbolElement: function() {},
    SVGTSpanElement: function() {},
    SVGTextContentElement: function() {},
    SVGTextElement: function() {},
    SVGTextPathElement: function() {},
    SVGTextPositioningElement: function() {},
    SVGTitleElement: function() {},
    SVGTransform: function() {},
    SVGTransformList: function() {},
    SVGUnitTypes: function() {},
    SVGUseElement: function() {},
    SVGViewElement: function() {},



    Sensor: function() {},
    SensorErrorEvent: function() {},

    ServiceWorker: function() {},
    ServiceWorkerContainer: function() {},
    ServiceWorkerRegistration: function() {},

    SharedArrayBuffer: function() {},
    SharedWorker: function() {},

    SourceBuffer: function() {},
    SourceBufferList: function() {},

    SpeechSynthesisErrorEvent: function() {},
    SpeechSynthesisEvent: function() {},
    SpeechSynthesisUtterance: function() {},

    Storage: function() {},
    StorageEvent: function() {},
    StorageManager: function() {},

    StylePropertyMap: function() {},
    StylePropertyMapReadOnly: function() {},
    StyleSheet: function() {},
    StyleSheetList: function() {},

    Text: function() {},
    TextDecoder: function() {},
    TextDecoderStream: function() {},
    TextEncoder: function() {},
    TextEncoderStream: function() {},
    TextEvent: function() {},
    TextMetrics: function() {},
    TextTrack: function() {},
    TextTrackCue: function() {},
    TextTrackCueList: function() {},
    TextTrackList: function() {},

    Touch: function() {},
    TouchEvent: function() {},
    TouchList: function() {},

    TrustedHTML: function() {},
    TrustedScript: function() {},
    TrustedScriptURL: function() {},
    TrustedTypePolicy: function() {},
    TrustedTypePolicyFactory: function() {},

    URL: function() {},
    URLSearchParams: function() {},

    USB: function() {},
    USBAlternateInterface: function() {},
    USBConfiguration: function() {},
    USBConnectionEvent: function() {},
    USBDevice: function() {},
    USBEndpoint: function() {},
    USBInTransferResult: function() {},
    USBInterface: function() {},
    USBIsochronousInTransferPacket: function() {},
    USBIsochronousInTransferResult: function() {},
    USBIsochronousOutTransferPacket: function() {},
    USBIsochronousOutTransferResult: function() {},
    USBOutTransferResult: function() {},

    WakeLock: function() {},
    WakeLockSentinel: function() {},

    WeakMap: function() {},
    WeakRef: function() {},
    WeakSet: function() {},

    WebGL2RenderingContext: function() {},
    WebGLActiveInfo: function() {},
    WebGLBuffer: function() {},
    WebGLContextEvent: function() {},
    WebGLFramebuffer: function() {},
    WebGLProgram: function() {},
    WebGLQuery: function() {},
    WebGLRenderbuffer: function() {},
    WebGLRenderingContext: function() {},
    WebGLSampler: function() {},
    WebGLShader: function() {},
    WebGLShaderPrecisionFormat: function() {},
    WebGLSync: function() {},
    WebGLTexture: function() {},
    WebGLTransformFeedback: function() {},
    WebGLUniformLocation: function() {},
    WebGLVertexArrayObject: function() {},

    WritableStream: function() {},
    WritableStreamDefaultWriter: function() {},

    XMLDocument: function() {},
    XMLHttpRequest: function() {},
    XMLHttpRequestEventTarget: function() {},
    XMLHttpRequestUpload: function() {},
    XMLSerializer: function() {},

    XPathEvaluator: function() {},
    XPathExpression: function() {},
    XPathResult: function() {},

    XRAnchor: function() {},
    XRAnchorSet: function() {},
    XRBoundedReferenceSpace: function() {},
    XRDOMOverlayState: function() {},
    XRFrame: function() {},
    XRHitTestResult: function() {},
    XRHitTestSource: function() {},
    XRInputSource: function() {},
    XRInputSourceArray: function() {},
    XRInputSourceEvent: function() {},
    XRInputSourcesChangeEvent: function() {},
    XRLayer: function() {},
    XRPose: function() {},
    XRRay: function() {},
    XRReferenceSpace: function() {},
    XRReferenceSpaceEvent: function() {},
    XRRenderState: function() {},
    XRRigidTransform: function() {},
    XRSession: function() {},
    XRSessionEvent: function() {},
    XRSpace: function() {},
    XRSystem: function() {},
    XRTransientInputHitTestResult: function() {},
    XRTransientInputHitTestSource: function() {},
    XRView: function() {},
    XRViewerPose: function() {},
    XRViewport: function() {},
    XRWebGLLayer: function() {},
    XSLTProcessor: function() {},

    webkitRequestFileSystem: function() {},
    webkitResolveLocalFileSystemURL: function() {},
    WebKitCSSMatrix: function() {},
    WebKitMutationObserver: function() {},
    webkitMediaStream: function() {},
    webkitRTCPeerConnection: function() {},
    webkitSpeechGrammar: function() {},
    webkitSpeechGrammarList: function() {},
    webkitSpeechRecognition: function() {},
    webkitSpeechRecognitionError: function() {},
    webkitSpeechRecognitionEvent: function() {},
    webkitURL: function() {}
}