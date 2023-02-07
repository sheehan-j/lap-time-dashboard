const DashboardHeaderInfo = ({ title, value }) => {
	return (
		<div className="dashboardHeaderInfo">
			<span style={{ fontWeight: 700 }}>{title}:</span>{" "}
			<span>{value}</span>
		</div>
	);
};

export default DashboardHeaderInfo;
