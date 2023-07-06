const router = require("express").Router();
const sequelize = require("../config/connection");
const { Quote, User, Workout } = require("../models");

router.get("/", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/profile");
    } else {
      res.render("homepage", {
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/profile", async (req, res) => {
  try {
    const quoteData = await Quote.findAll({
      attributes: ["author", ["text", "quote"]],
    });

    const workoutCount = await Workout.findAll({
      where: { user_id: req.session.userId },
      attributes: [
        "user_id",
        [sequelize.fn("COUNT", sequelize.col("id")), "workouts"],
      ],
    });

    //produce a random quote from the array of objects
    const quoteIndex = Math.floor(Math.random() * quoteData.length);
    const quote = quoteData[quoteIndex].get({ plain: true });
    if (req.session.loggedIn) {
      res.render("profile", {
        loggedIn: req.session.loggedIn,
        username: req.session.username,
        quote,
        totalWorkouts: workoutCount[0].dataValues.workouts,
      });
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/invalid", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/");
    } else {
      res.render("invalidLogin");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
