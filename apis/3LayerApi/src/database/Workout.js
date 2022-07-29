//dummy ORM

const DB = require('./dummyDB.json');

const getAllWorkouts = () => {
  return DB.workouts;
}

module.exports = { getAllWorkouts };