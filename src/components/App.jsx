import Layout from "./Layout";
import SelectorScr from "./SelectorScr";
import AddScr from "./AddScr";
import DashboardScr from "./DashboardScr";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
	const [trackCount, setTrackCount] = useState(0);
	const [driverCount, setDriverCount] = useState(0);
	const [currTrack, setCurrTrack] = useState(1);
	const [currDriver, setCurrDriver] = useState(1);
	const [dashboardRunning, setDashboardRunning] = useState(false);

	useEffect(() => {
		const updateCounts = async () => {
			const trackCountResponse = await getTrackCount();
			const driverCountResponse = await getDriverCount();
			setTrackCount(trackCountResponse.count);
			setDriverCount(driverCountResponse.count);
			setDashboardRunning(true);
		};

		const getTrackCount = async () => {
			const TRACK_COUNT_URL = "http://localhost:6101/tracks/count";

			const response = await fetch(TRACK_COUNT_URL, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();

			return result;
		};

		const getDriverCount = async () => {
			const TRACK_COUNT_URL = "http://localhost:6101/drivers/count";

			const response = await fetch(TRACK_COUNT_URL, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();

			return result;
		};

		updateCounts();
	}, []);

	useEffect(() => {
		let trackInterval;

		if (dashboardRunning) {
			trackInterval = setInterval(() => {
				setCurrTrack((prevValue) => {
					if (prevValue === trackCount) {
						return 1;
					}
					return prevValue + 1;
				});
			}, 1000);
		}

		return () => clearInterval(trackInterval);
	}, [dashboardRunning]);

	useEffect(() => {
		let driverInterval;

		if (dashboardRunning) {
			driverInterval = setInterval(() => {
				setCurrDriver((prevValue) => {
					if (prevValue === driverCount) {
						return 1;
					}
					return prevValue + 1;
				});
			}, 1000);
		}

		return () => clearInterval(driverInterval);
	}, [dashboardRunning]);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<SelectorScr />} />
				<Route path="add">
					<Route index element={<AddScr />} />
				</Route>
				<Route path="dashboard">
					<Route
						index
						element={
							<DashboardScr
								currTrack={currTrack}
								setCurrTrack={setCurrTrack}
								currDriver={currDriver}
								setCurrDriver={setCurrDriver}
							/>
						}
					/>
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
