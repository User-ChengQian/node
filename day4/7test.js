//导入express模块
var express = require('express')
    //创建router路由对象
var router = express.Router()
    //将路由挂载到router对象上
router.get('/get', function(req, res) {
    res.send('这是router的' + req.method + "请求")
})
router.post('/post', function(req, res) {
        res.send('这是router的' + req.method + "请求")
    })
    //对外共享路由对象
    // module.exports = {
    //     router
    // }
    // exports = router
module.exports = router //必须这样共享router