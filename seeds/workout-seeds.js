const { Workout, PersonalBest } = require("../models");

const workoutData = [
  {
    data: {
      comments: "chest day Friday",
      duration: 1,
      calories_burned: 500,
      user_id: 1,
    },
    pb: [
      {
        exercise_id: 1,
        record_value: 200,
        record_unit: "lbs",
      },
      {
        exercise_id: 2,
        record_value: 1,
        record_unit: "hour",
      },
    ],
  },
];

const seedWorkout = async () => {
  for (const workout of workoutData) {
    const currentWorkout = await Workout.create(workout.data);
    for (const pb of workout.pb) {
      await PersonalBest.create({
        ...pb,
        workout_id: currentWorkout.id,
      });
    }
  }
};

module.exports = seedWorkout;
