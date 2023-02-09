import DashboardHeaderTitle from "./DashboardHeaderTitle";
import DashboardHeaderInfoContainerTrack from "./DashboardHeaderInfoContainerTrack";
import DashboardHeaderInfoContainerDriver from "./DashboardHeaderInfoContainerDriver";

const DashboardHeader = ({ title, headerData, type, dataFade }) => {
	return (
		<div className="dashboardHeader">
			<DashboardHeaderTitle title={title} />
			<div className="dashboardHeaderLine"></div>
			{type === "track" && (
				<DashboardHeaderInfoContainerTrack
					dataFade={dataFade}
					headerData={headerData}
				/>
			)}
			{type === "driver" && (
				<DashboardHeaderInfoContainerDriver
					dataFade={dataFade}
					headerData={headerData}
				/>
			)}
		</div>
	);
};

export default DashboardHeader;
