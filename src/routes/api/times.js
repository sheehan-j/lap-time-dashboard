const express = require("express");
const router = express.Router();
const timesController = require("../../controllers/timesController");

router.route("/").post(timesController.postTime);
router.route("/by-track/:trackid").get(timesController.getTimesByTrack);
router.route("/by-driver/:driverid").get(timesController.getTimesByDriver);

module.exports = router;
