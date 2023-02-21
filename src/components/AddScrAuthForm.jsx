import { useState } from "react";

const AddScrAuthForm = ({ setAuthenticated }) => {
	const [passcode, setPasscode] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (passcode === process.env.REACT_APP_ADD_AUTH_PASS) {
			setAuthenticated(true);
		} else {
			window.alert("Incorrect passcode.");
		}
	};

	return (
		<div class="addScreenFormContainer">
			<form className="addScreenForm" onSubmit={handleSubmit}>
				<label className="addScreenFormLabel">Passcode</label>
				<input
					className="addScreenFormInput"
					type="text"
					value={passcode}
					placeholder="Enter passcode"
					onChange={(e) => setPasscode(e.target.value)}
				/>
				<input
					className="addScreenFormSubmitButton"
					type="submit"
					value="Add"
				/>
			</form>
		</div>
	);
};

export default AddScrAuthForm;
