//导入自定义包,自定义包不允许中文目录
const self = require('./self')
    //格式化时间
const timer = new Date()
const ft = self.gettime(timer)
console.log(ft);
//转义文字
const str = '<h1>"我要转义这几个符号<>"&"</h1>'
const fstr = self.htmlEscape(str)
console.log(fstr);
// 还原转义文字
console.log(self.htmlUnEscape(fstr));