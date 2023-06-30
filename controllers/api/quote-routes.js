const router = require("express").Router();
const { Quote } = require("../../models");

router.get("/", async (req, res) => {
  // find all quotes
  try {
    const quoteData = await Quote.findAll({
      attributes: ["author", ["text", "quote"]],
    });

    //produce a random quote from the array of objects
    const quoteIndex = Math.floor(Math.random() * quoteData.length);
    console.log(quoteData[quoteIndex].get({ plain: true }));
    res.status(200).json(quoteData[quoteIndex].get({ plain: true }));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
