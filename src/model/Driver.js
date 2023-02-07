const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const driverSchema = new Schema({
	driverid: {
		type: Number,
		required: true,
	},
	driver: {
		type: String,
		required: true,
	},
	driverlowercase: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Driver", driverSchema);
