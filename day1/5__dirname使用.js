const fs = require('fs')
console.log(__dirname);
fs.readFile(__dirname + '/完成修改.txt', 'utf8', function(err, dataStr) {
    if (err) { return console.log('读取失败' + err.message); }
    console.log(dataStr);
})