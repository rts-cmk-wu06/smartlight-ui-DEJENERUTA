import React from "react";
const ButtonComponent = ({ image, title, description }) => {
	const Array = {
		img: "src",
		title: "Bed Room",
		description: "4 lights",
	};
	return (
		<div className="bedroom bg-white rounded-2xl max-w-xs p-8 gap-10">
			<img src={image} />
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default ButtonComponent;
