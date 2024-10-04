const mongoose = require("mongoose");

const formsSchema = new mongoose.Schema({
  user: {
    type: String,
    trim: true,
    maxLength: [50, "Title is to long"],
  },
  title: {
    type: String,
    require: true,
    maxLength: [100, "Title too long"],
  },
  body: {
    type: String,
    require: true,
    maxLength: [500, "Post to long"],
  },
});

module.exports = mongoose.model("Form", formsSchema);
