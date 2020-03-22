DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE role (
role_id INT NOT NULL,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
PRIMARY KEY (role_id)
);

CREATE TABLE department (
department_id INT NOT NULL,
name VARCHAR(30),
PRIMARY KEY (department_id)
);

CREATE TABLE employee (
employee_id INT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT NULL,
department_id INT NOT NULL,
PRIMARY KEY (employee_id)
);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (1, "manager", 10, 2);

INSERT INTO department (department_id, name)
VALUES (2, "information");

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id, department_id)
VALUES (10, "Nick", "Adams", 1, 1,2);

SELECT *
FROM role INNER JOIN employee
ON role.role_id = employee.role_id;

SELECT *
FROM employee INNER JOIN department
ON employee.department_id = department.department_id;

