//导入模块
const mysql = require('mysql')
//创建连接
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'nodejs',
})
//对外输出
module.exports = db
