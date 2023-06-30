const { User } = require("../models");

const userData = [
  {
    username: "ThorpeSport",
    password: "iLoveSwiMm1ng",
  },
  {
    username: "novikov78",
    password: "i_liFt_1k",
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
    password: "pr3Ss1t",
  },
  {
    username: "bBursford96",
    password: "how_3vEn",
  },
  {
    username: "vladMeister",
    password: "cantKeEpm3Down",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
