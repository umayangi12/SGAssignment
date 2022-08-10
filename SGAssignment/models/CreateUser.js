const mongoose = require("mongoose");

const CreateUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});

const AdminUser = mongoose.model("CreateUser", CreateUserSchema);

module.exports = AdminUser;
