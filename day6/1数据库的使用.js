// 1安装musql模块
// 1.2通过musql模块连接到mysql数据库
// 1.3通过mysql模块执行sql语句
const mysql = require('mysql')
const link = mysql.createPool({
        host: '127.0.0.1',
        user: 'root', //数据库账户
        password: 'admin123', //登录数据库密码
        database: 'my_secondsql'
    })
    //2.0测试是否连接成功
    //select 1作为测试用(固定)
    // link.query('select 1', (err, results) => {
    //     if (err) return console.log(err.message);
    //     console.log(results);
    // })

// 3.0 查询数据表的数据
// const sqlstr = 'select * from student'
// link.query(sqlstr, (err, results) => {
//     if (err) return console.log(err.message);
//     console.log(results);
// })

// 4.0插入数据
// const user = { namenumber: '105', name: 'yun' }
// const sqlstr = 'insert into student (namenumber,name) values(?,?)'
// link.query(sqlstr, [user.namenumber, user.name], (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) {
//         console.log('插入成功');
//     }
// })


// 5.0 快速插入数据
// const user = { namenumber: '106', name: 'dijia' }
// const sqlstr = 'insert into student set?'
// link.query(sqlstr, user, (err, results) => {
//     if (err) return console.log('插入失败');
//     if (results.affectedRows === 1) {
//         console.log('插入成功');
//     }
// })

// 6.0 快速更新数据
// const user = { id: 9, namenumber: '199', name: 'aoteman' }
// const sqlstr = 'update student set? where id=?'
// link.query(sqlstr, [user, user.id], (err, results) => {
//     if (err) return console.log('更新失败');
//     if (results.affectedRows === 1) {
//         console.log('更新成功');
//     }
// })

// 7.0删除数据(推荐使用id这样的唯一标识符来删除对应数据)
// const sqlstr = 'delete from student where id =?'
// link.query(sqlstr, 5, (err, results) => {
//     if (err) return console.log('删除失败' + err.message);
//     if (results.affectedRows === 1) {
//         console.log('删除成功');
//     }
// })

// 8.0标记删除(将stuste设置为异常0)
const sqlstr = 'update student set status=? where id=?'
link.query(sqlstr, [0, 2], (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('标记删除成功')
    }
})