const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectToDB = require("./config/dbConfig");
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
app.use("/", express.static(path.join(__dirname, "..", "public")));

// Routes
app.use("/", require("./routes/root"));
app.use("/times", require("./routes/api/times"));
app.use("/tracks", require("./routes/api/tracks"));

mongoose.connection.once("open", () => {
	console.log("Connected to MongoDB.");
	app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
});
