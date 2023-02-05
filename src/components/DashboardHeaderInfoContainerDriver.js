import React from "react";
import DashboardHeaderInfo from "./DashboardHeaderInfo";

const DashboardHeaderInfoContainerDriver = ({ headerData }) => {
	return (
		<div className="dashboardHeaderInfoContainer">
			<DashboardHeaderInfo title={"Driver"} value={headerData.driver} />
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

export default DashboardHeaderInfoContainerDriver;
