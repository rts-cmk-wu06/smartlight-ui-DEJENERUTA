import React from "react";
const ColorComponent = ({ colors }) => {
	return (
		<div className="p-8">
			<h1 className="pb-4">colors</h1>
			<img src={colors} />
			<div className=" circle flex gap-4">
				<button className=" bg-orang p-3"></button>
				<button className="bg-green p-3"></button>
				<button className="bg-lightBlue p-3"></button>
				<button className="bg-purple p-3"></button>
				<button className="bg-pink p-3"></button>
				<button className="bg-darkYellow p-3"></button>
				<button className="bg-white p-3">+</button>
			</div>
		</div>
	);
};

export default ColorComponent;
