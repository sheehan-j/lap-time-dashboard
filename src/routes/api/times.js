const express = require("express");
const router = express.Router();
const timesController = require("../../controllers/timesController");

router.route("/").post(timesController.postTime);
router.route("/:trackid").get(timesController.getTimesByTrack);

module.exports = router;
