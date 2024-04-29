SELECT *
FROM departments
JOIN role ON departments.role = department.id;

FROM role 
JOIN employee ON role.employee = role.id;

FROM employee
JOIN manager ON employee.manager = employee.id;




