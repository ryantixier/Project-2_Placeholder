const router = require("express").Router();
const { Quote, User } = require("../models");

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

    //produce a random quote from the array of objects
    const quoteIndex = Math.floor(Math.random() * quoteData.length);
    const quote = quoteData[quoteIndex].get({ plain: true });
    if (req.session.loggedIn) {
      res.render("profile", {
        loggedIn: req.session.loggedIn,
        username: req.session.username,
        quote,
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
