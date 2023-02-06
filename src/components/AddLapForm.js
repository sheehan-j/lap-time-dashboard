import { useState } from "react";

const AddLapForm = () => {
	const API_URL = "http://localhost:6101/times";
	const [track, setTrack] = useState("");
	const [game, setGame] = useState("");
	const [car, setCar] = useState("");
	const [driver, setDriver] = useState("");
	const [date, setDate] = useState("");
	const [minutes, setMinutes] = useState("");
	const [seconds, setSeconds] = useState("");
	const [milliseconds, setMilliseconds] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

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

		if (response.status === 400) {
			alert(result.message);
			return;
		}
	};

	return (
		<form className="addScreenForm" onSubmit={handleSubmit}>
			<label className="addScreenFormLabel">Track</label>
			<input
				className="addScreenFormInput"
				type="text"
				placeholder="e.g. Nordschleife"
				onChange={(e) => setTrack(e.target.value)}
			/>

			<label className="addScreenFormLabel">Game</label>
			<input
				className="addScreenFormInput"
				type="text"
				placeholder="e.g. Gran Turismo"
				onChange={(e) => setGame(e.target.value)}
			/>

			<label className="addScreenFormLabel">Car</label>
			<input
				className="addScreenFormInput"
				type="text"
				placeholder="e.g. Mclaren F1 GTR"
				onChange={(e) => setCar(e.target.value)}
			/>

			<label className="addScreenFormLabel">Driver</label>
			<input
				className="addScreenFormInput"
				type="text"
				placeholder="e.g. Kolby"
				onChange={(e) => setDriver(e.target.value)}
			/>

			<label className="addScreenFormLabel">Date</label>
			<input
				className="addScreenFormInput"
				type="text"
				placeholder="mm/dd/yyyy"
				onChange={(e) => setDate(e.target.value)}
			/>

			<label className="addScreenFormLabel">Time</label>
			<div className="timeInputGroup">
				<input
					className="addScreenTimeInput"
					placeholder="0"
					type="text"
					onChange={(e) => setMinutes(e.target.value)}
				/>
				<input
					className="addScreenTimeInput"
					type="text"
					placeholder="00"
					style={{ margin: "0 0.4rem" }}
					onChange={(e) => setSeconds(e.target.value)}
				/>
				<input
					className="addScreenTimeInput"
					placeholder="000"
					type="text"
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
