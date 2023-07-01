const router = require("express").Router();
const { Quote } = require("../models");

router.get("/", async (req, res) => {
  try {
    const quoteData = await Quote.findAll({
      attributes: ["author", ["text", "quote"]],
    });

    //produce a random quote from the array of objects
    const quoteIndex = Math.floor(Math.random() * quoteData.length);
    const quote = quoteData[quoteIndex].get({ plain: true });
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
      quote,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
