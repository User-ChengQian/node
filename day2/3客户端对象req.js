//调用http模块
const http = require('http')
    //创建服务器
const server = http.createServer()
    //服务器请求事件
server.on('request', function(req, res) {
        console.log(req.method);
        console.log(req.url);
    })
    //开启服务器
server.listen(8080, function() {
    console.log('plaece visit 127.0.0.1:8080');
})