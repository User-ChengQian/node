// 目的：为了保证 `路由模块` 的纯粹性，所有的 `路由处理函数`，必须抽离到对应的 `路由处理函数模块` 中

//------------------3.0导入数据库模块检测用户名是否被占用
const db = require('../db/index')
    // -----------------对密码进行加密处理bcryptjs
const bcrypt = require('bcryptjs')


// 注册函数
exports.regUser = (req, res) => {
    const userinfo = req.body

    //简单判断数据是否合法
    if (!userinfo.username || !userinfo.password) {
        return res.cc('用户名和密码不能为空')

    }

    // 3.1定义sql语句,并且判断用户名是否被占用
    const sqlStr = 'select * from ev_users where username=?'
    db.query(sqlStr, [userinfo.username], function(err, results) {
        //执行sql语句失败
        if (err) {
            return res.send({ status: 1, msg: err.message })
        }
        //判断results是否是对象(判断其长度是否大于零)
        //大于零则说明查询到了该用户名,不允许再次注册
        if (results.length > 0) {
            return res.cc('用户名已被占用,请更换用户名')
        }

        // -----------用户名未注册,执行下一步操作(将数据等存入数据库)
        //对密码进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
            //-------------插入用户到数据库.1,定义sql语句2,调用db.query
        const sql = 'insert into ev_users set ?'
        db.query(sql, { username: userinfo.username, password: userinfo.password }, function(err, results) {
            //执行sql语句失败
            if (err) return res.send({ status: 1, msg: err.message })
                //执行sql语句成功,但是影响行数不为1
            if (results.affectedRows !== 1) {
                return res.cc('注册用户失败')
            }
            res.cc('注册成功', 1)
        })
    })
}


// 登录函数
exports.login = (req, res) => {
    res.send('login ok')
}