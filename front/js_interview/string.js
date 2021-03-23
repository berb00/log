
// 写一个名为toCamelCase的方法，实现把类似'abc-def-ghi'的字符转换成'abcDefGhi'。
// 写一个名为toDashJoin的方法，实现把驼峰形式字符串'abcDefGhi'转换成'abc-def-ghi'。
// 写一个名为toCapitalize的方法，实现首字母大写功能（原来字母就是大写的不处理），如'i like css'转换成'I Like Css'。
// 写一个名为toBetterUrl的方法，实现把类似'CSS value type'转换成'css-value-type'（只需考虑空格和大小写处理）。 

var str1 = 'abc-def-ghi'
var str2 = 'abcDefGhi'
var str3 = 'i like css'
var str4 = 'CSS value type'

function toCamelCase(str) {
    var len = str.length
    str = str.split('')
    for (var i = 0; i < len; i++) {
        if (str[i] === '-') {
            str[i+1] = str[i+1].toUpperCase()
        }
    }
    return str.join('').split('-').join('')
}

function toDashJoin(str) {
    var len = str.length
    str = str.split('')
    for (var i = 0; i < len; i++) {
        var code = str[i].charCodeAt()
        if (code >= 65 && code <= 91) {
            str[i] = '-' + str[i].toLowerCase()
        }
    }
    return str.join('')
}

function toCapitalize(str) {
    var len = str.length
    str = str.split('')
    if (str[1] == ' ') {
        str[0] = str[0].toUpperCase()
    }
    for (var i = 0; i < len; i++) {
        if (str[i] == ' ') {
            str[i+1] = str[i+1].toUpperCase()
        }
    }
    return str.join('')
}

function toBetterUrl(str) {
    var len = str.length
    str = str.toLowerCase().split('')
    for (var i = 0; i < len; i++) {
        if (str[i] == ' ') {
            str[i] = '-'
        }
    }
    return str.join('')
}

// a: 97   A: 65
console.log(toCamelCase(str1))
console.log(toDashJoin(str2))
console.log(toCapitalize(str3))
console.log(toBetterUrl(str4))
