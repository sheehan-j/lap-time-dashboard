import LapTimeElement from "./LapTimeElement";

const LapTimeDriver = ({ index, track, game, car, time, record }) => {
	const alternateColors = index % 2 === 0 ? `lapTime` : `lapTimeLight`;
	const recordColor = record ? `record` : ``;
	const classes = alternateColors + ` ` + recordColor;

	return (
		<div className={classes}>
			<LapTimeElement value={track} flex={0.3} />
			<LapTimeElement value={game} flex={0.25} />
			<LapTimeElement value={car} flex={0.25} />
			<LapTimeElement value={time} flex={0.2} />
		</div>
	);
};

export default LapTimeDriver;
