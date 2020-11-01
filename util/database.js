const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'ewrewiuy*&^tYT', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
