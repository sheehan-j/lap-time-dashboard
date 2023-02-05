import Selector from "./Selector";
import { Link } from "react-router-dom";

const SelectorContainer = () => {
	return (
		<main>
			<Link to="/dashboard" style={{ textDecoration: "none" }}>
				<Selector selectorText={"Dashboard"} />
			</Link>
			<Link to="/add" style={{ textDecoration: "none" }}>
				<Selector selectorText={"Add Lap"} />
			</Link>
		</main>
	);
};

export default SelectorContainer;
