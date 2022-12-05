const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const driverSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  licenseNumber: Number,
  age: Number,
  dob: String,
  username: String,
  password: String,
  userType: String,
  car_details: {
    iemake: String,
    model: String,
    year: Number,
    plate: String,
  },
});

driverSchema.pre("save", function (next) {
  const user = this;

  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    next();
  });
});

const Driver = mongoose.model("driver", driverSchema);

module.exports = Driver;
