import AddScrButton from "./AddScrButton";

const AddScrButtonContainer = ({ selectedBtn, setSelectedBtn }) => {
	return (
		<div className="addScreenButtonContainer">
			<AddScrButton
				selectedBtn={selectedBtn}
				setSelectedBtn={setSelectedBtn}
				title={"Lap"}
			/>
			<AddScrButton
				selectedBtn={selectedBtn}
				setSelectedBtn={setSelectedBtn}
				title={"Track"}
			/>
			<AddScrButton
				selectedBtn={selectedBtn}
				setSelectedBtn={setSelectedBtn}
				title={"Driver"}
			/>
		</div>
	);
};

export default AddScrButtonContainer;
