import React from "react";
import DashboardHeaderInfo from "./DashboardHeaderInfo";
import { useEffect } from "react";

const DashboardHeaderInfoContainerTrack = ({ headerData, dataFade }) => {
	const styles = dataFade === true ? { opacity: "0" } : { opacity: "1" };

	return (
		<div
			className={`dashboardHeaderInfoContainer ${
				dataFade ? "fade-out" : "fade-in"
			}`}
		>
			<DashboardHeaderInfo title={"Track"} value={headerData.track} />
			<DashboardHeaderInfo title={"Game"} value={headerData.game} />
			<DashboardHeaderInfo title={"Car"} value={headerData.car} />
		</div>
	);
};

export default DashboardHeaderInfoContainerTrack;
