import DashboardHeaderTitle from "./DashboardHeaderTitle";
import DashboardHeaderInfoContainer from "./DashboardHeaderInfoContainer";

const DashboardHeader = ({ title, info }) => {
	return (
		<div className="dashboardHeader">
			<DashboardHeaderTitle title={title} />
			<div className="dashboardHeaderLine"></div>
			<DashboardHeaderInfoContainer info={info} />
		</div>
	);
};

export default DashboardHeader;
