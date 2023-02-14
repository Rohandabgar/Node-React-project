const express = require("express");
const { route } = require("../app");
const router = express.Router();
const liftController = require("../controller/liftControlller");

router
  .route("/")
  .get(liftController.getallPassenger)
  .post(liftController.creatLiftData);

router
  .route("/:id")
  .patch(liftController.updateLift)
  .delete(liftController.deleteLift);

module.exports = router;
