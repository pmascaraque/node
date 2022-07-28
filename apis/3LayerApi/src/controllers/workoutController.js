const getAllWorkouts = async (req, res) => {
  res.send("Get all workouts");
}

const getOneWorkout = async (req, res) => {
  res.send(`Get workout ${req.params.workoutId}`);
}

const createOneWorkout = async (req, res) => {
  res.send(`Create workout ${req.params.workoutId}`);
}

const updateOneWorkout = async (req, res) => {
  res.send(`Update workout ${req.params.workoutId}`);
}

const deleteOneWorkout = async (req, res) => {
  res.send(`Delete workout ${req.params.workoutId}`);
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createOneWorkout,
  updateOneWorkout,
  deleteOneWorkout
}