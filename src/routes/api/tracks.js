const express = require("express");
const router = express.Router();
const tracksController = require("../../controllers/tracksController");

router.route("/").post(tracksController.postTrack);

module.exports = router;
