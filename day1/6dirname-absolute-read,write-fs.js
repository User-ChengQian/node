const path = require('path')
const fs = require('fs')
console.log(__dirname); //__dirname获取当前目录文件夹
//__dirname配合文件名可以写入和读取某个文件绝对地址
fs.readFile(path.join(__dirname, '1myfirstnode.js'), 'utf8', (err, doc) => {
    console.log(err);
    console.log(doc);
})