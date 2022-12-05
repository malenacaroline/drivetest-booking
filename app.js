// Made by Malena Caroline de Moraes Assuncao Aguiar - 8793442
// To run the application follow the steps:
// 1. npm install
// 2. npm run server

const router = require("./routes/route.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const expressSession = require("express-session");
const logoutController = require("./controllers/logout");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(
  expressSession({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.use("/", router);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3500, () => {
  console.log("App is listening at port 3500!!!");
});

const mongoose = require("mongoose");

const driverModel = require("./models/driver");

global.loggedIn = null;
global.user = null;

mongoose.connect(
  "mongodb+srv://test123:123@clustermalena.juhdb8s.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log("Mongodb not connected. Error: " + error);
    } else {
      console.log("Mongodb connected successfully.");
    }
  }
);

app.post("/adddriver", (req, res) => {
  const ins_driver = req.body;

  driverModel.create(
    {
      firstName: ins_driver.fName,
      lastName: ins_driver.lName,
      licenseNumber: ins_driver.licenseNumber,
      age: ins_driver.age,
      dob: ins_driver.dob,
      car_details: {
        iemake: ins_driver.iemake,
        model: ins_driver.model,
        year: ins_driver.year,
        plate: ins_driver.plate,
      },
    },
    (error, driverCreated) => {
      if (error) {
        console.log("Driver not created. Error: " + error);
      } else {
        console.log("Driver created successfully as: " + driverCreated);
        res.redirect("/g2test");
      }
    }
  );
});

// app.get("/getdriver", (req, res) => {
//   const licenseNumber = req.query.licenseNumber;
//   if (licenseNumber) {
//     driverModel.find({ licenseNumber }, (error, driverFound) => {
//       if (error) {
//         console.log("Driver not found. Error: " + error);
//       } else {
//         console.log("Driver found successfully as: " + driverFound);
//         res.render("gtest.ejs", {
//           driver: driverFound,
//         });
//       }
//     });
//   } else {
//     res.redirect("/gtest");
//   }
// });

app.post("/update", (req, res) => {
  const upd_driver = req.body;
  const licenseNumber = upd_driver.licenseNumber;
  console.log(upd_driver);
  console.log(licenseNumber);

  driverModel.findOneAndUpdate(
    { licenseNumber },
    {
      firstName: upd_driver.fName,
      lastName: upd_driver.lName,
      licenseNumber: upd_driver.licenseNumber,
      age: upd_driver.age,
      dob: upd_driver.dob,
      car_details: {
        iemake: upd_driver.iemake,
        model: upd_driver.model,
        year: upd_driver.year,
        plate: upd_driver.plate,
      },
    },
    (error, updatedDriver) => {
      if (error) {
        console.log("Driver not updated. Error: " + error);
      } else {
        console.log("Driver updated successfully as: " + updatedDriver);
        global.user = updatedDriver;
        res.redirect("/gtest");
      }
    }
  );
});

app.post("/adduser", (req, res) => {
  const ins_user = req.body;

  driverModel.create(
    {
      firstName: "default",
      lastName: "default",
      licenseNumber: "default",
      age: 0,
      dob: "default",
      username: ins_user.s_username,
      password: ins_user.s_password,
      userType: ins_user.s_user_type,
      car_details: {
        iemake: "default",
        model: "default",
        year: 0,
        plate: "default",
      },
    },
    (error, userCreated) => {
      if (error) {
        console.log("User not created. Error: " + error);
      } else {
        console.log("User created successfully as: " + userCreated);
        res.redirect("/login");
      }
    }
  );
});

app.post("/updateuser", (req, res) => {
  console.log("hey update useeer");
  const upd_user = req.body;
  const username = global.user.username;

  driverModel.findOneAndUpdate(
    { username },
    {
      firstName: upd_user.fName,
      lastName: upd_user.lName,
      licenseNumber: upd_user.licenseNumber,
      age: upd_user.age,
      dob: upd_user.dob,
      car_details: {
        iemake: upd_user.iemake,
        model: upd_user.model,
        year: upd_user.year,
        plate: upd_user.plate,
      },
    },
    (error, updatedUser) => {
      if (error) {
        console.log("User not updated. Error: " + error);
      } else {
        global.user = updatedUser;
        console.log("User updated successfully as: " + updatedUser);
        res.redirect("/gtest");
      }
    }
  );
});

app.post("/getuser", (req, res) => {
  const { l_username, l_password } = req.body;
  driverModel.findOne({ username: l_username }, (error, user) => {
    if (user) {
      bcrypt.compare(l_password, user.password, (error, same) => {
        if (same) {
          req.session.userId = user._id;
          global.user = user;
          loggedIn = req.session.userId;

          console.log(req.session.userId);
          res.redirect("/");
        } else {
          res.render("login.ejs", {
            userNotFound: true,
          });
        }
      });
    } else {
      res.render("login.ejs", {
        userNotFound: true,
      });
    }
  });
});

app.get("/auth/logout", logoutController);
