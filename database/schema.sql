USE Welp;

CREATE TABLE restaurants (
  id integer auto_increment not null primary key,
  restaurant_name varchar(255) not null,
  rating integer not null
);

/* Run this file by running mysql -u root < database/schema.sql in the base directory */