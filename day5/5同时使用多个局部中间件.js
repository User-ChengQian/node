const express = require('express')
const app = express()
const mw1 = (req, res, next) => {
    console.log('调用了第一个局部生效的中间件');
    next()
}
const mw2 = (req, res, next) => {
        console.log('调用了第二个局部生效的中间件');
        next()
    }
    //创建路由
app.get('/', mw1, (req, res) => {
    res.send('Home page')
})
app.get('/user', mw2, (req, res) => {
    res.send('user page')
})



app.listen(80, () => {
    console.log('running at http://127.0.0.1');
})