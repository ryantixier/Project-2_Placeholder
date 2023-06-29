const { Workout } = require("../models");

const workoutData = [
  {
    comments: "25 miles, low intensity, recovering from the weekend",
    duration: 35,
    timestamp: "2023-04-12",
    calories_burned: 350,
    user_id: 1,
    exercise_id: 4,
  },
  {
    comments: "Part of interval training, 8 sets of 25 @ 100 pounds",
    duration: 15,
    timestamp: "2023-04-12",
    calories_burned: 280,
    user_id: 1,
    exercise_id: 5,
  },
  {
    comments: "Did this for like an hour, got kicked out of the steam room.",
    duration: 60,
    timestamp: "2023-03-30",
    calories_burned: 800,
    user_id: 4,
    exercise_id: 6,
  },
  {
    comments:
      "Part of floor exercises, did 5 sets of 15 with 15 seconds of rest.",
    duration: 10,
    timestamp: "2023-05-15",
    calories_burned: 350,
    user_id: 5,
    exercise_id: 3,
  },
  {
    comments:
      "Part of High Intensity Interval Training, did 3 sets of 10 @ 400lbs",
    duration: 20,
    timestamp: "2023 06-01",
    calories_burned: 200,
    user_id: 3,
    exercise_id: 2,
  },
  {
    comments:
      "Part of High Intensity Interval Training, did 3 sets of 10 at 225lbs",
    duration: 10,
    timestamp: "2023-6-02",
    calories_burned: 285,
    user_id: 6,
    exercise_id: 1,
  },
  {
    comments: "Swam 300m butterfly, 200m breast, 150m back, 100 free",
    duration: 30,
    timestamp: "2023-06-13",
    calories_burned: 500,
    user_id: 7,
    exercise_id: 7,
  },
  {
    comments: "Swam 400m breast, 400m back, 1000m free, rest 10min, repeat x2",
    duration: 120,
    timestamp: "2023-06-24",
    calories_burned: 1200,
    user_id: 4,
    exercise_id: 7,
  },
  {
    comments:
      "Part of High Intensity Interval Training, did 5 sets of 15 at 350lbs",
    duration: 45,
    timestamp: "2023-06-26",
    calories_burned: 800,
    user_id: 2,
    exercise_id: 1,
  },
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;
