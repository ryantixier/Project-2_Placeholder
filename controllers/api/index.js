const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const quoteRoutes = require("./quote-routes.js");

router.use("/user", userRoutes);
router.use("/quote", quoteRoutes);

module.exports = router;
