const {
  dashboard,
  g_test,
  g2_test,
  login,
} = require("../controllers/controllers.js");

const express = require("express");

const router = express.Router();

router.get("/", dashboard);

router.get("/gtest", g_test);

router.get("/g2test", g2_test);

router.get("/login", login);

module.exports = router;
