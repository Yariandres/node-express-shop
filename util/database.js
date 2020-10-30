const mysql = require('mysql2');

const pool = mysql.creatPool({
    host: 'localhost',
    user: 'root',
    databse: 'node-complete',
    password: 'ewrewiuy*&^tYT'
});

module.exports = pool.promise();