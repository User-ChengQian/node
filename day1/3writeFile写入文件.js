//导入fs模块
const fs = require('fs')
    //writeFile会创建文件,当不能创建路径(文件夹)
fs.writeFile('../1/1.txt', ',确实', function(err) {
    if (err) { return console.log('写入失败\n' + err.message); }
    console.log('写入成功');
})