//导入http模块
const http = require('http')
    //创建服务器
const server = http.createServer()
    //为服务器绑定响应事件
server.on('request', function(req, res) {
        console.log('someone visiting the web');
        res.end('<h1>4044444</>')
    })
    //启动服务器
server.listen(8080, function() {
    console.log('please visit the 127.0.0.1:80');
})