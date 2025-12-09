const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  totalDays: Number,
  presentDays: Number,
  subjects: [
    {
      subject: String,
      totalClasses: Number,
      attendedClasses: Number
    }
  ]
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
