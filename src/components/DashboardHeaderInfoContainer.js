import React from "react";
import DashboardHeaderInfo from "./DashboardHeaderInfo";

const DashboardHeaderInfoContainer = ({ info }) => {
	return (
		<div className="dashboardHeaderInfoContainer">
			{info.map((info) => (
				<DashboardHeaderInfo
					key={info.id}
					title={info.title}
					value={info.value}
				/>
			))}
		</div>
	);
};

export default DashboardHeaderInfoContainer;
