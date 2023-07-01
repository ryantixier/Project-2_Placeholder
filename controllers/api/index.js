const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const exerciseRoutes = require("./exercise-routes.js");
const workoutRoutes = require("./workout-routes.js");

router.use("/user", userRoutes);
router.use("/exercise", exerciseRoutes);
router.use("/workout", workoutRoutes);

module.exports = router;
