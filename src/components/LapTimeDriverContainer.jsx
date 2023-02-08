import LapTimeDriver from "./LapTimeDriver";

const LapTimeDriverContainer = ({ lapData }) => {
	return (
		<div className="lapTimeContainer">
			{lapData.map((lap, index) => (
				<LapTimeDriver
					key={index}
					index={index}
					track={lap.track}
					game={lap.game}
					car={lap.car}
					time={lap.time}
					record={lap.trackrecord}
				/>
			))}
		</div>
	);
};

export default LapTimeDriverContainer;
