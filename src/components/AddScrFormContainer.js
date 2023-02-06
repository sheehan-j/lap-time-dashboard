import React from "react";
import AddLapForm from "./AddLapForm";

const AddScrFormContainer = ({ selectedBtn }) => {
	return (
		<div className="addScreenFormContainer">
			{selectedBtn === "Lap" && <AddLapForm />}
		</div>
	);
};

export default AddScrFormContainer;
