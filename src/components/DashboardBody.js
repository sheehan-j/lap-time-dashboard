import DashboardBodyTitleContainerTrack from "./DashboardBodyTitleContainerTrack";

const DashboardBody = ({ type }) => {
	return (
		<div className="dashboardBody">
			{type === "track" && <DashboardBodyTitleContainerTrack />}
			<div className="dashboardHeaderLine" />
		</div>
	);
};

export default DashboardBody;
