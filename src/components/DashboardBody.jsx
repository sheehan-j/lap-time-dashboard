import DashboardBodyTitleContainerDriver from "./DashboardBodyTitleContainerDriver";
import DashboardBodyTitleContainerTrack from "./DashboardBodyTitleContainerTrack";
import LapTimeDriverContainer from "./LapTimeDriverContainer";
import LapTimeTrackContainer from "./LapTimeTrackContainer";

const DashboardBody = ({ type, lapData, dataFade }) => {
	return (
		<div className="dashboardBody">
			{type === "track" && <DashboardBodyTitleContainerTrack />}
			{type === "driver" && <DashboardBodyTitleContainerDriver />}
			<div className="dashboardBodyLine" />
			{type === "track" && (
				<LapTimeTrackContainer dataFade={dataFade} lapData={lapData} />
			)}
			{type === "driver" && (
				<LapTimeDriverContainer dataFade={dataFade} lapData={lapData} />
			)}
		</div>
	);
};

export default DashboardBody;
