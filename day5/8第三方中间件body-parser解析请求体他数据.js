const express = require('express')
const app = express()
var bodyParser = require('body-parser')
    //接受urlendcoded格式的数据
app.use(bodyParser.urlencoded({ extended: false }))
    //接受body下json数据格式请求("我":"你")
app.use(bodyParser.json())

app.post('/', (req, res) => {
    console.log(req.body);
    res.end('ok')
})

app.listen(80, () => {
    console.log('runnig at the http://127.1.1.0');
})