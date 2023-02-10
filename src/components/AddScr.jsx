import AddScrButtonContainer from "./AddScrButtonContainer";
import AddScrFormContainer from "./AddScrFormContainer";
import AddScrReturnButton from "./AddScrReturnButton";
import { useState } from "react";

const AddScr = () => {
	const [selectedBtn, setSelectedBtn] = useState("Lap");

	return (
		<div className="addScreenContainer">
			<AddScrReturnButton />
			<AddScrButtonContainer
				selectedBtn={selectedBtn}
				setSelectedBtn={setSelectedBtn}
			/>
			<AddScrFormContainer selectedBtn={selectedBtn} />
		</div>
	);
};

export default AddScr;
