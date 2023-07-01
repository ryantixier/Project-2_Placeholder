const { User } = require("../models");

const userData = [
  {
    username: "ThorpeSport",
    password: "Password1!",
  },
  {
    username: "novikov78",
    password: "Password1!",
  },
  {
    username: "dScali",
    password: "Password1!",
  },
  {
    username: "jSalek",
    password: "Password1!",
  },
  {
    username: "jMaddox",
    password: "Password1!",
  },
  {
    username: "bBursford96",
    password: "Password1!",
  },
  {
    username: "vladMeister",
    password: "Password1!",
  },
];

const seedUser = async () => {
  for (const user of userData) {
    await User.create(user);
  }
};

module.exports = seedUser;
