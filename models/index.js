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

Exercise.hasMany(Workout, {
  foreignKey: "exercise_id",
});
Workout.belongsTo(Exercise, {
  foreignKey: "exercise_id",
});

User.belongsToMany(Exercise, {
  through: PersonalBest,
  foreignKey: "user_id",
});
Exercise.belongsToMany(User, {
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
