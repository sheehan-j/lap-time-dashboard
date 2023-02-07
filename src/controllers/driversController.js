const Driver = require("../model/Driver");

const getDriver = async (req, res) => {
	const result = await Driver.findOne({
		driverid: req.params.driver,
	});

	if (!result) {
		return res.status(400).json({ mesage: "Driver does not exist." });
	}

	return res.status(200).json(result);
};

const getAllDrivers = async (req, res) => {
	const result = await Driver.find({});
	if (!result) {
		return res.status(204).json({ message: "No drivers found." });
	}

	return res.status(200).json(result);
};

const postDriver = async (req, res) => {
	if (!req?.body?.driver) {
		return res.status(400).json({ message: "All fields are required." });
	}

	const result = await Driver.findOne({
		driverlowercase: req.body.driver.toLowerCase(),
	});

	if (result) {
		return res.status(400).json({ message: "This driver already exists." });
	}

	// Get count of existing tracks to form a driver id for the new record
	// {} specifies that all objects should be counted
	let newDriverId = await Driver.countDocuments({}).exec();
	newDriverId += 1;

	try {
		const result = await Driver.create({
			driverid: newDriverId,
			driver: req.body.driver,
			driverlowercase: req.body.driver.toLowerCase(),
		});
		res.status(201).json(result);
	} catch (err) {
		console.error(err);
		res.stauts(500).json({ message: "Server error" });
	}
};

module.exports = {
	getDriver,
	getAllDrivers,
	postDriver,
};
