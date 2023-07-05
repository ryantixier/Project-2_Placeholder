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
//route to create a new workout
router.post("/new-workout", async (req, res) => {
  try {
    //select fields we want from req.body using object destructuring
    const { comments, duration, calories_burned, exercises } = req.body;
    //create a new workout instance
    const newWorkout = await Workout.create({
      //ensure workout is asscoiated with the user creating it
      user_id: req.session.userId,
      comments,
      duration,
      calories_burned,
    });
    //loop through each of our exercises
    for (let exercise of exercises) {
      const existingExercise = await Exercise.findByPk(exercise.id);

      if (existingExercise) {
        //associate the new workout and exercise with addExercise method using our personalBest through table to connect our tables
        await newWorkout.addExercise(existingExercise, {
          through: {
            record_value: exercise.record_value,
            record_unit: exercise.record_unit,
          },
        });
      } else {
        console.log(`No exercise found.`);
      }
    }
    const workoutExercises = await Workout.findByPk(newWorkout.id, {
      include: Exercise,
    });

    res.status(200).json(workoutExercises.get({ plain: true }));
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const workout = await Workout.findOne({
      where: {
        id: req.params.id,
        user_id: req.session.userId,
      },
      include: [
        {
          model: Exercise,
          attributes: ["exercise_name", "exercise_desc", "intensity"],
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
    if (workout) {
      res.status(200).json(workout);
    } else {
      res.status(404).send("Workout not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const workout = await Workout.findByPk(req.params.id, {
//       include: [
//         { model: User, attributes: ["id", "username"] },
//         { model: Exercise, attributes: ["id", "exercise_name", "intensity"] },
//       ],
//     });
//     if (!workout) {
//       return res.status(404).json({ message: "No workout found with that id" });
//     }
//     res.status(200).json(workout);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// router.post("/", async (req, res) => {
//   try {
//     const newWorkout = await Workout.create({
//       comments: req.body.comments,
//       duration: req.body.duration,
//       timestamp: req.body.timestamp,
//       calories_burned: req.body.calories_burned,
//       user_id: req.body.user_id,
//       exercise_id: req.body.exercise_id,
//     });
//     res.status(200).json(newWorkout);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedWorkout = await Workout.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (updatedWorkout[0] === 0) {
//       res.status(404).json({ message: "No workout found with that id" });
//       return;
//     }
//     res.status(200).json(updatedWorkout);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// router.delete("/:id", async (req, res) => {
//   try {
//     const deleteWorkout = await Workout.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!deleteWorkout) {
//       return res.status(404).json({ message: "Workout not found" });
//     }
//     res.status(200).json({ message: "Workout deleted" });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
