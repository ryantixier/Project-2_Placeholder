const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class PersonalBest extends Model {}

PersonalBest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    record_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    record_value: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    record_unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    record_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "exercise",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "personalBest",
  }
);

module.exports = PersonalBest;
