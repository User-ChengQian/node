// 局部中中间件是:中间件与路由的混合,仅支持post和get等中的一种
// 定义一个中间件函数变量
// ps:注意添加next()函数
const express = require('express')
const app = express()
const cq = (req, res, next) => {
    console.log('调用了局部生效的中间件');
    next()
}
app.get('/', cq, (req, res) => {
    res.send('这是局部的中间件,请求类型为' + req.method)
})
app.listen(80, () => {
    console.log('running at http://127.0.0.1');
})