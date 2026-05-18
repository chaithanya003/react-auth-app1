const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "auth_app",
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Error", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;