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
	const [dashboardRunning, setDashboardRunning] = useState("Dashboard Off");
	const [dataFade, setDataFade] = useState(false);

	useEffect(() => {
		const updateCounts = async () => {
			const trackCountResponse = await getTrackCount();
			const driverCountResponse = await getDriverCount();
			setTrackCount(trackCountResponse.count);
			setDriverCount(driverCountResponse.count);
			setDashboardRunning("Dashboard On");
		};

		updateCounts();
	}, []);

	useEffect(() => {
		let trackInterval;

		if (dashboardRunning === "Dashboard On") {
			trackInterval = setInterval(() => {
				setDataFade(true);
				setTimeout(() => {
					setCurrTrack((prevValue) => {
						if (prevValue === trackCount) {
							return 1;
						}
						return prevValue + 1;
					});
				}, 250);
			}, 10000);
		}

		return () => clearInterval(trackInterval);
	}, [dashboardRunning, trackCount]);

	useEffect(() => {
		let driverInterval;

		if (dashboardRunning === "Dashboard On") {
			driverInterval = setInterval(() => {
				setDataFade(true);
				setTimeout(() => {
					setCurrDriver((prevValue) => {
						if (prevValue === driverCount) {
							return 1;
						}
						return prevValue + 1;
					});
				}, 250);
			}, 10000);
		}

		return () => clearInterval(driverInterval);
	}, [dashboardRunning, driverCount]);

	useEffect(() => {
		const monitorTrackCount = setInterval(async () => {
			const responseTrackCount = await getTrackCount();

			if (responseTrackCount.count !== trackCount) {
				setTrackCount(responseTrackCount.count);
			}
		}, 10000);

		return () => clearInterval(monitorTrackCount);
	}, []);

	useEffect(() => {
		const monitorDriverCount = setInterval(async () => {
			const responseDriverCount = await getDriverCount();

			if (responseDriverCount.count !== driverCount) {
				setDriverCount(responseDriverCount.count);
			}
		}, 10000);

		return () => clearInterval(monitorDriverCount);
	}, []);

	const getTrackCount = async () => {
		const TRACK_COUNT_URL = "/tracks/count";

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
		const TRACK_COUNT_URL = "/drivers/count";

		const response = await fetch(TRACK_COUNT_URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await response.json();

		return result;
	};

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route
					index
					element={
						<SelectorScr
							dashboardRunning={dashboardRunning}
							setDashboardRunning={setDashboardRunning}
						/>
					}
				/>
				<Route path="add">
					<Route
						index
						element={
							<AddScr
								trackCount={trackCount}
								setTrackCount={setTrackCount}
								driverCount={driverCount}
								setDriverCount={setDriverCount}
							/>
						}
					/>
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
								dataFade={dataFade}
								setDataFade={setDataFade}
							/>
						}
					/>
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
