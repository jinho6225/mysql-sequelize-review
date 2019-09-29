// TODO
const db = require('./index.js');

const restaurants = [
  {
    name: 'Howlin Rays',
    rating: 5
  },
  {
    name: 'Mariscos Jalisco',
    rating: 5
  },
  {
    name: 'Hummus Factory',
    rating: 4
  },
  {
    name: 'Joy',
    rating: 4
  },
  {
    name: 'Rustic Canyon',
    rating: 5
  }
]

restaurants.forEach(({name, rating}) => {
  db.query(`INSERT INTO restaurants (restaurant_name, rating) VALUES ("${name}", ${rating});`)
})