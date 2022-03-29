//导入fs模块
const fs = require('fs')
fs.readFile('../1.txt', 'utf8', function(err, dataStr) {
        if (err) { return console.log('读取失败'); }
        console.log('读取成功\n' + dataStr);
    })
    //读取成功
    // fs.readFile('../12.txt', 'utf8', function(err, dataStr) {
    //         if (err) { return console.log('读取失败'); }
    //         console.log('读取成功\n' + dataStr);
    //     })
    // 读取失败