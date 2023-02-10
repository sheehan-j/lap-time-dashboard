const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectToDB = require("./src/config/dbConfig");
const path = require("path");
const PORT = process.env.BACKEND_PORT || 6101;
const cors = require("cors");

require("dotenv").config();

connectToDB();

// Handle urlencoded data (built-in middleware)
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Use built-in middleware for handling JSON
app.use(express.json());

// Serve static files
app.use("/", express.static(path.join(__dirname, "build")));

// Routes
app.use("/times", require("./src/routes/api/times"));
app.use("/tracks", require("./src/routes/api/tracks"));
app.use("/drivers", require("./src/routes/api/drivers"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

mongoose.connection.once("open", () => {
	console.log("Connected to MongoDB.");
	app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
});
