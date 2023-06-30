const router = require("express").Router();
const { Quote } = require("../../models");

router.get("/", async (req, res) => {
  // find all quotes
  try {
    const quoteData = await Quote.findAll({
      include: [{ all: true }],
    });
    res.status(200).json(quoteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a quote by ID
  try {
    const quoteData = await Quote.findByPk(req.params.id, {
      include: [{ all: true }],
    });

    if (!quoteData) {
      res.status(404).json({
        message: "Oops, we couldn't find that quote!",
      });
      return;
    }
    res.status(200).json(quoteData);
  } catch (err) {
    res.status(500).json(err);
  }
});
