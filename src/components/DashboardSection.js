import DashboardBody from "./DashboardBody";
import DashboardHeader from "./DashboardHeader";

const DashboardSection = ({ title, lapData, type, headerData }) => {
	return (
		<div className="dashboardSection">
			<DashboardHeader
				type={type}
				title={title}
				headerData={headerData}
			/>
			<DashboardBody type={type} lapData={lapData} />
		</div>
	);
};

export default DashboardSection;
