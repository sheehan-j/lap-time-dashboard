const DashboardToggler = ({ dashboardRunning, setDashboardRunning }) => {
	const toggleDashboardRunning = () => {
		if (dashboardRunning === "Dashboard On") {
			setDashboardRunning("Dashboard Off");
		} else {
			setDashboardRunning("Dashboard On");
		}
	};

	return (
		<div
			className={
				dashboardRunning === "Dashboard On"
					? "dashboardTogglerOn"
					: "dashboardTogglerOff"
			}
			onClick={toggleDashboardRunning}
		>
			<span className="selectorText">{dashboardRunning}</span>
		</div>
	);
};

export default DashboardToggler;
