const date = require('./src/dateformat')
const escape = require('./src/htmlEscape')
    //向外暴露需要的函数成员
module.exports = {
    ...date,
    ...escape
}