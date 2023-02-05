import DashboardBody from "./DashboardBody";
import DashboardHeader from "./DashboardHeader";

const DashboardSection = ({ title, info, type }) => {
	console.log(type);

	return (
		<div className="dashboardSection">
			<DashboardHeader title={title} info={info} />
			<DashboardBody type={type} />
		</div>
	);
};

export default DashboardSection;
