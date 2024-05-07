DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

\c department_db;

CREATE TABLE departments(
    id SERIAL PRIMARY KEY,
    name VARCHAR (30) NOT NULL
);

CREATE TABLE roles(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INTEGER
    id FOREIGN KEY (departments)
    REFERENCES departments(id)
    ON DELETE SET NULL
);    

CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER
    id FOREIGN KEY (role)
    REFERENCES role(id)
    ON DELETE SET NULL
);

CREATE TABLE manager(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER
    id FOREIGN KEY (roles)
    REFERENCES roles(id)
    ON DELETE SET NULL
    id FOREIGN KEY (employee)
    REFERENCES employee(id)
    ON DELETE SET NULL
    id FOREIGN KEY (departments)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

