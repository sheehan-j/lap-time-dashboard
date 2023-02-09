import React from "react";
import DashboardHeaderInfo from "./DashboardHeaderInfo";

const DashboardHeaderInfoContainerDriver = ({ headerData, dataFade }) => {
	return (
		<div
			className={`dashboardHeaderInfoContainer ${
				dataFade ? "fade-out" : "fade-in"
			}`}
		>
			<DashboardHeaderInfo title={"Driver"} value={headerData.driver} />
		</div>
	);
};

export default DashboardHeaderInfoContainerDriver;
