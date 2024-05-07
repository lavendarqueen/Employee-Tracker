SELECT *
FROM departments
JOIN roles ON departments.role = department.id;

FROM roles
JOIN employee ON role.employee = role.id;

FROM employee
JOIN manager ON employee.manager = employee.id;




