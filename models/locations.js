const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const locationSchema = new mongoose.Schema({
  name: {
    required: [true, "A location must have a name."],
    unique: [true, "A location with this name already Exists."],
    type: "String",
    trim: true,
    maxlength: [
      50,
      "A location name must have less or equal then 50 characters.",
    ],
    minlength: [
      3,
      "A location name must have more or equal then 3 characters.",
    ],
  },
  location: {
    type: pointSchema,
    required: true,
  },
});

const locationModel = mongoose.model("Locations", locationSchema);

module.exports = locationModel;
