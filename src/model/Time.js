const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timeSchema = new Schema({
	trackid: {
		type: Number,
		required: true,
		unique: true,
	},
	track: {
		type: String,
		required: true,
	},
	game: {
		type: String,
		required: true,
	},
	car: {
		type: String,
		required: true,
	},
	driver: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	minutes: {
		type: Number,
		required: true,
	},
	seconds: {
		type: Number,
		required: true,
	},
	milliseconds: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("Time", timeSchema);
