import React from "react";
const ButtonComponent = ({ image, title, description }) => {
	return (
		<div className="bedroom text-sm bg-white rounded-2xl p-4 shadow-md">
			<img
				src={image}
				style={{ height: "48px", width: "auto", marginBottom: "20px" }}
			/>
			<h3 className="text-lg">{title}</h3>
			<p className="text-goldenYello mt-1">{description}</p>
		</div>
	);
};

export default ButtonComponent;
