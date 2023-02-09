import LapTimeDriver from "./LapTimeDriver";

const LapTimeDriverContainer = ({ lapData, dataFade }) => {
	return (
		<div
			className={`lapTimeContainer ${dataFade ? "fade-out" : "fade-in"}`}
		>
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
