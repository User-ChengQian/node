//引入模块名字fs对模块进行应用
const fs = require('fs');
//通过模块内部的readfile读取文件内容
fs.readFile('./1myfristnode.js', 'utf8', (err, doc) => {
    //第一个参数为文件地址
    //第二个参数是编码类型
    //第三参数包含错误变量,如果出错则返回一个含错误信息的对象,否则为null
    //doc为文件读取结果
    console.log(err);
    console.log(doc);
})