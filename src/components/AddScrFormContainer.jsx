import React from "react";
import AddLapForm from "./AddLapForm";
import AddTrackForm from "./AddTrackForm";
import AddDriverForm from "./AddDriverForm";

const AddScrFormContainer = ({ selectedBtn }) => {
	return (
		<div className="addScreenFormContainer">
			{selectedBtn === "Lap" && <AddLapForm />}
			{selectedBtn === "Track" && <AddTrackForm />}
			{selectedBtn === "Driver" && <AddDriverForm />}
		</div>
	);
};

export default AddScrFormContainer;
