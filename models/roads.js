const mongoose = require("mongoose");

const roadSchema = new mongoose.Schema({
  startLoc: {
    type: mongoose.Types.ObjectId,
    required: [true, "A road must have a start location."],
  },

  endLoc: {
    type: mongoose.Types.ObjectId,
    required: [true, "A road must have a end location."],
  },

  distance: {
    type: Number,
    required: [true, "A road must have a distance."],
  },
  trafficCondition: {
    type: String,
    enum: ["clear", "moderate", "high"],
    default: "clear",
  },
});

const roadModel = mongoose.model("roads", roadSchema);

module.exports = roadModel;
