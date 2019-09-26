const dbHelpers = require('../database/helpers.js');

const controllers = {
  getRestaurants: (req, res) => {
    // TODO
    dbHelpers.getAllRestaurants((err, results) => {
      if (err) {
        res.status(404).send('Error getting restaurants from database');
      } else {
        res.status(200).send(results);
      }
    })
  },
  postRestaurant: ({ body }, res) => {
    // TODO
    dbHelpers.addRestaurant(body, (err) => {
      if (err) {
        res.status(400).send('Error adding restaurant to database');
      } else {
        res.status(201).send(`Added ${body.name} to database`);
      }
    })
  }

}

module.exports = controllers;