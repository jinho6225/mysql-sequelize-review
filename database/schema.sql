USE welp;

CREATE TABLE restaurants (
  id integer auto_increment not null primary key,
  restaurant_name varchar(255) not null,
  rating integer not null
);

-- mysql -u root -p < database/schema.sql