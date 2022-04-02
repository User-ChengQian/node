//express路由:指的是客户端请求与服务器处理函数之间的映射关系
// expressl=路由组成3部分:1请求类型2请求url地址3处理函数
// get路由
// app.get('/', function(req, res) { res.send('hello') })
//post路由
// app.post('/', function(req, res) { res.send('hello') })


//---------------------
//导入模块
const express = require('express')
    //创建服务器
const app = express()
    //挂载路由
app.get('/', function(req, res) {
    res.send('哇哈哈')
})
app.post('/', function(req, res) {
        res.send('喜刷刷')
    })
    //启动服务器
app.listen(80, function(req, res) {
    console.log('express server running at http://127.0.0.1');
})