const router = require('express').Router();
const controllers = require('./controllers.js');

router.route('/restaurants')
  .get(controllers.getRestaurants)
  .post(controllers.postRestaurant)


module.exports = router;