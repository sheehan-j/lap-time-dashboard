const Time = require("../model/Time");
const Track = require("../model/Track");

const postTime = async (req, res) => {
	if (
		!req?.body?.track ||
		!req?.body?.game ||
		!req?.body?.car ||
		!req?.body?.driver ||
		!req?.body?.date ||
		!req?.body?.minutes ||
		!req?.body?.seconds ||
		!req?.body?.milliseconds
	) {
		return res.status(400).json({ message: "All fields are required." });
	}

	try {
		const trackSearch = await Track.findOne({
			track: req.body.track,
			game: req.body.game,
			car: req.body.car,
		});

		if (!trackSearch) {
			return res.status(400).json({
				message:
					"This combination of track, game, and car does not exist.",
			});
		}

		try {
			const result = await Time.create({
				trackid: trackSearch.trackid,
				track: req.body.track,
				game: req.body.game,
				car: req.body.car,
				driver: req.body.driver,
				date: req.body.date,
				minutes: req.body.minutes,
				seconds: req.body.seconds,
				milliseconds: req.body.milliseconds,
			});
			res.status(201).json(result);
		} catch (err) {
			console.error(err);
		}
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: "Server error" });
	}
};

module.exports = {
	postTime,
};
