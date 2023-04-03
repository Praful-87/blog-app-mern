const mongoose = require("mongoose");
const userScema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userScema);

module.exports = { UserModel };
