import { useState } from "react";

const AddDriverForm = () => {
	const API_URL = "/drivers/";
	const [driver, setDriver] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		const newDriver = {
			driver: driver,
		};

		const response = await fetch(API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newDriver),
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
				window.alert("Driver added.");
				setDriver("");
				break;
			default:
				window.alert("There was an error. Try again later.");
				break;
		}
	};

	return (
		<form className="addScreenForm" onSubmit={handleSubmit}>
			<label className="addScreenFormLabel">Driver</label>
			<input
				className="addScreenFormInput"
				type="text"
				value={driver}
				placeholder="e.g. Shawn"
				onChange={(e) => setDriver(e.target.value)}
			/>
			<input
				className="addScreenFormSubmitButton"
				type="submit"
				value="Add"
			/>
		</form>
	);
};

export default AddDriverForm;
