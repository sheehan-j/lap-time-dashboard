import ViewTrackEntry from "./ViewTrackEntry";

const ViewTrackContainer = ({ lapData }) => {
	return (
		<div>
			{lapData.map((lap, index) => (
				<ViewTrackEntry
					key={index}
					index={index}
					track={lap.track}
					game={lap.game}
					car={lap.car}
				/>
			))}
		</div>
	);
};

export default ViewTrackContainer;
