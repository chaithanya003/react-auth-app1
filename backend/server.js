const express = require("express");
const cors = require("cors");

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql =
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json("Registration Failed");
    } else {
      res.json("User Registered Successfully");
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      res.status(500).json("Login Failed");
    } else {
      if (result.length > 0) {
        res.json("Login Successful");
      } else {
        res.status(401).json("Invalid Credentials");
      }
    }
  });
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});