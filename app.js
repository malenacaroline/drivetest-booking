// Made by Malena Caroline de Moraes Assuncao Aguiar - 8793442
// To run the application follow the steps:
// 1. npm install
// 2. npm run server

const router = require("./routes/route.js");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", router);

app.listen(3500, () => {
  console.log("App is listening at port 3500!!!");
});