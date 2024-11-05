const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const data = require("./data.json");

app.get("/users", (req, res) => {
  res.send(data);
});

app.post("/login", (req, res) => {
  const body = req.body;
  console.log(body);
  res.send("done");
});
app.listen(3000, console.log("runing"));
