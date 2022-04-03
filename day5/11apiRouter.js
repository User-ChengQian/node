//需要用express内置模块router来路由
//1.0导入express
const express = require('express')
const apirouter = express.Router()
    // 2.0编写get接口
apirouter.get('/get', (req, res) => {
        // 2.1通过req.query拿到get请求数据
        const query = req.query
            // 2.2调用res.send()方法,向客户端响应处理结果
        res.send({
            status: 0, //0为成功,1为失败
            msg: 'get请求成功', //状态描述
            data: query //需要响应给客户端的数据
        })
    })
    // 3.0编写post接口
apirouter.post('/post', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: 'post请求成功',
        data: body,
    })
})


//1.1 对外共享apirouter实例
module.exports = apirouter