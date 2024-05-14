DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

\c department_db;

CREATE TABLE department(
    id SERIAL PRIMARY KEY,
    name VARCHAR (30) NOT NULL
);

CREATE TABLE roles(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INTEGER
);    

CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER
);
