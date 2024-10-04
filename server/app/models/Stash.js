const mongoose = require("mongoose");

const stashSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    trim: true,
    maxLength: [50, "Title is to long"],
  },
});

module.exports = mongoose.model("Stashs", stashSchema);
