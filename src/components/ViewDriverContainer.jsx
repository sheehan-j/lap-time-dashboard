import ViewDriverEntry from "./ViewDriverEntry";

const ViewDriverContainer = ({ lapData }) => {
	return (
		<div>
			{lapData.map((lap, index) => (
				<ViewDriverEntry
					key={index}
					index={index}
					driver={lap.driver}
				/>
			))}
		</div>
	);
};

export default ViewDriverContainer;
