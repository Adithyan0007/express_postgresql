CREATE DATABASE todo_database;

--\c into the database(enter into database)

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
     description VARCHAR(255)
);

