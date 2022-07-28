const workoutService = require("../services/workoutService");

const getAllWorkouts = async (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send("Get all workouts");
}

const getOneWorkout = async (req, res) => {
  const workout = workoutService.getOneWorkout(req.params.workoutId);
  res.send(`Get workout ${req.params.workoutId}`);
}

const createOneWorkout = async (req, res) => {
  const createdWorkout = workoutService.createOneWorkout(req.body);
  res.send(`Create workout ${req.params.workoutId}`);
}

const updateOneWorkout = async (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId);
  res.send(`Update workout ${req.params.workoutId}`);
}

const deleteOneWorkout = async (req, res) => {
  workoutService.deleteOneWorkout(req.params.workoutId);
  res.send(`Delete workout ${req.params.workoutId}`);
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createOneWorkout,
  updateOneWorkout,
  deleteOneWorkout
}