const workoutService = require("../services/workoutService");

const getAllWorkouts = async (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status : 200, data : allWorkouts });
}

const getOneWorkout = async (req, res) => {
  const workout = workoutService.getOneWorkout(req.params.workoutId);
  res.send(`Get workout ${req.params.workoutId}`);
}

const createNewWorkout = async (req, res) => {
  const { body } = req;

  if (!body || !body.name || !body.mode || !body.equipment || !body.exercises || body.trainerTips) { return res.status(400).send({ status : 400, message : "Bad request" }); }
  
  const newWorkout = {
    name : body.name,
    mode : body.mode,
    equipment : body.equipment,
    exercises : body.exercises,
    trainerTips : body.trainerTips
  };
  
  const createdWorkout = workoutService.createOneWorkout(newWorkout);
  res.status(201).send({ status : 201, data : createdWorkout });
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
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}