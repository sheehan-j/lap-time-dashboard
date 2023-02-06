import DashboardSection from "./DashboardSection";
import { useState, useEffect } from "react";

const DashboardScr = () => {
	// const [trackInfo, setTrackInfo] = useState([]);
	// const [driverInfo, setDriverInfo] = useState([]);

	const headerDataTrack = {
		track: "Suzuka",
		game: "Gran Turismo",
		car: "Mercedes F1",
	};

	const headerDataDriver = {
		driver: "Jordan",
	};

	const lapDataTrack = [
		{
			pos: 1,
			name: "Jordan",
			date: "2/25/2023",
			time: "1:25.003",
			gap: "-",
		},
		{
			pos: 2,
			name: "Jordan",
			date: "2/25/2023",
			time: "1:35.003",
			gap: "0:10.000",
		},
		{
			pos: 3,
			name: "Adam",
			date: "2/25/2023",
			time: "2:35.003",
			gap: "2:10.00",
		},
		{
			pos: 4,
			name: "Adam",
			date: "2/25/2023",
			time: "2:35.003",
			gap: "2:10.00",
		},
		{
			pos: 5,
			name: "Sean",
			date: "2/25/2023",
			time: "2:35.003",
			gap: "2:10.00",
		},
		{
			pos: 6,
			name: "Sean",
			date: "2/25/2023",
			time: "2:35.003",
			gap: "2:10.00",
		},
		{
			pos: 7,
			name: "Sean",
			date: "2/25/2023",
			time: "2:35.003",
			gap: "2:10.00",
		},
	];

	const lapDataDriver = [
		{
			track: "Suzuka",
			game: "Gran Turismo",
			car: "Mercedes F1",
			time: "1:35.147",
		},
		{
			track: "Nordschleife",
			game: "Gran Turismo",
			car: "Mclaren F1 GTR",
			time: "6:37.849",
		},
	];

	return (
		<div className="dashboardScreenContainer">
			<DashboardSection
				title={"Lap Times by Track"}
				lapData={lapDataTrack}
				headerData={headerDataTrack}
				type={"track"}
			/>
			<DashboardSection
				title={"Track Records by Driver"}
				lapData={lapDataDriver}
				headerData={headerDataDriver}
				type={"driver"}
			/>
		</div>
	);
};

export default DashboardScr;
