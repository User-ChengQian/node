const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }))
    //为了防止冲突，必须在cors之前声明jsonp接口
    //jsonp的路由并不放在apirouter中
app.get('/api/jsonp', (req, res) => {
        const funcName = req.query.callback
        const data = { name: 'zs', age: 22 }
        const scriptStr = `${funcName}(${JSON.stringify(data)})`
        res.send(scriptStr)
    })
    //导入cors跨域模块
const cors = require('cors')
    //在路由前使用cors中间件
app.use(cors())
    //1.2导入路由模块
const apirouter = require('./11apiRouter');
//1.3把路由模块注册在app上
app.use('/api', apirouter)

app.listen(80, () => {
    console.log('running at the http://127.0.0.1');
})