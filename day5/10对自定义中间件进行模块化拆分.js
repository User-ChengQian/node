// 导入 express 模块
const express = require('express')
    // 创建 express 的服务器实例
const app = express()
    //导入自定义中间件模块
const cbp = require('./10custom-body-parser')
    //注册为全局中间件
app.use(cbp)
    //路由
app.post('/', (req, res) => {
    res.send(req.body)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function() {
    console.log('Express server running at http://127.0.0.1')
})