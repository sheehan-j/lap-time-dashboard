import DashboardBodyTitle from "./DashboardBodyTitle";

const DashboardBodyTitleContainerTrack = () => {
	return (
		<div className="dashboardBodyTitleContainer">
			<DashboardBodyTitle title={"Pos"} flex={0.1} />
			<DashboardBodyTitle title={"Driver"} flex={0.3} />
			<DashboardBodyTitle title={"Date"} flex={0.2} />
			<DashboardBodyTitle title={"Lap Time"} flex={0.2} />
			<DashboardBodyTitle title={"Gap"} flex={0.2} />
		</div>
	);
};

export default DashboardBodyTitleContainerTrack;
