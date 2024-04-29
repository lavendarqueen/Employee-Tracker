DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

/c department_db;

CREATE TABLE departments(
    id SERIAL PRIMARY KEY,
    name VARCHAR (30) NOT NULL
);

CREATE TABLE role(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department INTEGER,
    FOREIGN KEY(departments)
    references departments(id)
    ON DELETE SET NULL);
    
CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    FOREIGN KEY(role),
    references role(id),
    FOREIGN KEY(manager),
    references manager(id),
    ON DELETE SET NULL
);


