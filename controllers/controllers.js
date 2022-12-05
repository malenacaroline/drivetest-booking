const dashboard = (req, res) => {
  res.render("index.ejs");
};

const g_test = (req, res) => {
  console.log(global.user);
  emptyData =
    global.user.firstName === "default" ||
    global.user.lastName === "default" ||
    global.user.licenseNumber === "default" ||
    global.user.age === 0 ||
    global.user.dob === "default" ||
    global.user.car_details.iemake === "default" ||
    global.user.car_details.model === "default" ||
    global.user.car_details.year === 0 ||
    global.user.car_details.plate === "default";

  if (req.session.userId && global.user.userType === "driver") {
    if (emptyData) {
      res.render("g2test.ejs");
    } else {
      res.render("gtest.ejs");
    }
  } else {
    res.render("login.ejs");
  }
};

const g2_test = (req, res) => {
  emptyData =
    global.user.firstName === "default" ||
    global.user.lastName === "default" ||
    global.user.licenseNumber === "default" ||
    global.user.age === 0 ||
    global.user.dob === "default" ||
    global.user.car_details.iemake === "default" ||
    global.user.car_details.model === "default" ||
    global.user.car_details.year === 0 ||
    global.user.car_details.plate === "default";

  if (req.session.userId && global.user.userType === "driver" && emptyData) {
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
