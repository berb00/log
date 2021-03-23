



// 阅文
// 生成16位随机数
const generateRandomNum16 = function () {
    var num = String(Math.random()).split('.')[1].slice(0, 16);
    return num
}

// 输入一个字符串获取16位随机数 相同字符串获取结果相同
const seed = function (str) {
    let num = str.split('').map(char => char.charCodeAt()).join(''); // 变成数值
    return Math.sin(num).toString().split('.')[1].slice(0, 16);     // 变成随机数值
}


var str = 'CanvasRenderingContext2D'
var str2 = f1(str)
var str3 = f2(str2)
var number = f3(str3)
console.log("str2=" + str2)
console.log("str3=" + str3)
console.log("number="+ number)

// 字符串去重
function f1 (str) {
    let arr = str.split("");
    arr = Array.from(new Set(arr))
    return arr.join("");
}

// 字符串反转
function f2 (str) {
    let arr = str.split("").reverse().join("");
    return arr;
}


// 返回str3字符串中大写字母的个数
function f3 (str3) {
   let number = 0;
   for (let i = 0; i < str3.length; i++) {
      if (str3[i] >= 'A' && str3[i] <= 'Z') number++;
   }
   return number;
}




// Promise封装ajax
function ajaxPromise() {
    return new Promise(function(resolve, reject){
        var ajax = new XMLHttpRequest()
        ajax.open('OPEN', 'http://www.baidu.com', true)
        ajax.onload = function () {
            if (ajax.redayState === 4 && ajax.status === 200) {
                resolve(ajax.response)
            } else {
                reject(ajax.statusText)
            }
        }
        ajax.onerror = function () {
            reject(Error('网络错误'))
        }
    })
}

// 防抖
function debounce(fn, delay) {
    var timer = null
    return function() {
        if(timer) clearTimeout(timer)
        timer = setTimeout(fn, delay)
    }
}

// 节流throttle代码(定时器)
function throttle1(fn, delay) {
    var timer = null
    return function() {
        var context = this
        var args = arguments
        if (!timer) {
            timer = setTimeout(function() {
                fn.apply(context, args)
                timer = null
            }, delay)
        }
    }
} 
// 节流throttle代码(时间戳)
function throttle2(fn, delay) {
    var prev = Date.now()
    return function() {
        var context = this
        var args = arguments
        var now = Date.now()
        if (now - prev >= delay) {
            fn.apply(context, args)
            prev = Date.now()
        }
    }
}

function handle() {
    console.log(Math.random())
}
document.addEventListener('keydown', throttle1(handle, 1000))

