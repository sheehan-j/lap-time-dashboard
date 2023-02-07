const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackSchema = new Schema({
	trackid: {
		type: Number,
		unique: true,
		required: true,
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
	tracklowercase: {
		type: String,
		required: true,
	},
	gamelowercase: {
		type: String,
		required: true,
	},
	carlowercase: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Track", trackSchema);
