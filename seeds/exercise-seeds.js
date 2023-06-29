const { Exercise } = require("../models");

const exerciseData = [
  {
    exercise_name: "Deadlift",
    exercise_desc:
      "The deadlift is a weight training exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, torso perpendicular to the floor, before being placed back on the ground.",
    intensity: 6,
  },
  {
    exercise_name: "Squat",
    exercise_desc:
      "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.",
    intensity: 4,
  },
  {
    exercise_name: "Burpee",
    exercise_desc:
      "The burpee, a squat thrust with an additional stand between repetitions, is a full body exercise used in strength training.",
    intensity: 8,
  },
  {
    exercise_name: "Biking",
    exercise_desc:
      "Biking is the use of cycles for transport, recreation, exercise or sport.",
    intensity: 6,
  },
  {
    exercise_name: "Bench Press",
    exercise_desc:
      "The bench press, or chest press, is a weight training exercise where a person presses a weight upwards while lying on a weight training bench.",
    intensity: 7,
  },
  {
    exercise_name: "Plank",
    exercise_desc:
      "The plank is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.",
    intensity: 3,
  },
  {
    exercise_name: "Swimming",
    exercise_desc:
      "Swimming is the self-propulsion of a person through water, or other liquid, usually for recreation, sport, exercise, or survival.",
    intensity: 5,
  },
];

const seedExercise = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercise;
