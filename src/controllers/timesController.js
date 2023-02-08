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

	if (!mongooseTrackTimes.length) {
		return res.status(400).json({ message: "All fields are required." });
	}

	const trackTimes = mongooseTrackTimes.map((doc) => {
		return doc.toObject();
	});

	// Map the appropraite time and pos for each lap time
	trackTimes.forEach((trackTime, i) => {
		trackTime.time =
			trackTime.minutes.toString() +
			":" +
			trackTime.seconds.toString().padStart(2, "0") +
			"." +
			trackTime.milliseconds.toString().padStart(3, "0");
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

const getTimesByDriver = async (req, res) => {
	// Get the lap times with Mongoose and convert into plain JS objects
	const mongooseTrackTimes = await Time.find(
		{ driverid: req.params.driverid },
		null,
		{
			sort: { minutes: 1, seconds: 1, milliseconds: 1 },
			select: "-date -driver -driverid -_id",
		}
	);

	let trackTimes = mongooseTrackTimes.map((doc) => {
		return doc.toObject();
	});

	// Add track info to each lap time for this driver
	for (const time of trackTimes) {
		const track = await Track.findOne({ trackid: time.trackid });
		time.track = track.track;
		time.game = track.game;
		time.car = track.car;
		time.time =
			time.minutes.toString() +
			":" +
			time.seconds.toString().padStart(2, "0") +
			"." +
			time.milliseconds.toString().padStart(3, "0");
	}

	return res.status(200).json(trackTimes);
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
		// Verify that the track exists
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

		// Verify that the driver exists
		const existingDriverSearch = await Driver.findOne({
			driverlowercase: req.body.driver.toLowerCase(),
		});

		if (!existingDriverSearch) {
			return res
				.status(400)
				.json({ message: "This driver does not exist." });
		}

		// Check if this driver already has a lap on this track, delete if
		// necesssary so it can be replaced
		const existingLapSearch = await Time.findOne({
			trackid: trackSearch.trackid,
			driver: req.body.driver,
		});

		// Check whether this lap is slower than the existing time, if it is,
		// reject it
		if (existingLapSearch) {
			const newTime =
				parseInt(req.body.minutes) * 60000 +
				parseInt(req.body.seconds) * 1000 +
				parseInt(req.body.milliseconds);

			const oldTime =
				existingLapSearch.minutes * 60000 +
				existingLapSearch.seconds * 1000 +
				existingLapSearch.milliseconds;

			if (newTime > oldTime) {
				return res.status(400).json({
					message:
						"You can only upload a lap time that is faster than your existing lap time for this track.",
				});
			}

			// If the lap is faster, delete the slower so it can be replaced
			await Time.deleteOne({ _id: existingLapSearch._id });
		}

		// Update which lap time is the record for this track
		const lapCount = await Time.countDocuments({
			trackid: trackSearch.trackid,
		});

		let trackrecord = false;
		if (lapCount === 0) {
			trackrecord = true;
		} else {
			const trackRecordSearch = await Time.findOne({
				trackrecord: true,
				trackid: trackSearch.trackid,
			});
			const newTime =
				parseInt(req.body.minutes) * 60000 +
				parseInt(req.body.seconds) * 1000 +
				parseInt(req.body.milliseconds);

			const oldTime =
				trackRecordSearch.minutes * 60000 +
				trackRecordSearch.seconds * 1000 +
				trackRecordSearch.milliseconds;

			if (newTime < oldTime) {
				trackrecord = true;
				await Time.updateOne(
					{ trackrecord: true, trackid: trackSearch.trackid },
					{ $set: { trackrecord: false } }
				);
			}
		}

		// Create the new lap time
		try {
			const result = await Time.create({
				trackid: trackSearch.trackid,
				driverid: existingDriverSearch.driverid,
				driver: req.body.driver,
				date: req.body.date,
				minutes: parseInt(req.body.minutes),
				seconds: parseInt(req.body.seconds),
				milliseconds: parseInt(req.body.milliseconds),
				trackrecord: trackrecord,
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
	getTimesByTrack,
	getTimesByDriver,
	postTime,
};
