import AddScrButtonContainer from "./AddScrButtonContainer";
import AddScrFormContainer from "./AddScrFormContainer";
import AddScrReturnButton from "./AddScrReturnButton";
import AddScrAuthForm from "./AddScrAuthForm";
import { useState } from "react";

const AddScr = () => {
	const [selectedBtn, setSelectedBtn] = useState("Lap");
	const [authenticated, setAuthenticated] = useState(false);

	return (
		<div className="addScreenContainer">
			<AddScrReturnButton />
			{!authenticated && (
				<AddScrAuthForm setAuthenticated={setAuthenticated} />
			)}
			{authenticated && (
				<>
					<AddScrButtonContainer
						selectedBtn={selectedBtn}
						setSelectedBtn={setSelectedBtn}
					/>
					<AddScrFormContainer selectedBtn={selectedBtn} />
				</>
			)}
		</div>
	);
};
export default AddScr;
