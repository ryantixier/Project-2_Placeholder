const { User } = require("../models");

const userData = [
  {
    username: "ThorpeSport",
    password: "iLoveSwimm1ng",
  },
  {
    username: "novikov78",
    password: "i_lift_1k",
  },
  {
    username: "dScali",
    password: "myWeirdSp0rt",
  },
  {
    username: "jSalek",
    password: "myWeirderSp0rt",
  },
  {
    username: "jMaddox",
    password: "pr3ss1t",
  },
  {
    username: "bBursford96",
    password: "how_3ven",
  },
  {
    username: "vladMeister",
    password: "cantKeepm3Down",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
