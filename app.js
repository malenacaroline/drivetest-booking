// Made by Malena Caroline de Moraes Assuncao - 8793442
// To run the application do the following steps:
// 1. npm install
// 2. npm start or npm run start

const router = require("./routes/route.js");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", router);

app.listen(3500, () => {
  console.log("App is listening at port 3500!!!");
});