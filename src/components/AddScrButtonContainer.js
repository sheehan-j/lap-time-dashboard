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
		</div>
	);
};

export default AddScrButtonContainer;
