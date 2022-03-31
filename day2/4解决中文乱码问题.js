//导入HTTP模块
const http = require('http');
//创建服务器
const server = http.createServer();
//服务器响应
server.on('request', function(req, res) {
        res.setHeader('content-Type', 'text/html;charset=utf-8')
        res.end('<h1>中文乱码解决</br>' + '你请求的url地址为' + `${req.url}` + '</br>请求方式为' + `${req.method}` + '</h1>')

    })
    //开启服务器
server.listen(80, function() {
    console.log('pleace visit 127.0.0.1');
})