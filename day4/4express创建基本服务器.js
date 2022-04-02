//按照express
//导入express模块
const express = require('express')
    //创建服务器
const app = express()
    //监听get请求
app.get('/', function(req, res) {
        //内容响应给客户端
        res.send('这是' + req.method + '请求');
    })
    //监听post请求
app.post('/', function(req, res) {
    //内容响应给客户端
    res.send('这是' + req.method + '请求');
})

//req.query拿到以查询字符串方式发送到服务器的参数
app.get('/user', function(req, res) {
        res.send(req.query)
    })
    //获取url的动态参数
app.post('/user/:id/:num/:w', function(req, res) {
    res.send(req.params)
})


//启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})