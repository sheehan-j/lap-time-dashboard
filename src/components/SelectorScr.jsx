import SelectorContainer from "./SelectorContainer";

const SelectorScr = ({ dashboardRunning, setDashboardRunning }) => {
	return (
		<div className="centered">
			<SelectorContainer
				dashboardRunning={dashboardRunning}
				setDashboardRunning={setDashboardRunning}
			/>
		</div>
	);
};

export default SelectorScr;
