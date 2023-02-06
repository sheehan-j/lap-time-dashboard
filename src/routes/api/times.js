const express = require("express");
const router = express.Router();
const timesController = require("../../controllers/timesController");

router.route("/").post(timesController.postTime);

module.exports = router;
