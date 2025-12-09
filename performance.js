const mongoose = require("mongoose");

const performanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  

  subjects: [
    {
      subject: String,
      marksObtained: Number,
      totalMarks: Number,
    }
  ]
});

module.exports = mongoose.model("Performance", performanceSchema);
