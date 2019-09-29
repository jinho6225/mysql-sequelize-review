const Restaurant = require('./model.js');

const helpers = {
  getAllRestaurants: () => {
    return Restaurant.findAll({})
  },
  addRestaurant: ({name, rating}) => {
    return Restaurant.create({
      restaurant_name: name,
      rating: rating
    })
  }

}

module.exports = helpers;