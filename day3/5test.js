//导入格式化时间模块
const self = require('./5自定义格式化时间模块')
console.log(self);
//获取当前时间给模块中的方法作为形参
const dt = new Date()
    // 2022-04-01T10:34:16.721Z
    //调用模块中的方法进行实际的格式化
const ftime = self.dateformat(dt)
console.log(ftime);
// 打印输出格式化的时间