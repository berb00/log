// 数组
// 去重

let arr1 = [1,0,0,2,9,8,3,1];
let arr2 = [1, 5, 6, 0, 7, 3, 0, 5, 9,5,5];


// ES6-Set
function uniqueSet(arr) {
    return Array.from(new Set(arr))
}

// ES6-Map
function uniqueMap(arr) {
/*
    创建一个空Map数据结构，遍历需要去重的数组，把数组的每一个元素作为key存到Map中。
    由于Map中不会出现相同的key值，所以最终得到的就是去重后的结果。
*/
    let map = new Map()
    let arr1 = []
    for (let i = 0, len = arr.length; i < len; i++) {
        if (map.has(arr[i])) {      // 判断是否存在该key值
            map.set(arr[i], true)
        } else {
            map.set(arr[i], false)
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

// 使用双重for循环，再利用数组的splice方法去重
function uniqueFor(arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
        for (var j = i + 1, len = arr.length; j < len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;        // 每删除一个数j的值就减1
                len--;      // j值减小时len也要相应减1（减少循环次数，节省性能）   
            }
        }
    }
    return arr;
}

// indexOf
function uniqueIndexOf(arr){
    var arr1 = [];       // 新建一个数组来存放arr中的值
    for(var i=0,len=arr.length;i<len;i++){
        if(arr1.indexOf(arr[i]) === -1){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

// includes
function uniqueIncludes( arr ){
    var arr1 = [];
    for(var i=0,len=arr.length;i<len;i++){
        if( !arr1.includes( arr[i] ) ){      // 检索arr1中是否含有arr中的值
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

// filter
function uniqueFilter( arr ){
    // 如果新数组的当前元素的索引值 == 该元素在原始数组中的第一个索引，则返回当前元素
    return arr.filter(function(item,index){
        return arr.indexOf(item,0) === index;
    });
}

// sort
function uniqueSort( arr ){
    arr = arr.sort();
    console.log(arr);

    var arr1 = [arr[0]];
    for(var i=1,len=arr.length;i<len;i++){
        if(arr[i] !== arr[i-1]){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

// 利用对象的属性不能相同的特点去重（不建议用，有缺陷）
function uniqueObject(arr){
    var arr1 = [];
    var obj = {};
    for(var i =0,len=arr.length;i<len;i++){
        if(!obj[arr[i]]) {
            arr1.push(arr[i]);
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    return arr1;
}


// 递归
function uniqueRecursion( arr ) {
    var arr1 = arr;
    var len = arr1.length;
    arr1.sort((a,b)=>{
        return a-b
    })
    function loop(index){
        if(index >= 1){
            if(arr1[index] === arr1[index-1] ){
                arr1.splice(index,1);
            }
            loop(index - 1);  // 递归loop，然后数组去重
        }
    }
    loop(len-1);
    return arr1
}