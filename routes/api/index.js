const router = require("express").Router();
const playerRoutes = require("./players");
const userRoutes = require("./users");

router.use("/players", playerRoutes);
router.use("/users", userRoutes);

module.exports = router;