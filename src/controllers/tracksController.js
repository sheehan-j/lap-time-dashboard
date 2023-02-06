const Track = require("../model/Track");

const postTrack = async (req, res) => {
	if (!req?.body?.track || !req?.body?.game || !req?.body?.car) {
		return res.status(400).json({ message: "All fields are required." });
	}

	const result = await Track.find({
		track: req.body.track,
		game: req.body.game,
		car: req.body.car,
	});

	if (result.length) {
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
		});
		res.status(201).json(result);
	} catch (err) {
		console.error(err);
	}
};

module.exports = {
	postTrack,
};
