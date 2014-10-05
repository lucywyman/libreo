var Sequelize = require('sequelize');
var connection = new Sequelize( process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
host: process.env.HOST,
dialect: 'mysql'
});

module.exports = connection;
