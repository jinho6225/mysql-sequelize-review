const dbHelper = require('../sequelize/helpers.js');

const controllers = {
  getRestaurants: (req, res) => {
    // TODO
    dbHelper.getAllRestaurants()
      .then((restuarant) => res.status(200).send(restuarant))
      .catch((err) => res.status(404).send(err));
  },
  postRestaurant: ({body}, res) => {
    dbHelper.addRestaurant(body)
      .then(() => res.status(201).send('added restaurant'))
      .catch((err) => res.status(400).send('Error adding restaurant' + err))
  }
}

module.exports = controllers;