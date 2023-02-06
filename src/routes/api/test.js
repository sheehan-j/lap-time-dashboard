const express = require("express");
const router = express.Router();
const testController = require("../../controllers/testController");

router.route("/").get(testController.test).post(testController.test);

module.exports = router;
