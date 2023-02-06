const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackSchema = new Schema({
	trackid: {
		type: Number,
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
});

module.exports = mongoose.model("Track", trackSchema);
