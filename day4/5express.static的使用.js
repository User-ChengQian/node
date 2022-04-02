//express.static可以托管项目文件夹下的资源
//导入express
const express = require('express')
    //创建服务器
const app = express()
    //静态资源服务器
    // app.use(express.static('./3test'))
    //ps:此时访问文件资源时不需要带入3test这个目录
    //可以通过use添加参数一来更改url需要访问的地址加上这个目录
    //挂载路径前缀
app.use('/3test', express.static('./3test'))
    // --------------------------------
    // app.use(express.static('public'))
    // app.use(express.static('files'))
    //当2个文件中均有index.html文件时,当用户进行访问时会返回第一个被静态托管文件夹中的index.html文件
    //启动服务器
app.listen(80, function(req, res) {
    console.log('express server runing at htpp://127.0.0.1');
})