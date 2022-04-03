//导入querystring
const qs = require('querystring')
const bp = (req, res, next) => {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })
    req.on('end', () => {
        const body = qs.parse(str)
        req.body = body
        next()
    })
}
module.exports = bp