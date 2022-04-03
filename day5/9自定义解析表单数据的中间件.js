const express = require('express')
const app = express()
    //导入node.js内置的querystring模块
const qs = require('querystring')

//这是解析表单数据的中间件
app.use((req, res, next) => {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })
    req.on('end', () => {
        const body = qs.parse(str)
        req.body = body
        next()
    })
})
app.post('/', (req, res) => {
    res.send(req.body)
})


app.listen(80, () => {
    console.log('running at the http://127.0.0.1');
})