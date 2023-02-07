import DashboardSection from "./DashboardSection";
import { useState, useEffect } from "react";

const DashboardScr = () => {
	const [currTrack, setCurrTrack] = useState(1);
	const [headerDataTrack, setHeaderDataTrack] = useState("");
	const [lapDataTrack, setLapDataTrack] = useState([]);

	useEffect(() => {
		const updateData = async () => {
			const trackInfo = await getTrackInfo();
			setHeaderDataTrack({
				track: trackInfo.track,
				game: trackInfo.game,
				car: trackInfo.car,
			});

			let trackTimes = await getTrackTimes();
			setLapDataTrack(trackTimes);
		};

		const getTrackInfo = async () => {
			const TRACK_INFO_URL =
				"http://localhost:6101/tracks/" + currTrack.toString();

			const response = await fetch(TRACK_INFO_URL, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();

			return result;
		};

		const getTrackTimes = async () => {
			const TRACK_TIMES_URL =
				"http://localhost:6101/times/" + currTrack.toString();

			const response = await fetch(TRACK_TIMES_URL, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();

			return result;
		};

		// Create asynchronous function call in this format because useEffect
		// is inherently synchronous
		updateData();
	}, [currTrack]);

	const headerDataDriver = {
		driver: "Jordan",
	};

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
