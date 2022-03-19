const fs = require('fs');
fs.writeFile('1myfristnode.js', '要写入的内容', err => {
    if (err != null) {
        console.log(err);
        return;
    }
    console.log('文件写入成功');
})