const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    //host: "localhost", //for windows
    host: "127.0.0.1", //for mac
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
