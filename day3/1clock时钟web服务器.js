const http = require('http')
const path = require('path')
const fs = require('fs')
    //创建服务器
const server = http.createServer()
    //服务器请求事件
server.on('request', function(req, res) {
        const url = req.url
        let fpath = ''
        if (aurl === '/') {
            //用户输入的只是默认url,localhost
            fpath = path.join(__dirname, './clock/index.html')
        } else {
            //用户输入的只是头文件,为其添加clock目录
            fpath = path.join(__dirname, '/clock', url)
        }
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            //未读取到文件说明读取失败
            if (err) return res.end('404 Not found');
            //读取文件如果读取成功则说明访问地址正确
            res.end(dataStr)
        })

    })
    //启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})