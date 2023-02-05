import LapTimeTrack from "./LapTimeTrack";

const LapTimeTrackContainer = ({ lapData }) => {
	return (
		<div className="lapTimeContainer">
			{lapData.map((lap, index) => (
				<LapTimeTrack
					key={index}
					index={index}
					pos={lap.pos}
					name={lap.name}
					date={lap.date}
					time={lap.time}
					gap={lap.gap}
				/>
			))}
		</div>
	);
};

export default LapTimeTrackContainer;
