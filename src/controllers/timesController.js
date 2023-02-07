const Time = require("../model/Time");
const Track = require("../model/Track");
const Driver = require("../model/Driver");

const getTimesByTrack = async (req, res) => {
	// Get the lap times with Mongoose and convert into plain JS objects
	const mongooseTrackTimes = await Time.find(
		{ trackid: req.params.trackid },
		null,
		{
			sort: { minutes: 1, seconds: 1, milliseconds: 1 },
		}
	);

	const trackTimes = mongooseTrackTimes.map((doc) => {
		return doc.toObject();
	});

	// Map the appropraite time and pos for each lap time
	trackTimes.forEach((trackTime, i) => {
		trackTime.time =
			trackTime.minutes.toString() +
			":" +
			trackTime.seconds.toString() +
			"." +
			trackTime.milliseconds.toString();
		trackTime.pos = i + 1;
	});

	// Iterate through the times and calcualte the gaps
	trackTimes[0].gap = "-";
	trackTimes.forEach((trackTime, i) => {
		if (i === 0) return;

		let millisecondsGap =
			trackTimes[i].minutes * 60000 +
			trackTimes[i].seconds * 1000 +
			trackTimes[i].milliseconds -
			(trackTimes[i - 1].minutes * 60000 +
				trackTimes[i - 1].seconds * 1000 +
				trackTimes[i - 1].milliseconds);

		const minutes = Math.floor(millisecondsGap / 60000);
		const seconds = Math.floor(
			Math.floor((millisecondsGap % 60000) / 1000)
		);
		const remainingMilliseconds = millisecondsGap % 1000;

		trackTime.gap =
			minutes.toString() +
			":" +
			seconds.toString().padStart(2, "0") +
			"." +
			remainingMilliseconds.toString().padStart(3, "0");
	});

	return res.status(200).json(trackTimes);
};

const getTimesAsPlainObjects = (req) => {
	let trackTimes;
	Time.find(
		{ trackid: req.params.trackid },
		null,
		{
			sort: { minutes: 1, seconds: 1, milliseconds: 1 },
		},
		(err, docs) => {
			if (err) console.error(err);
			trackTimes = docs.map((doc) => {
				return doc.toObject();
			});
		}
	);
	return trackTimes;
};

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
			tracklowercase: req.body.track.toLowerCase(),
			gamelowercase: req.body.game.toLowerCase(),
			carlowercase: req.body.car.toLowerCase(),
		});

		if (!trackSearch) {
			return res.status(400).json({
				message:
					"This combination of track, game, and car does not exist.",
			});
		}

		// TODO: Add check for whether the request's driver exists
		const existingDriverSearch = await Driver.findOne({
			driverlowercase: req.body.driver.toLowerCase(),
		});

		if (!existingDriverSearch) {
			res.status(400).json({ message: "This driver does not exist." });
		}

		// Check if this driver already has a lap on this track, delete if
		// necesssary so it can be replaced
		const existingLapSearch = await Time.findOne({
			trackid: trackSearch.trackid,
			driver: req.body.driver,
		});

		if (existingLapSearch) {
			await Time.deleteOne({ _id: existingLapSearch._id });
		}

		try {
			const result = await Time.create({
				trackid: trackSearch.trackid,
				driverid: existingDriverSearch.driverid,
				driver: req.body.driver,
				date: req.body.date,
				minutes: req.body.minutes,
				seconds: req.body.seconds,
				milliseconds: req.body.milliseconds,
			});
			console.log("Lap Time Created:\n", result);
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
	getTimesByTrack,
	postTime,
};
