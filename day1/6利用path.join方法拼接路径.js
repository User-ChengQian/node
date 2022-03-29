const fs = require('fs')
const path = require('path')
var pth = path.join('a/', '/b', '/c', 'abc.txt')
console.log(pth);
console.log(path.join(__dirname + '/完成修改.txt'));
var finnalpath = path.join(__dirname + '/完成修改.txt')
fs.readFile(finnalpath, 'utf8', function(err, dataStr) {
    if (err) { return console.log('读取失败' + err.message); }
    console.log(dataStr);
})