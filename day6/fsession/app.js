const express = require('express')

const app = express()
    //托管静态资源
    //配置session
const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

// 托管静态页面
app.use(express.static('./page'))
app.use(express.urlencoded({ extended: false }))
    //解析post数据


//api/login
app.post('/api/login', (req, res) => {
        //post客户端响应的数据是req.body
        if (req.body.username != 'admin' | req.body.password != '123') {
            return res.send({ status: 1, msg: '密码错误' })
        }
        //挂载req.body和登录状态
        req.session.user = req.body
        req.session.islogin = true

        res.send({ status: 0, msg: '登录成功' })
    })
    ///api/username



app.get('/api/username', (req, res) => {
    if (!req.session.islogin) {
        return res.send({ status: 1, msg: '请登录' })
    }
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.username,
    })
})




// /api/logou
app.post('/api/logout', (req, res) => {
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出成功'
    })
})



app.listen(80, function() {
    console.log('http://127.0.0.1:80');
})