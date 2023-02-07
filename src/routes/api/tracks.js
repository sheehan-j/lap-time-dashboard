const express = require("express");
const router = express.Router();
const tracksController = require("../../controllers/tracksController");

router
	.route("/")
	.get(tracksController.getAllTracks)
	.post(tracksController.postTrack);

router.route("/:id").get(tracksController.getTrack);

module.exports = router;
