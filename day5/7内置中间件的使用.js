// express中间件有express.static,express.json,express.urlencoded
const express = require('express')
const app = express()

// 通过express.json()解析表单中的json格式数据,这是一个中间件
//因此使用use定义为全局中间件

app.use(express.json())
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('ok')
})

//通过express.urlencoded()来解析表单中的url-encode格式数据
app.use(express.urlencoded({ extended: false }))
app.post('/post', (req, res) => {
    console.log(req.body);
    res.send('ok2')
})

app.listen(80, () => {
    console.log('running at http://127.0.0.1');
})