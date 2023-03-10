import LapTimeTrack from "./LapTimeTrack";

const LapTimeTrackContainer = ({ lapData, dataFade }) => {
	return (
		<div
			className={`lapTimeContainer ${dataFade ? "fade-out" : "fade-in"}`}
		>
			{lapData.map((lap, index) => (
				<LapTimeTrack
					key={index}
					index={index}
					pos={lap.pos}
					driver={lap.driver}
					date={lap.date}
					time={lap.time}
					gap={lap.gap}
				/>
			))}
		</div>
	);
};

export default LapTimeTrackContainer;
