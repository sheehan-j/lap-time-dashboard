import React from "react";

const DashboardShortCycleTimeButton = ({ cycleTime, setCycleTime }) => {
	const toggleShortCycleTime = () => {
		if (cycleTime === 10000) {
			setCycleTime(4000);
		} else {
			setCycleTime(10000);
		}
	};

	return (
		<div
			className={`dashboardShortCycleTimeButton ${
				cycleTime === 10000 ? "red" : "green"
			}`}
			onClick={toggleShortCycleTime}
		>
			Toggle Short Cycle Time
		</div>
	);
};

export default DashboardShortCycleTimeButton;
