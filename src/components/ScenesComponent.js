import React from "react";

const ScenesComponent = ({ image, txt }) => {
	return (
		<div className="scenes rounded-xl gap-2 p-8 text-white">
			<img style={{ width: "30px", height: "30px" }} src={image} alt="light" />
			<p className="text-sm ">{txt}</p>
		</div>
	);
};

export default ScenesComponent;
