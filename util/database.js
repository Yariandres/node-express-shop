const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'ewrewiuy*&^tYT'
});

module.exports = pool.promise();