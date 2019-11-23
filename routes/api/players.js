const router = require("express").Router();
const playerController = require("../../controllers/playerController");

// Matches with "/api/players"
router
  .route("/")
  .get(playerController.findAll)

// Matches with "/api/players/:id"
router
  .route("/:id")
  .get(playerController.findById)
  .put(playerController.update)
  .delete(playerController.remove);

module.exports = router;
