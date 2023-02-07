import LapTimeElement from "./LapTimeElement";

const LapTimeDriver = ({ index, track, game, car, time }) => {
	return (
		<div className={index % 2 === 0 ? "lapTime" : "lapTimeLight"}>
			<LapTimeElement value={track} flex={0.3} />
			<LapTimeElement value={game} flex={0.25} />
			<LapTimeElement value={car} flex={0.25} />
			<LapTimeElement value={time} flex={0.2} />
		</div>
	);
};

export default LapTimeDriver;
