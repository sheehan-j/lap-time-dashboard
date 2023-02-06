const test = async (req, res) => {
	const msg = "API is working";

	res.json(msg);
};

module.exports = {
	test,
};
