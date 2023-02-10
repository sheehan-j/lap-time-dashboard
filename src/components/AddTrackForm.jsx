import { useState } from "react";

const AddTrackForm = () => {
	const API_URL = "/tracks/";
	const [track, setTrack] = useState("");
	const [game, setGame] = useState("");
	const [car, setCar] = useState("");

	const clearForm = () => {
		setTrack("");
		setGame("");
		setCar("");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const newTrack = {
			track: track,
			game: game,
			car: car,
		};

		const response = await fetch(API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTrack),
		});
		const result = await response.json();

		// Handle possible responses
		switch (response.status) {
			case 400:
				window.alert(result.message);
				break;
			case 500:
				window.alert("Internal server error. Please try again later.");
				break;
			case 201:
				window.alert("Track added.");
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
			<input
				className="addScreenFormSubmitButton"
				type="submit"
				value="Add"
			/>
		</form>
	);
};

export default AddTrackForm;
