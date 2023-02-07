import LapTimeElement from "./LapTimeElement";

const LapTimeTrack = ({ index, pos, driver, date, time, gap }) => {
	return (
		<div className={index % 2 === 0 ? "lapTime" : "lapTimeLight"}>
			<LapTimeElement value={pos} flex={0.1} />
			<LapTimeElement value={driver} flex={0.3} />
			<LapTimeElement value={date} flex={0.2} />
			<LapTimeElement value={time} flex={0.2} />
			<LapTimeElement value={gap} flex={0.2} />
		</div>
	);
};

export default LapTimeTrack;
