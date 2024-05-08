const inquirer = require("inquirer");
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require("pg");

// Connect to database
const pool = new Pool(
  {
    // Enter PostgreSQL username
    user: "postgres",
    // Enter PostgreSQL password
    password: "c@ntW@!t4th3$3qu3l!",
    host: "localhost",
    database: "department_db",
  },
  console.log("Connected to the department_db database!")
);

function startApp() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Quit",
        ],
      },
    ])
    .then((options) => {
      switch (options.choice) {
        case "View all departments":
          viewDepts();
          break;

        case "View all roles":
          viewRoles();
          break;

        case "View all employees":
          viewEmployees();
          break;

        case "Add a department":
          addDepartment();
          break;

        case "Add a role":
          addRole();
          break;

        case "Add an employee":
          addEmployee();
          break;

        case "Update an employee role":
          updateEmployee();
          break;

        case "Quit":
          db.end();
      }
    });
}

function viewDepts() {
  pool.query("select * from departments", (err, { rows }) => {
    if (err) console.log(err.message);
    console.table(rows);
    startApp();
  });
}

function viewRoles() {
  pool.query(
    "select role.title, role.salary, departments.name from role join departments on role.department_id = departments.id",
    (err, { rows }) => {
      if (err) console.log(err.message);
      console.table(rows);
      startApp();
    }
  );
}

function viewEmployees() {
  const sql = `SELECT employee.id, employee.first_name AS "first name", employee.last_name AS "last name", role.title, departments.name AS departments, role.salary, manager.first_name || ' ' || manager.last_name AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN departments ON role.department_id = departments.id LEFT JOIN employee manager ON manager.id = employee.manager_id`;

  pool.query(sql, (err, { rows }) => {
    if (err) console.log(err.message);
    console.table(rows);
    startApp();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "What is the name of the new department?",
      },
    ])
    .then(({ department }) => {
      pool.query(
        `INSERT into departments(name) values ($1::varchar)`,
        [department],
        (err, { rows }) => {
          if (err) console.log(err.message);
          console.log("Department successfully inserted");
          startApp();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of the new role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the new role?",
      },
      {
        type: "input",
        name: "department_id",
      },
    ])
    .then(({ title, salary, department_id }) => {
      pool.query(
        `INSERT into role(title, salary, department_id) VALUES ($1, $2, $3)`[
          (roleTitle, salary, department_id)
        ],
        (err, { rows }) => {
          if (err) console.log(err.message);
          console.log("Role added successfully.");
          startApp();
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employee",
        message: "What is the name of the new employee?",
      },
    ])
    .then(({ employee }) => {
      pool.query(
        `INSERT employee.id, employee.first_name AS "first name", employee.last_name AS "last name", role.title, departments.name AS departments, role.salary, manager.first_name || ' ' || manager.last_name AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN departments ON role.department_id = departments.id LEFT JOIN employee manager ON manager.id = employee.manager_id`[
          (employee, role, departments, manager)
        ],
        (err, { rows }) => {
          if (err) console.log(err.message);
          console.log("Employee successfully inserted");
          startApp();
        }
      );
    });
}

startApp();
