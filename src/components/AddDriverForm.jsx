import { useState } from "react";

const AddDriverForm = () => {
	const API_URL = "http://localhost:6101/drivers";
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
				alert(result.message);
				break;
			case 500:
				alert("Internal server error. Please try again later.");
				break;
			case 201:
				alert("Driver added.");
				setDriver("");
				break;
			default:
				alert("There was an error. Try again later.");
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
