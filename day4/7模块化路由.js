//为了方便对路由进行模块化管理,express不建议将路由之间挂载到app(创建服务器实例)
//而是将路由抽离为单独的模块(自定义js模块)
// 1使用express创建服务器
const express = require('express')
    //1.1创建服务器
const app = express()
    //2导入自定义模块
const router = require('./7test')
    // 2.1注册路由模块
app.use('/', router)
    // 使用use是中间件,允许访问post和get请求方式
    //1.2启动服务器
app.listen(80, () => {
    console.log('http://127.0.0.1')

})