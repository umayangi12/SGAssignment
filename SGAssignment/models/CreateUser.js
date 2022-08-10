const mongoose = require("mongoose");

const CreateUserSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accType: {
    type: String,
    required: true,
  },
});

const AdminUser = mongoose.model("CreateUser", CreateUserSchema);

module.exports = AdminUser;
