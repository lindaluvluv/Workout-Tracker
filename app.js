const path = require("path");
const express = require("express");

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});
app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

const workoutRoutes = require("./controllers/workouts.controller");
app.use("/api", workoutRoutes);

module.exports = app;
