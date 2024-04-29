const express = require("express");
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require("pg");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  {
    // Enter PostgreSQL username
    user: "postgres",
    // Enter PostgreSQL password
    password: "c@n5W@!t4th3$3qu3l!",
    host: "localhost",
    database: "department_db",
  },
  console.log("Connected to the department_db database!")
);
