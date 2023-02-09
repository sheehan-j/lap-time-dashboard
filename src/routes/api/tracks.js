const express = require("express");
const router = express.Router();
const tracksController = require("../../controllers/tracksController");

router
	.route("/")
	.get(tracksController.getAllTracks)
	.post(tracksController.postTrack);
router.route("/by-id/:id").get(tracksController.getTrack);
router.route("/count").get(tracksController.getTrackCount);

module.exports = router;
