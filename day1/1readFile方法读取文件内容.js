//导入fs模块
const fs = require('fs');
//path,encoded,callback(err,dataStr)错误信息和成功结果
fs.readFile('../1.txt', 'utf8', function(err, dataStr) {
    console.log(err);
    console.log('-------------');
    console.log(dataStr);
})