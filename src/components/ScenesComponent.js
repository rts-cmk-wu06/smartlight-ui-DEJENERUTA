import React from "react";

const ScenesComponent = ({ image, txt }) => {
	return (
		<div className="scenes rounded-xl gap-8 p-4 text-white">
			<img style={{ width: "30px", height: "30px" }} src={image} alt="light" />
			<p className="text-sm justify-center items-center flex">{txt}</p>
		</div>
	);
};

export default ScenesComponent;
