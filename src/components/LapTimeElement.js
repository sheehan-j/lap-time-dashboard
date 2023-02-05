const LapTimeElement = ({ value, flex }) => {
	return (
		<div className="lapTimeElement" style={{ flex: flex }}>
			{value}
		</div>
	);
};

export default LapTimeElement;
