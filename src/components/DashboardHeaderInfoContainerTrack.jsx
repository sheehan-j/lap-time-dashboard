import React from "react";
import DashboardHeaderInfo from "./DashboardHeaderInfo";

const DashboardHeaderInfoContainerTrack = ({ headerData }) => {
	return (
		<div className="dashboardHeaderInfoContainer">
			<DashboardHeaderInfo title={"Track"} value={headerData.track} />
			<DashboardHeaderInfo title={"Game"} value={headerData.game} />
			<DashboardHeaderInfo title={"Car"} value={headerData.car} />
			{/* 
			{headerData.map((data, index) => (
				<DashboardHeaderInfo
					key={index}
					title={data.title}
					value={data.value}
				/>
			))} */}
		</div>
	);
};

export default DashboardHeaderInfoContainerTrack;
