const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rollNumber: String,
  department: String,
  year: String,
  section: String
});

module.exports = mongoose.model("Student", StudentSchema);
