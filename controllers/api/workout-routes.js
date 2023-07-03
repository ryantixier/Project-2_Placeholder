const router = require("express").Router();
const { Workout, User, Exercise, PersonalBest } = require("../../models");

//get route for past workout data for a user
router.get("/past-workouts", async (req, res) => {
  try {
    const workouts = await Workout.findAll({
      where: {
        user_id: req.session.userId,
      },
      include: [
        {
          model: Exercise,
          attributes: ["exercise_name", "intensity"],
          through: {
            model: PersonalBest,
            attributes: ["record_value", "record_unit"],
            as: "personalBest",
            foreignKey: "workout_id",
            otherKey: "exercise_id",
          },
        },
      ],
    });
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const workout = await Workout.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["id", "username"] },
        { model: Exercise, attributes: ["id", "exercise_name", "intensity"] },
      ],
    });
    if (!workout) {
      return res.status(404).json({ message: "No workout found with that id" });
    }
    res.status(200).json(workout);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/", async (req, res) => {
  try {
    const newWorkout = await Workout.create({
      comments: req.body.comments,
      duration: req.body.duration,
      timestamp: req.body.timestamp,
      calories_burned: req.body.calories_burned,
      user_id: req.body.user_id,
      exercise_id: req.body.exercise_id,
    });
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updatedWorkout = await Workout.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedWorkout[0] === 0) {
      res.status(404).json({ message: "No workout found with that id" });
      return;
    }
    res.status(200).json(updatedWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deleteWorkout = await Workout.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.status(200).json({ message: "Workout deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
