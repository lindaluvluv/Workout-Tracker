const express = require("express");
const router = express.Router();
const { Workout } = require("../models/index");

router.get("/workouts", async function (req, res) {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
          totalWeight: { $sum: "$exercises.weight" },
        },
      },
    ]);
    res.status(200).send(workouts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/workouts/:workoutID", async function (req, res) {
  try {
    const workoutID = req.params.workoutID;
    const exerciseDto = req.body;
    const workout = await Workout.findById(workoutID);
    workout.exercises.push(exerciseDto);
    workout.save();
    res.status(200).send(exerciseDto);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/workouts", async function (req, res) {
  try {
    const workoutDto = req.body;
    const newWorkout = await Workout.create(workoutDto);
    res.status(200).json(newWorkout);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/workouts/range", async function (req, res) {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
          totalWeight: { $sum: "$exercises.weight" },
        },
      },
    ]);
    res.status(200).json(workouts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
