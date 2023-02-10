import React from "react";
import { Link } from "react-router-dom";
import DashboardReturnButton from "./DashboardReturnButton";
import DashboardSection from "./DashboardSection";
import { config } from "../config/Constants";
import { useEffect, useState } from "react";

const ViewScr = () => {
	const [viewTrackData, setViewTrackData] = useState([]);
	const [viewDriverData, setViewDriverData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const tracks = await getAllTracks();
			if (tracks) {
				setViewTrackData(tracks);
			} else {
				setViewTrackData({
					track: "",
					game: "",
					car: "",
				});
			}

			const drivers = await getAllDrivers();
			if (drivers) {
				setViewDriverData(drivers);
			} else {
				setViewDriverData({
					driver: "",
				});
			}
		};

		fetchData();
	}, []);

	const getAllTracks = async () => {
		const ALL_TRACKS_URL = config.API_BASE_URL + "/tracks";

		const response = await fetch(ALL_TRACKS_URL, {
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

	const getAllDrivers = async () => {
		const ALL_DRIVERS_URL = config.API_BASE_URL + "/drivers";

		const response = await fetch(ALL_DRIVERS_URL, {
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

	return (
		<div className="dashboardScreenContainer">
			<Link to="/">
				<DashboardReturnButton />
			</Link>
			<DashboardSection
				title={"All Tracks"}
				lapData={viewTrackData}
				type={"viewTrack"}
			/>
			<DashboardSection
				title={"All Drivers"}
				lapData={viewDriverData}
				type={"viewDriver"}
			/>
		</div>
	);
};

export default ViewScr;
