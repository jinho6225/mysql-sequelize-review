// TODO
const db = require('./index.js');

const helpers = {
  getAllRestaurants:(callback) => {
    db.query(`SELECT * FROM restaurants`, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result)
      }
    })
  },
  addRestaurant: (restaurant, callback) => {
    db.query(`INSERT INTO restaurants (restaurant_name, rating) VALUES ("${restaurant.name}", ${restaurant.rating});`, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  }
}

module.exports = helpers;