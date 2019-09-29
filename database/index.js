// TODO
const mysql = require('mysql');

var db = mysql.createConnection({
  user: 'root',
  password: 'J1065718j!',
  database: 'Welp'
});

db.connect((err) => {
  if (err) {
    console.log('error connecting', err);
  }
  console.log('Connected to dat db bb')
})

module.exports = db;