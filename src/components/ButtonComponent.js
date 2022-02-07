import React from "react";
const ButtonComponent = ({ image, title, description }) => {
	return (
		<div className="bedroom text-sm bg-white rounded-2xl  w-[150px] h-44 p-8 gap-10">
			<img src={image} />
			<h3 className="">{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default ButtonComponent;
