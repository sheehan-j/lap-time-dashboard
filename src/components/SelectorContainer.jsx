import Selector from "./Selector";
import { Link } from "react-router-dom";
import DashboardToggler from "./DashboardToggler";

const SelectorContainer = ({ dashboardRunning, setDashboardRunning }) => {
	return (
		<div className="selectorContainer">
			<Link to="/dashboard" style={{ textDecoration: "none" }}>
				<Selector selectorText={"Dashboard"} />
			</Link>
			<Link to="/add" style={{ textDecoration: "none" }}>
				<Selector selectorText={"Add Data"} />
			</Link>
			<DashboardToggler
				dashboardRunning={dashboardRunning}
				setDashboardRunning={setDashboardRunning}
			/>
		</div>
	);
};

export default SelectorContainer;
