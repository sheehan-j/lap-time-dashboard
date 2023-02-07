import DashboardBodyTitle from "./DashboardBodyTitle";

const DashboardBodyTitleContainerDriver = () => {
	return (
		<div className="dashboardBodyTitleContainer">
			<DashboardBodyTitle title={"Track"} flex={0.3} />
			<DashboardBodyTitle title={"Game"} flex={0.25} />
			<DashboardBodyTitle title={"Car"} flex={0.25} />
			<DashboardBodyTitle title={"Lap Time"} flex={0.2} />
		</div>
	);
};

export default DashboardBodyTitleContainerDriver;
