const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const driverSchema = new Schema({
	driver: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Driver", driverSchema);
