const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  subject: String,
  finalMarks: Number
});

module.exports = mongoose.model("Marks", marksSchema);
