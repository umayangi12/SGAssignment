const mongoose = require("mongoose");

const CreateUserSchema = new mongoose.Schema({
  uid: {
    type: Number,
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
    type: Date,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
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
