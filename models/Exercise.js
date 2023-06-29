const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Exercise extends Model {}

Exercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    exercise_desc: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    intensity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "exercise",
  }
);

module.exports = Exercise;
