import React from "react";
const ColorComponent = ({ colors }) => {
	return (
		<div className=" w-[50px] h-24 p-8">
			<h1>colors</h1>
			<img src={colors} />
			<div className=" circle flex gap-4">
				<div className=" bg-orange-600 p-3"></div>
				<div className="bg-green-500 p-3"></div>
				<div className="bg-blue p-3"></div>
				<div className="bg-purple-900 p-3"></div>
				<div className="bg-pink-400 p-3"></div>
				<div className="bg-yellow-500 p-3"></div>
				<div className="bg-white p-3">+</div>
			</div>
		</div>
	);
};

export default ColorComponent;
