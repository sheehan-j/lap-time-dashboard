import Selector from "./Selector";

const SelectorContainer = () => {
	return (
		<main className="selectorContainer">
			<Selector selectorText={"Dashboard"} />
			<Selector selectorText={"Add"} />
		</main>
	);
};

export default SelectorContainer;
