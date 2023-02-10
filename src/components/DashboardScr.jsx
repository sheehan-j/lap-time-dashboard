import DashboardSection from "./DashboardSection";
import { useState, useEffect } from "react";
import DashboardReturnButton from "./DashboardReturnButton";
import { Link } from "react-router-dom";

const DashboardScr = ({
	currTrack,
	setCurrTrack,
	currDriver,
	setCurrDriver,
	dataFade,
	setDataFade,
}) => {
	const [headerDataTrack, setHeaderDataTrack] = useState("");
	const [headerDataDriver, setHeaderDataDriver] = useState("");
	const [lapDataTrack, setLapDataTrack] = useState([]);
	const [lapDataDriver, setLapDataDriver] = useState([]);

	// useEffect hooks
	useEffect(() => {
		const updateTrackData = async () => {
			const trackInfo = await getTrackInfo();
			setHeaderDataTrack({
				track: trackInfo.track,
				game: trackInfo.game,
				car: trackInfo.car,
			});

			let trackTimes = await getTrackTimes();
			if (trackTimes == null) {
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

			setTimeout(() => {
				setDataFade(false);
			}, 1000);
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

		updateDriverData();
	}, [currDriver]);

	// Fetch functions
	const getTrackInfo = async () => {
		const TRACK_INFO_URL = "/tracks/by-id/" + currTrack.toString();

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
		const TRACK_TIMES_URL = "/times/by-track/" + currTrack.toString();

		const response = await fetch(TRACK_TIMES_URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.status === 200) {
			const result = await response.json();
			return result;
		} else {
			return null;
		}
	};

	const getDriverInfo = async () => {
		const DRIVER_URL = "/drivers/by-driver/" + currDriver.toString();

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
		const TRACK_TIMES_URL = "/times/by-driver/" + currDriver.toString();

		const response = await fetch(TRACK_TIMES_URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await response.json();
		return result;
	};

	return (
		<div className="dashboardScreenContainer">
			<Link to="/">
				<DashboardReturnButton />
			</Link>
			<DashboardSection
				title={"Lap Times by Track"}
				lapData={lapDataTrack}
				dataFade={dataFade}
				headerData={headerDataTrack}
				type={"track"}
			/>
			<DashboardSection
				title={"Lap Times by Driver"}
				lapData={lapDataDriver}
				dataFade={dataFade}
				headerData={headerDataDriver}
				type={"driver"}
			/>
		</div>
	);
};

export default DashboardScr;
