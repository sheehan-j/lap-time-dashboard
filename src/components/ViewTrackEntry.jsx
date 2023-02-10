import LapTimeElement from "./LapTimeElement";

const ViewTrackEntry = ({ index, track, game, car }) => {
	const alternateColors = index % 2 === 0 ? `lapTime` : `lapTimeLight`;

	return (
		<div className={alternateColors}>
			<LapTimeElement value={track} flex={0.35} />
			<LapTimeElement value={game} flex={0.3} />
			<LapTimeElement value={car} flex={0.35} />
		</div>
	);
};

export default ViewTrackEntry;
