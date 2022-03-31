//导入http模块
const http = require('http')
    //创建服务器
const server = http.createServer()
    //添加服务器响应事件
server.on('request', function(req, res) {
        //获取用户请求的url
        const url = req.url
        var content = '<h1>404访问错误</h1>'
        if (url == '/' || url == '/index.html') {
            content = '<h1>这是首页index.html</h1>'
        } else if (url == '/about.html') {
            content = '<h1>这是关于页面</h1>'
        }
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end(content)

    })
    //开启服务器
server.listen(80, function() {
    console.log('server running at 127.0.0.1');
})