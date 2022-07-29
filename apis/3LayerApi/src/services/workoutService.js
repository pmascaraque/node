const Workout = require('../database/Workout');

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
}

const getOneWorkout = () => {
  return;
}
const createOneWorkout = () => {
  return;
}
const updateOneWorkout = () => {
  return;
}
const deleteOneWorkout = () => {
  return;
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createOneWorkout,
  updateOneWorkout,
  deleteOneWorkout
}
