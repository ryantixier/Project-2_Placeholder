const { User } = require("../models");

const userData = [
  //For testing, use password: Password1!
  {
    username: "ThorpeSport",
    password: "$2b$10$55yGAtynGqF6I6FOKUamQeqKaEtTOSoBDe3ttsNDMzmCAju/5O8Qi",
  },
  {
    username: "novikov78",
    password: "$2b$10$55yGAtynGqF6I6FOKUamQeqKaEtTOSoBDe3ttsNDMzmCAju/5O8Qi",
  },
  {
    username: "dScali",
    password: "$2b$10$55yGAtynGqF6I6FOKUamQeqKaEtTOSoBDe3ttsNDMzmCAju/5O8Qi",
  },
  {
    username: "jSalek",
    password: "$2b$10$55yGAtynGqF6I6FOKUamQeqKaEtTOSoBDe3ttsNDMzmCAju/5O8Qi",
  },
  {
    username: "jMaddox",
    password: "$2b$10$55yGAtynGqF6I6FOKUamQeqKaEtTOSoBDe3ttsNDMzmCAju/5O8Qi",
  },
  {
    username: "bBursford96",
    password: "$2b$10$55yGAtynGqF6I6FOKUamQeqKaEtTOSoBDe3ttsNDMzmCAju/5O8Qi",
  },
  {
    username: "vladMeister",
    password: "$2b$10$55yGAtynGqF6I6FOKUamQeqKaEtTOSoBDe3ttsNDMzmCAju/5O8Qi",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
