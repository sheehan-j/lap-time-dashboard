import DashboardBodyTitleContainerDriver from "./DashboardBodyTitleContainerDriver";
import DashboardBodyTitleContainerTrack from "./DashboardBodyTitleContainerTrack";
import LapTimeDriverContainer from "./LapTimeDriverContainer";
import LapTimeTrackContainer from "./LapTimeTrackContainer";
import ViewTrackContainer from "./ViewTrackContainer";
import ViewDriverContainer from "./ViewDriverContainer";
import DashboardBodyTitleContainerViewDriver from "./DashboardBodyTitleContainerViewDriver";
import DashboardBodyTitleContainerViewTrack from "./DashboardBodyTitleContainerViewTrack";

const DashboardBody = ({ type, lapData, dataFade }) => {
	return (
		<div className="dashboardBody">
			{type === "track" && <DashboardBodyTitleContainerTrack />}
			{type === "driver" && <DashboardBodyTitleContainerDriver />}
			{type === "viewDriver" && <DashboardBodyTitleContainerViewDriver />}
			{type === "viewTrack" && <DashboardBodyTitleContainerViewTrack />}
			<div className="dashboardBodyLine" />
			{type === "track" && (
				<LapTimeTrackContainer dataFade={dataFade} lapData={lapData} />
			)}
			{type === "driver" && (
				<LapTimeDriverContainer dataFade={dataFade} lapData={lapData} />
			)}
			{type === "viewTrack" && <ViewTrackContainer lapData={lapData} />}
			{type === "viewDriver" && <ViewDriverContainer lapData={lapData} />}
		</div>
	);
};

export default DashboardBody;
