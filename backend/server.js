const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    });
});

app.get('/getAllTasks', (req, res) => {
    const sql = "SELECT * FROM tasks ORDER BY datetime ASC";
    db.query(sql, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    });
});

app.delete('/deleteTask/:id', (req, res) => {
    const sql = "DELETE FROM tasks WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json({ success: true });
    });
});

app.post('/addTask', (req, res) => {
    const sql = "INSERT INTO tasks (id, title, description, datetime) VALUES (null, ?, ?, ?)";
    const values = [
      req.body.title,
      req.body.description,
      req.body.datetime
    ];
    db.query(sql, values, (err, data) => {  // Pass values directly without nested array
      if (err) {
        return res.json("Error");
      }
      return res.json(data);
    });
  });
  




app.listen(8081, () => {
    console.log("listening on port 8081");
});
