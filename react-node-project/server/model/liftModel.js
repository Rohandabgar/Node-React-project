const mongoose = require("mongoose");

const liftSchema = new mongoose.Schema({
  noOfPassenger: {
    type: Number,
    required: [true, "Number of passenger is required"],
  },
  fromFloor: {
    type: Number,
    required: [true],
  },
  toFloor: {
    type: Number,
    required: [true],
  },
  dateAndTime: {
    type: Date,
    default: Date.now(),
  },
});

const Lift = mongoose.model("Lift", liftSchema);

module.exports = Lift;
