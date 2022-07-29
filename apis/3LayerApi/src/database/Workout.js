//dummy ORM

const DB = require('./dummyDB.json');
const { saveToDatabase } = require('./utils');

const getAllWorkouts = () => {
  return DB.workouts;
}

const createNewWorkout = (workout) => {
  const isAlreadyAdded = DB.workouts.findIndex((item) => item.name === workout.name) > -1;

  if (isAlreadyAdded){
    return;
  }
  DB.workouts.push(workout);
  saveToDatabase(DB);
  return workout;
}

module.exports = { getAllWorkouts, createNewWorkout };