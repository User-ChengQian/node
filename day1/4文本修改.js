const fs = require('fs')
var newarr = []
var st = ''
fs.readFile('../成绩.txt', 'utf8', function(err, dataStr) {
    if (err) { return console.log('读取失败' + err.message); }
    console.log(dataStr);
    //字符串转数组,split
    var arr = dataStr.split(' ')
        //用空格分隔开来
    console.log(arr);
    //循环遍历每一项.把等号替换为冒号
    arr.forEach(item => {
        // item = item + '\n'
        newarr.push(item.replace('=', ':'))

    })
    console.log(newarr);
    st = newarr.join('\n')
    console.log(st);
    fs.writeFile('./完成修改.txt', st, function(err) {
        if (err) { return console.log('写入失败'); }
    })
})