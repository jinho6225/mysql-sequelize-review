const Restaurant = require('./model.js');

const helpers = {
  getAllRestaurants: () => (
    Restaurant.findAll({})
  ),

  addRestaurant: ({name, rating}) => (
    Restaurant.create({
      restaurant_name: name,
      rating
    })
  )
}

module.exports = helpers;