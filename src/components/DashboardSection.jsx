import DashboardBody from "./DashboardBody";
import DashboardHeader from "./DashboardHeader";

const DashboardSection = ({ title, lapData, type, headerData, dataFade }) => {
	return (
		<div className="dashboardSection">
			<DashboardHeader
				type={type}
				title={title}
				headerData={headerData}
				dataFade={dataFade}
			/>
			<DashboardBody type={type} dataFade={dataFade} lapData={lapData} />
		</div>
	);
};

export default DashboardSection;
