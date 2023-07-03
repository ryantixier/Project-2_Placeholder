const { Workout, PersonalBest } = require("../models");

const workoutData = [
  {
    data: {
      comments: "Chest day Friday",
      duration: 50,
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
  {
    data: {
      comments: "Leg day Monday",
      duration: 45,
      calories_burned: 600,
      user_id: 1,
    },
    pb: [
      {
        exercise_id: 3,
        record_value: 300,
        record_unit: "lbs",
      },
      {
        exercise_id: 4,
        record_value: 1,
        record_unit: "hour",
      },
    ],
  },
  {
    data: {
      comments: "Arm day Wednesday",
      duration: 50,
      calories_burned: 400,
      user_id: 2,
    },
    pb: [
      {
        exercise_id: 5,
        record_value: 150,
        record_unit: "lbs",
      },
      {
        exercise_id: 6,
        record_value: 1,
        record_unit: "hour",
      },
    ],
  },
  {
    data: {
      comments: "Arm day Wednesday",
      duration: 50,
      calories_burned: 400,
      user_id: 3,
    },
    pb: [
      {
        exercise_id: 5,
        record_value: 150,
        record_unit: "lbs",
      },
      {
        exercise_id: 6,
        record_value: 1,
        record_unit: "hour",
      },
    ],
  },
  {
    data: {
      comments: "Arm day Wednesday",
      duration: 50,
      calories_burned: 400,
      user_id: 4,
    },
    pb: [
      {
        exercise_id: 5,
        record_value: 150,
        record_unit: "lbs",
      },
      {
        exercise_id: 6,
        record_value: 1,
        record_unit: "hour",
      },
    ],
  },
  {
    data: {
      comments: "Arm day Wednesday",
      duration: 50,
      calories_burned: 400,
      user_id: 5,
    },
    pb: [
      {
        exercise_id: 5,
        record_value: 150,
        record_unit: "lbs",
      },
      {
        exercise_id: 6,
        record_value: 1,
        record_unit: "hour",
      },
    ],
  },
  {
    data: {
      comments: "Arm day Wednesday",
      duration: 50,
      calories_burned: 400,
      user_id: 5,
    },
    pb: [
      {
        exercise_id: 5,
        record_value: 150,
        record_unit: "lbs",
      },
      {
        exercise_id: 6,
        record_value: 1,
        record_unit: "hour",
      },
    ],
  },
  {
    data: {
      comments: "Arm day Wednesday",
      duration: 50,
      calories_burned: 400,
      user_id: 7,
    },
    pb: [
      {
        exercise_id: 5,
        record_value: 150,
        record_unit: "lbs",
      },
      {
        exercise_id: 7,
        record_value: 1,
        record_unit: "mile",
      },
    ],
  },
  {
    data: {
      comments: "Arm day/Cardio Friday",
      duration: 50,
      calories_burned: 400,
      user_id: 7,
    },
    pb: [
      {
        exercise_id: 5,
        record_value: 150,
        record_unit: "lbs",
      },
      {
        exercise_id: 7,
        record_value: 1,
        record_unit: "mile",
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
