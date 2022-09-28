const dashboard = (req, res) => {
  res.render("index.ejs");
};

const g_test = (req, res) => {
  res.render("gtest.ejs");
};

const g2_test = (req, res) => {
  res.render("g2test.ejs");
};

const login = (req, res) => {
  res.render("login.ejs");
};

module.exports = {
  dashboard,
  g_test,
  g2_test,
  login,
};