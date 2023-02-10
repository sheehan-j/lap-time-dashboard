import DashboardBodyTitle from "./DashboardBodyTitle";

const DashboardBodyTitleContainerViewTrack = () => {
	return (
		<div className="dashboardBodyTitleContainer">
			<DashboardBodyTitle title={"Track"} flex={0.35} />
			<DashboardBodyTitle title={"Game"} flex={0.3} />
			<DashboardBodyTitle title={"Car"} flex={0.35} />
		</div>
	);
};

export default DashboardBodyTitleContainerViewTrack;
