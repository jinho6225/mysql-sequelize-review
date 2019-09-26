// TODO
const mysql = require('mysql');

db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'Welp'
});

db.connect((err) => {
  if (err) {
    console.log("error connecting", err);
  }
  console.log('Connected to to the db bb');
})
module.exports = db;