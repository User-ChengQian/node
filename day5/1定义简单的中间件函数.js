const express = require('express')
const app = express()
    //使用use定义全局中间件
app.use((req, res, next) => {
        console.log('中间件被运行');
        next()
    })
    //post路由
app.post('/', function(req, res) {
        res.send("你请求的方式是" + req.method);
    })
    // get路由
app.get('/', (req, res) => {
    res.send('你的请求方式是' + req.method);
})



app.listen(80, () => {
    console.log('running at http://127.0.0.1');
})