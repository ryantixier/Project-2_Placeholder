const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const quoteRoutes = require("./quote-routes.js");
const exerciseRoutes = require("./exercise-routes.js");

router.use("/user", userRoutes);
router.use("/quote", quoteRoutes);
router.use("/exercise", exerciseRoutes);

module.exports = router;
