const AddScrButton = ({ selectedBtn, setSelectedBtn, title }) => {
	const onSelect = () => {
		setSelectedBtn(title);
	};

	return (
		<button
			className={
				selectedBtn === title
					? "addScreenButtonSelected"
					: "addScreenButton"
			}
			onClick={onSelect}
		>
			{title}
		</button>
	);
};

export default AddScrButton;
