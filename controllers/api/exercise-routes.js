const router = require("express").Router();
const { Exercise } = require("../../models");

router.get("/", async (req, res) => {
  // find all exercises
  try {
    const exerciseData = await Exercise.findAll({
      include: [{ all: true }],
    });
    res.status(200).json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find an exercise by ID
  try {
    const exerciseData = await Exercise.findByPk(req.params.id, {
      include: [{ all: true }],
    });

    if (!quoteData) {
      res.status(404).json({
        message: "Oops, we couldn't find that exercise!",
      });
      return;
    }
    res.status(200).json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new exercise
  try {
    const newExercise = await Exercise.create({
      exercise_name: req.body.exercise_name,
      exercise_desc: req.body.exercise_desc,
      intensity: req.body.intensity,
    });
    res.status(200).json(newExercise);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update an exercise by its ID
  try {
    const updateExercise = await Exercise.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updateExercise[0]) {
      res.status(404).json({ message: "We couldn't find that exercise!" });
      return;
    }
    res.status(200).json(updateExercise);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", (req, res) => {
  // delete one exercise by its ID
  Exercise.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedExercise) => {
      res.json(deletedExercise);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
