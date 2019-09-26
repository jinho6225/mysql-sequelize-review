const Sequelize = require('sequelize');
const db = require('./index.js');

const Restaurant = db.define('restaurants', {
  restaurant_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, { timestamps: false })

Restaurant.sync();

module.exports = Restaurant;