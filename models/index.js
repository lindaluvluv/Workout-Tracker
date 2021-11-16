const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: Array,
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = {
  Workout,
};
