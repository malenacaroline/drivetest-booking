const dashboard = (req, res) => {
  console.log(req.session);
  res.render("index.ejs");
};

const g_test = (req, res) => {
  console.log(req.session);
  console.log(global.isDriver);
  if (req.session.userId && global.user.userType === "driver") {
    res.render("gtest.ejs");
  } else {
    res.render("login.ejs");
  }
};

const g2_test = (req, res) => {
  console.log(req.session);
  console.log(global.isDriver);
  if (req.session.userId && global.user.userType === "driver") {
    res.render("g2test.ejs");
  } else {
    res.render("login.ejs");
  }
};

const login = (req, res) => {
  console.log(req.session);
  res.render("login.ejs");
};

module.exports = {
  dashboard,
  g_test,
  g2_test,
  login,
  // logout,
};
