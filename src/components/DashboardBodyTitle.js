const DashboardBodyTitle = ({ title, flex }) => {
	return (
		<div className="dashboardBodyTitle" style={{ flex: flex }}>
			{title}
		</div>
	);
};

export default DashboardBodyTitle;
