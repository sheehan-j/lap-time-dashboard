import DashboardBodyTitle from "./DashboardBodyTitle";

const DashboardBodyTitleContainerTrack = () => {
	return (
		<div className="dashboardBodyTitleContainer">
			<DashboardBodyTitle title={"Pos"} flex={0.1} />
			<DashboardBodyTitle title={"Name"} flex={0.35} />
			<DashboardBodyTitle title={"Date"} flex={0.15} />
			<DashboardBodyTitle title={"Lap Time"} flex={0.3} />
			<DashboardBodyTitle title={"Gap"} flex={0.1} />
		</div>
	);
};

export default DashboardBodyTitleContainerTrack;
