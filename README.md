# Employee-Tracker

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath) ![npm_pg](https://img.shields.io/badge/npm_pg-8.11.5-violet) ![inquirer](https://img.shields.io/badge/inquirer-8.2.4-green) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.3-blue)

## Description

Employee Tracker is a content management system that is run from the command line interface (CLI) using node.js, Inquirer, and PosetgreSQL to manage a company's employees database. Building this project taught me how to use the aforementioned libraries to create a CLI application. The project gives the user the ability manage their personnel records by inputting queries to view a formatted table of all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [Contributions](#contributions)
- [Questions](#questions)

## Installation

Installation of Employee-Tracker required importing the following libraries:

1. npm i
2. npm install pg
3. npm i inquirer@8.2.4

## Usage

Import of the libraries described above has already been done. The user needs only to enter the following input in the command line:

node server.js

A list of the functions mentioned in the description above appears and the user can select a function, such as "add an employee" using the down arrows on the keyboard. Employee-Tracker performs the function. The user can then verify the result by using the up/down arrows to view all employees as seen in the following screenshots.

![List of Available Functions](/assets/images/ScreenshotFunctionList.png)

## Tests

All of the functions associated with this project were tested using pgAdmin as shown in the following example screenshots:

![Test View All Employeess](/assets/images/ScreenshotViewAllEmployees.png)

![Test Add An Employee](/assets/images/ScreenshoAddEmployee.png)

![Test Update a Department](/assets/images/ScreenshotUpdateEmployeeRole.png)

## Credits

I collaborated with the following individuals:

- Fellow student Melissa Cade;
- Instructor Benjamin Machock;
- Teacher's Assistant Casey Miller; and
- Tutor Megan Meyers.

I also consulted the following third-party assets:

- PostgreSQL documentation: https://www.postgresql.org/docs/current/tutorial-start.html
- npm-pg documentation: https://www.npmjs.com/package/pg
- MDN web docs at https://developer.mozilla.org/en-US/
- W3 Schools at https://www.w3schools.com/
- StackOverflow at https://stackoverflow.com/.

## License

![License](https://img.shields.io/badge/License-MIT-blue.svg)

Copyright (c) 2024 Phyllis Ann Lataille

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributions

Any contributions made in the spirit of sharing ideas and concepts, will be greatly appreciated. If you have any suggestions that would make this app better, please fork the repo and create a pull request. You can also open an issue with the tag "contribute". Please give this project a star!

### Instructions for forking:

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/fileName)
3. Commit your Changes (git commit -m)
4. Push to the Branch (git push origin feature/newFeature)
5. Open a Pull Request

# User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
