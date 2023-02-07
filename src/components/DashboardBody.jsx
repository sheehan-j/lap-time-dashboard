import DashboardBodyTitleContainerDriver from "./DashboardBodyTitleContainerDriver";
import DashboardBodyTitleContainerTrack from "./DashboardBodyTitleContainerTrack";
import LapTimeDriverContainer from "./LapTimeDriverContainer";
import LapTimeTrackContainer from "./LapTimeTrackContainer";

const DashboardBody = ({ type, lapData }) => {
	return (
		<div className="dashboardBody">
			{type === "track" && <DashboardBodyTitleContainerTrack />}
			{type === "driver" && <DashboardBodyTitleContainerDriver />}
			<div className="dashboardBodyLine" />
			{type === "track" && <LapTimeTrackContainer lapData={lapData} />}
			{type === "driver" && <LapTimeDriverContainer lapData={lapData} />}
		</div>
	);
};

export default DashboardBody;
