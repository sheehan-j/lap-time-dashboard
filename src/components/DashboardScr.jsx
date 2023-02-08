import DashboardSection from "./DashboardSection";
import { useState, useEffect } from "react";

const DashboardScr = ({
	currTrack,
	setCurrTrack,
	currDriver,
	setCurrDriver,
}) => {
	const [headerDataTrack, setHeaderDataTrack] = useState("");
	const [headerDataDriver, setHeaderDataDriver] = useState("");
	const [lapDataTrack, setLapDataTrack] = useState([]);
	const [lapDataDriver, setLapDataDriver] = useState([]);

	useEffect(() => {
		const updateTrackData = async () => {
			const trackInfo = await getTrackInfo();
			setHeaderDataTrack({
				track: trackInfo.track,
				game: trackInfo.game,
				car: trackInfo.car,
			});

			let trackTimes = await getTrackTimes();
			if (trackTimes.message) {
				setLapDataTrack([
					{
						pos: "",
						driver: "",
						date: "",
						time: "",
						gap: "",
					},
				]);
			} else {
				setLapDataTrack(trackTimes);
			}
		};

		const getTrackInfo = async () => {
			const TRACK_INFO_URL =
				"http://localhost:6101/tracks/by-id/" + currTrack.toString();

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
				"http://localhost:6101/times/by-track/" + currTrack.toString();

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
		updateTrackData();
	}, [currTrack]);

	useEffect(() => {
		const updateDriverData = async () => {
			const driverInfo = await getDriverInfo();
			setHeaderDataDriver({
				driver: driverInfo.driver,
			});

			let timesByDriver = await getTimesByDriver();
			setLapDataDriver(timesByDriver);
		};

		const getDriverInfo = async () => {
			const DRIVER_URL =
				"http://localhost:6101/drivers/by-driver/" +
				currDriver.toString();

			const response = await fetch(DRIVER_URL, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();
			return result;
		};

		const getTimesByDriver = async () => {
			const TRACK_TIMES_URL =
				"http://localhost:6101/times/by-driver/" +
				currDriver.toString();

			const response = await fetch(TRACK_TIMES_URL, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();

			return result;
		};

		updateDriverData();
	}, [currDriver]);

	return (
		<div className="dashboardScreenContainer">
			<DashboardSection
				title={"Lap Times by Track"}
				lapData={lapDataTrack}
				headerData={headerDataTrack}
				type={"track"}
			/>
			<DashboardSection
				title={"Lap Times by Driver"}
				lapData={lapDataDriver}
				headerData={headerDataDriver}
				type={"driver"}
			/>
		</div>
	);
};

export default DashboardScr;
