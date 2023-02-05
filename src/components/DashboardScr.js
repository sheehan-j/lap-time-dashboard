import DashboardSection from "./DashboardSection";
import { useState, useEffect } from "react";

const DashboardScr = () => {
	// const [trackInfo, setTrackInfo] = useState([]);
	// const [driverInfo, setDriverInfo] = useState([]);

	const trackInfo = [
		{
			id: "1",
			title: "Track",
			value: "Suzuka",
		},
		{
			id: "2",
			title: "Game",
			value: "Gran Turismo",
		},
		{
			id: "3",
			title: "Car",
			value: "F1 GTR",
		},
	];

	return (
		<div className="dashboardScreenContainer">
			<DashboardSection
				title={"Lap Times by Track"}
				info={trackInfo}
				type={"track"}
			/>
			<DashboardSection
				title={"Track Records by Driver"}
				info={trackInfo}
				type={"driver"}
			/>
		</div>
	);
};

export default DashboardScr;
