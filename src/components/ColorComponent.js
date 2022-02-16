import React from "react";

const ColorComponent = ({ setTone }) => {
	return (
		<div className="p-8">
			<h1 className="pb-4">colors</h1>
			<div className=" circle flex gap-4">
				<button
					onClick={() => {
						setTone(0);
					}}
					className=" bg-orang"
				></button>
				<button
					onClick={() => {
						setTone(127);
					}}
					className="bg-green"
				></button>
				<button
					onClick={() => {
						setTone(203);
					}}
					className="bg-lightBlue"
				></button>
				<button
					onClick={() => {
						setTone(252);
					}}
					className="bg-purple"
				></button>
				<button
					onClick={() => {
						setTone(291);
					}}
					className="bg-pink"
				></button>
				<button
					onClick={() => {
						setTone(41);
					}}
					className="bg-darkYellow"
				></button>
				<button className="bg-white">+</button>
			</div>
		</div>
	);
};

export default ColorComponent;
