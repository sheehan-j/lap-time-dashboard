const express = require("express");
const router = express.Router();
const driversController = require("../../controllers/driversController");

router
	.route("/")
	.get(driversController.getAllDrivers)
	.post(driversController.postDriver);
router.route("/by-driver/:driver").get(driversController.getDriver);
router.route("/count").get(driversController.getDriverCount);

module.exports = router;
