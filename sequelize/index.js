const Sequelize = require('sequelize');

const db = new Sequelize('Welp', 'root', 'J1065718j!', {
  dialect: 'mysql',
  host: 'localhost'
});

db.authenticate()
  .then(() => console.log('connected with SEQUELIZE YES'))
  .catch((err) => console.log(err))

module.exports = db;