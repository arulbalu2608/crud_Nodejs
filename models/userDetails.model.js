const mongoose = require("mongoose");

const userDetails = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("userDetails", userDetails);
