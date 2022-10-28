const dotenv = require("dotenv");

dotenv.config();
const express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.APP_PORT, () => {
  console.log("App listening on port " + process.env.APP_PORT);
});
