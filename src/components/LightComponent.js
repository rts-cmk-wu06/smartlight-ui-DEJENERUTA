import React from "react";

const LightComponent = ({ image, txt }) => {
	return (
		<div className="light-container flex items-center justify-center  bg-white text-lightblue pl-8 pr-8 rounded-xl gap-2">
			<img src={image} alt="light" />
			<p className="text-sm whitespace-nowrap">{txt}</p>
		</div>
	);
};

export default LightComponent;
