const fs = require('fs')
const path = require('path')
    //js正则匹配
var js = /<script>[\s\S]*<\/script>/
    //css正则匹配
var css = /<style>[\s\S]*<\/style>/
    //读取文件
fs.readFile(path.join(__dirname + '/../index.html'), 'utf8', function(err, dataStr) {
    if (err) { return console.log('读取失败' + err.message); }
    //设置一个正则表达式将css,js文件分离出来
    //使用exec截取到index.html的文件中的js
    var fcss = css.exec(dataStr)
        //使用exec截取到index.html的文件中的css
    const css1 = fcss[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile('./index.css', css1, function(err) {
            if (err) { return console.log('css写入失败' + err.message); }
        })
        //将css写入
        //拿到js匹配结果
    var fjs = js.exec(dataStr)
    const js1 = fjs[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile('./index.js', js1, function(err) {
        if (err) { return console.log('js写入失败' + err.message); }
    })
    var fhtml = dataStr.replace(fcss, '<link rel="stylesheet" href="./index.css">').replace(fjs, '<script src="./index.js"></script>')
    fs.writeFile('./index.html', fhtml, function(err) {
        if (err) { return console.log('html写入失败' + err.message); }
    })
})