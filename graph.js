const mongoose = require("mongoose");

const GraphSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    maths: { type: [Number], default: [0, 0, 0] },
    oops:  { type: [Number], default: [0, 0, 0] },
    dsa:   { type: [Number], default: [0, 0, 0] },
    cloud: { type: [Number], default: [0, 0, 0] },
    eai:   { type: [Number], default: [0, 0, 0] }
});

module.exports = mongoose.model("Graph", GraphSchema);
