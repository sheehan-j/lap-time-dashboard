import DashboardHeaderTitle from "./DashboardHeaderTitle";
import DashboardHeaderInfoContainerTrack from "./DashboardHeaderInfoContainerTrack";
import DashboardHeaderInfoContainerDriver from "./DashboardHeaderInfoContainerDriver";

const DashboardHeader = ({ title, headerData, type }) => {
	return (
		<div className="dashboardHeader">
			<DashboardHeaderTitle title={title} />
			<div className="dashboardHeaderLine"></div>
			{type === "track" && (
				<DashboardHeaderInfoContainerTrack headerData={headerData} />
			)}
			{type === "driver" && (
				<DashboardHeaderInfoContainerDriver headerData={headerData} />
			)}
		</div>
	);
};

export default DashboardHeader;
