const User = require("./User");
const Workout = require("./Workout");
const PersonalBest = require("./Personal_Best");
const Exercise = require("./Exercise");
const Quote = require("./Quote");

User.hasMany(Workout, {
  foreignKey: "user_id",
});

Workout.belongsTo(User, {
  foreignKey: "user_id",
});

Workout.belongsToMany(Exercise, {
  through: PersonalBest,
  foreignKey: "workout_id",
});

Exercise.belongsToMany(Workout, {
  through: PersonalBest,
  foreignKey: "exercise_id",
});

module.exports = {
  User,
  Workout,
  PersonalBest,
  Exercise,
  Quote,
};
