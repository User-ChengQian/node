const http = require('http')
const server = http.createServer()
server.on('request', function(req, res) {
    console.log('someone visit');
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(`本次请求的方式是${req.method},请求url为${req.url}`);

})
server.listen(80, function() {
    console.log('server running http://127.0.0.1');
})