import LapTimeElement from "./LapTimeElement";

const ViewTrackEntry = ({ index, driver }) => {
	const alternateColors = index % 2 === 0 ? `lapTime` : `lapTimeLight`;

	return (
		<div className={alternateColors}>
			<LapTimeElement value={driver} flex={1} />
		</div>
	);
};

export default ViewTrackEntry;
