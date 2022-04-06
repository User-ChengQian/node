//express模块
const express = require('express')
const app = express()
    //cors模块
const cors = require('cors')
    //优化处理失败res.send代码
app.use(function(req, res, next) {
    res.cc = function(err, status = 1) {
        res.send({
            status,
            // 判断err是错误对象(系统出错),还是字符串(自定义错误)
            message: err instanceof Error ? err.message : err

        })
    }
    next()
})
app.use(cors())

//post解析表单数据中间件
app.use(express.urlencoded({ extended: false }))


//--------------------导入路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)


app.use((err, req, res, next) => {
    //捕获验证失败的错误
    if (err instanceof joi.ValidationError) return res.cc(err + '数据验证失败')
    res.cc(err)
})



app.listen(80, () => {
    console.log('http://127.0.0.1');
})