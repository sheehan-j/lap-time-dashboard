const express = require("express");
const router = express.Router();
const driversController = require("../../controllers/driversController");

router
	.route("/")
	.get(driversController.getAllDrivers)
	.post(driversController.postDriver);
router.route("/:driver").get(driversController.getDriver);

module.exports = router;
