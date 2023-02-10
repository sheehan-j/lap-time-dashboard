import React from "react";
import { Link } from "react-router-dom";

const ReturnButton = () => {
	return (
		<div className="addScreenReturnButtonContainer">
			<Link to="/" style={{ textDecoration: "none" }}>
				<button className="addScreenReturnButton">
					Return to Home Page
				</button>
			</Link>
		</div>
	);
};

export default ReturnButton;
