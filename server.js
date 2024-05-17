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
          updateEmployeeRole();
          break;

        case "Quit":
          db.end();
      }
    });
}

function viewDepts() {
  pool.query("SELECT * FROM department", (err, { rows }) => {
    if (err) console.log(err.message);
    console.table(rows);
    startApp();
  });
}

function viewRoles() {
  pool.query(
    "SELECT roles.title, roles.salary, department.name FROM roles JOIN department on roles.department_id = department.id",
    (err, { rows }) => {
      if (err) console.log(err.message);
      console.table(rows);
      startApp();
    }
  );
}

function viewEmployees() {
  const sql = `SELECT employees.id, employees.first_name AS "first name", employees.last_name AS "last name", roles.title, department.name AS departments, roles.salary, manager.first_name || ' ' || manager.last_name AS manager FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employees manager ON manager.id = employees.manager_id`;

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
        `INSERT into department (name) VALUES ($1::varchar)`,
        [department],
        (err) => {
          if (err) console.log(err.message);
          console.log("Department successfully inserted");
          startApp();
        }
      );
    });
}

async function addRole() {
  const departments = await pool.query(
    "SELECT id as value, name as name FROM department"
  );
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
        type: "list",
        name: "department_id",
        message: "What department does the new role belong to?",
        choices: departments.rows,
      },
    ])
    .then(({ title, salary, department_id }) => {
      pool.query(
        `INSERT into roles (title, salary, department_id) VALUES ($1, $2, $3)`,
        [title, salary, department_id],
        (err) => {
          if (err) {
            console.log(err.message);
          } else {
            console.log("Role added successfully.");
          }
          startApp();
        }
      );
    });
}

async function addEmployee() {
  const roles = await pool.query(
    "SELECT id as VALUE, title as name FROM roles"
  );
  const managers = await pool.query(
    "SELECT id as VALUE, first_name || ' ' || last_name as name FROM employees"
  );
  inquirer
    .prompt([
      {
        type: "input",
        name: "fname",
        message: "What is the first name of the new employee?",
      },
      {
        type: "input",
        name: "lname",
        message: "What is the last name of the new employee?",
      },
      {
        type: "list",
        name: "role_id",
        message: "What is the new employees role?",
        choices: roles.rows,
      },
      {
        type: "list",
        name: "manager_id",
        message: "Who is the new employee's manager?",
        choices: managers.rows,
      },
    ])
    .then(({ fname, lname, role_id, manager_id }) => {
      pool.query(
        `INSERT into employees (first_name, last_name, role_id, manager_id) values ($1, $2, $3, $4)`,
        [fname, lname, role_id, manager_id],
        (err) => {
          if (err) {
            console.log(err.message);
          } else console.log("Employee successfully inserted");
          startApp();
        }
      );
    });
}

async function updateEmployeeRole() {
  const employees = await pool.query(
    `SELECT id as value, first_name || ' ' || last_name as name from employees`
  );

  const roles = await pool.query(
    "SELECT id as value, title as name from roles"
  );
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "Which employee is changing roles?",
        choices: employees.rows,
      },
      {
        type: "list",
        name: "role_id",
        message: "What is the title of the new role?",
        choices: roles.rows,
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for the employee's new role?",
      },
      {
        type: "list",
        name: "manager_id",
        message: "What is the name of the employee's manager?",
        choices: manager.rows,
      },
      {
        type: "list",
        name: "department_id",
        message: "What department does the new role belong to?",
        choices: departments.rows,
      },
    ])
    .then(({ employees, roles, salary, manager, department_id }) => {
      pool.query(
        `UPDATE `[(employees, roles, salary, manager, department_id)],
        (err) => {
          if (err) {
            console.log(err.message);
          } else {
            console.log("Employee role updated successfully.");
          }
          startApp();
        }
      );
    });
}

startApp();
