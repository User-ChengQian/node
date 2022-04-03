//多个中间件共享同一份req和res,基于这种特性,我们可以在上游中间件中
//统一为req和res对象添加自定义属性和方法,使得下游中间件或者路由使用
const express = require('express')
const app = express()
app.use((req, res, next) => {
    const time = Date.now()
    console.log(time);
    req.startime = time
    next()
})

app.get('/', (req, res) => {
    res.send('发起了' + req.method + '时间是' + req.startime)
})
app.post('/', (req, res) => {
    res.send('发起了' + req.method + '时间是' + req.startime)
})
app.listen(80, () => {
    console.log('runnig at htpp://127.0.0.1');
})