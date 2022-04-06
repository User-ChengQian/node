// 用户路由模块
const express = require('express')
    //创建router路由对象
const router = express.Router()
    //导入函数处理模块
const userHandler = require('../router_handler/user')



//用户注册模块
router.post('/reguser', userHandler.regUser)



//用户登录模块
router.post('/login', userHandler.login)



//共享路由
module.exports = router