const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const quoteRoutes = require("./quote-routes.js");
const exerciseRoutes = require("./exercise-routes.js");
const workoutRoutes = require("./workout-routes.js");

router.use("/user", userRoutes);
router.use("/quote", quoteRoutes);
router.use("/exercise", exerciseRoutes);
router.use("/workout", workoutRoutes);

module.exports = router;
