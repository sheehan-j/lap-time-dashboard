import { useState } from "react";
import { config } from "../config/Constants";

const AddLapForm = () => {
	const API_URL = config.API_BASE_URL + "/times/";
	const [track, setTrack] = useState("");
	const [game, setGame] = useState("");
	const [car, setCar] = useState("");
	const [driver, setDriver] = useState("");
	// const [date, setDate] = useState("");
	const [minutes, setMinutes] = useState("");
	const [seconds, setSeconds] = useState("");
	const [milliseconds, setMilliseconds] = useState("");

	const clearForm = () => {
		setTrack("");
		setGame("");
		setCar("");
		setDriver("");
		// setDate("");
		setMinutes("");
		setSeconds("");
		setMilliseconds("");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const date = new Date().toLocaleDateString();

		const lapTime = {
			track: track,
			game: game,
			car: car,
			driver: driver,
			date: date,
			minutes: minutes,
			seconds: seconds,
			milliseconds: milliseconds,
		};

		const response = await fetch(API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(lapTime),
		});
		const result = await response.json();

		// Handle possible responses
		switch (response.status) {
			case 400:
				if (
					result.message ===
					"You can only upload a lap time that is faster than your existing lap time for this track."
				) {
					window.alert(result.message);
				} else {
					window.alert(
						result.message +
							" You can check the View Data screen for existing tracks and drivers in case you might be typing something incorrectly."
					);
				}
				break;
			case 500:
				window.alert("Internal server error. Please try again later.");
				break;
			case 201:
				window.alert("Lap time added.");
				clearForm();
				break;
			default:
				window.alert("There was an error. Try again later.");
				break;
		}
	};

	return (
		<form className="addScreenForm" onSubmit={handleSubmit}>
			<label className="addScreenFormLabel">Track</label>
			<input
				className="addScreenFormInput"
				type="text"
				value={track}
				placeholder="e.g. Nordschleife"
				onChange={(e) => setTrack(e.target.value)}
			/>

			<label className="addScreenFormLabel">Game</label>
			<input
				className="addScreenFormInput"
				type="text"
				value={game}
				placeholder="e.g. Gran Turismo"
				onChange={(e) => setGame(e.target.value)}
			/>

			<label className="addScreenFormLabel">Car</label>
			<input
				className="addScreenFormInput"
				type="text"
				value={car}
				placeholder="e.g. Mclaren F1 GTR"
				onChange={(e) => setCar(e.target.value)}
			/>

			<label className="addScreenFormLabel">Driver</label>
			<input
				className="addScreenFormInput"
				type="text"
				value={driver}
				placeholder="e.g. Kolby"
				onChange={(e) => setDriver(e.target.value)}
			/>

			{/* <label className="addScreenFormLabel">Date</label>
			<input
				className="addScreenFormInput"
				type="text"
				value={date}
				placeholder="mm/dd/yyyy"
				onChange={(e) => setDate(e.target.value)}
			/> */}

			<label className="addScreenFormLabel">Time</label>
			<div className="timeInputGroup">
				<input
					className="addScreenTimeInput"
					placeholder="0"
					type="text"
					value={minutes}
					onChange={(e) => setMinutes(e.target.value)}
				/>
				<input
					className="addScreenTimeInput"
					type="text"
					value={seconds}
					placeholder="00"
					style={{ margin: "0 0.4rem" }}
					onChange={(e) => setSeconds(e.target.value)}
				/>
				<input
					className="addScreenTimeInput"
					placeholder="000"
					type="text"
					value={milliseconds}
					onChange={(e) => setMilliseconds(e.target.value)}
				/>
			</div>

			<input
				className="addScreenFormSubmitButton"
				type="submit"
				value="Add"
			/>
		</form>
	);
};

export default AddLapForm;
