const Track = require("../model/Track");

const getTrack = async (req, res) => {
	const result = await Track.findOne({
		trackid: req.params.id,
	});

	if (!result) {
		return res.status(400).json({ message: "Track not found." });
	}

	return res.status(200).json(result);
};

const getAllTracks = async (req, res) => {
	console.log(req.params);
};

const postTrack = async (req, res) => {
	if (!req?.body?.track || !req?.body?.game || !req?.body?.car) {
		return res.status(400).json({ message: "All fields are required." });
	}

	const result = await Track.findOne({
		tracklowercase: req.body.track.toLowerCase(),
		gamelowercase: req.body.game.toLowerCase(),
		carlowercase: req.body.car.toLowerCase(),
	});

	if (result) {
		return res.status(400).json({ message: "This track already exists." });
	}

	// Get count of existing tracks to form a track id for the new record
	// {} specifies that all objects should be counted
	let newTrackId = await Track.countDocuments({}).exec();
	newTrackId += 1;

	try {
		const result = await Track.create({
			trackid: newTrackId,
			track: req.body.track,
			game: req.body.game,
			car: req.body.car,
			tracklowercase: req.body.track.toLowerCase(),
			gamelowercase: req.body.game.toLowerCase(),
			carlowercase: req.body.car.toLowerCase(),
		});
		res.status(201).json(result);
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: "Server error" });
	}
};

module.exports = {
	getTrack,
	getAllTracks,
	postTrack,
};
