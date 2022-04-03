//错误中间件一定要放在路由后面
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    //抛出一个自定义错误
    throw new Error('服务器发送错误')
    res.send('请求方式是' + req.method)

})
app.use((err, req, res, next) => {
    console.log('发生错误' + err.message);
    res.end('404')
})



app.listen(80, (req, res) => {
    console.log('running at 127.0.0.1');
})