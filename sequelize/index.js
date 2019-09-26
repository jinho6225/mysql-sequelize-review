const Sequelize = require('sequelize');

const db = new Sequelize('Welp', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

db.authenticate()
  .then(() => console.log('connected with SEQUELIZE'))
  .catch((err) =>console.log('somethin wrong'))

module.exports = db;