const dbHelpers = require('../sequelize/helpers.js');

const controllers = {
  getRestaurants: (req, res) => {
    // TODO
    dbHelpers.getAllRestaurants()
      .then((restaurants) => res.status(200).send(restaurants))
      .catch((err) => res.status(404).send(err));
  },
  postRestaurant: ({ body }, res) => {
    // TODO
    dbHelpers.addRestaurant(body)
      .then(() => res.status(201).send(`Added ${body.name} to database`))
      .catch(() => res.status(400).send('Error adding restaurant to database'));
    } 

}

module.exports = controllers;