const path = require("path");

const dashboard = (req, res) => {
  // res.sendFile(path.join(process.cwd(), "public", "index.html"));
  res.render("index.ejs");
};

const g_test = (req, res) => {
  // res.sendFile(path.join(process.cwd(), "public", "gtest.html"));
  res.render("gtest.ejs");
};

const g2_test = (req, res) => {
  // res.sendFile(path.join(process.cwd(), "public", "g2test.html"));
  res.render("g2test.ejs");
};

const login = (req, res) => {
  // res.sendFile(path.join(process.cwd(), "public", "login.html"));
  res.render("login.ejs");
};

module.exports = {
  dashboard,
  g_test,
  g2_test,
  login,
};