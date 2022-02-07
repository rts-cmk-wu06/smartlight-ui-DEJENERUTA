import React, { useState } from "react";
import LightComponent from "./LightComponent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Avatar from "@material-ui/core/Avatar";
import arrowBack from "../assets/back-arrow.svg";
import lightBulbImage from "../assets/light-bulb.jpg";
import surfaceImage from "../assets/surface.svg";
import furnitureImage from "../assets/furniture-household.svg";
import bedLilleImage from "../assets/bed-lille.svg";
import powerOff from "../assets/poweroff.svg";
import solutionRight from "../assets/solutionright.svg";
import solutionLeft from "../assets/solutionleft.svg";
import Slider from "react-input-slider";
import ColorComponent from "./ColorComponent";

const headerVariants = {
	in: {
		height: "calc(400% / 13)",
	},
	initial: {
		height: "calc(200% / 13)",
	},
};
const whitePanelVariants = {
	in: {
		height: "calc(800% / 13)",
	},
	initial: {
		height: "calc(1000% / 13)",
	},
};

const pageTransition = {
	type: "tween",
	ease: "anticipate",
	duration: 0.5,
};
const Room = () => {
	const [value, setValue] = useState("");
	return (
		<>
			<motion.div
				initial="initial"
				animate="in"
				exit="out"
				variants={headerVariants}
				transition={pageTransition}
			>
				<div className="room-header flex justify-between">
					<Link className="back text-white" to="/">
						<h1 className="room-title p-8">
							<span className="arrow">
								<img
									src={arrowBack}
									style={{ width: "10px", height: "10px" }}
									alt=""
								/>
							</span>{" "}
							Bed
							<span className="room block">Room</span>
							<p className="text-goldenYello">4 Lights</p>
						</h1>
					</Link>
					<Avatar
						className="b-1 rounded-full p-8"
						src={lightBulbImage}
						style={{ width: "150px", height: "150px" }}
						alt="profile"
					/>
				</div>
				<div className="flex justify-between items-center p-8 bottom-4">
					<LightComponent image={surfaceImage} txt="Main Lights" />
					<LightComponent image={furnitureImage} txt="Desk lights" />
					<LightComponent image={bedLilleImage} txt="Bed" />
				</div>
			</motion.div>
			<motion.div
				className="white-panel bg-gray rounded-t-3xl flex justify-between relative"
				initial="initial"
				animate="in"
				exit="out"
				variants={whitePanelVariants}
				transition={pageTransition}
			>
				<img
					className="absolute -top-3 right-10"
					src={powerOff}
					style={{ width: "50px", height: "50px" }}
					alt=""
				/>
				<div className="w-full">
					<h1 className="p-8">Intensity</h1>
					<div className="lights flex justify-between items-end w-full p-8">
						<img
							src={solutionRight}
							style={{ width: "50px", height: "50px" }}
							alt=""
						/>
						<div className="flex flex-col w-full gap-2">
							<Slider
								styles={{
									track: {
										width: "100%",
										height: "2px",
										backgroundColor: "gray",
									},
									active: {
										backgroundColor: "yellow",
									},
									thumb: {
										width: 15,
										height: 15,
									},
									disabled: {
										opacity: 0.5,
									},
								}}
								axis="x"
								x={value.x}
								onChange={({ x }) => setValue((value) => ({ ...value, x }))}
							/>
							<div className="flex justify-between">
								<div className="h-4 w-[1px] bg-black"></div>
								<div className="h-4 w-[1px] bg-black"></div>
								<div className="h-4 w-[1px] bg-black"></div>
								<div className="h-4 w-[1px] bg-black"></div>
								<div className="h-4 w-[1px] bg-black"></div>
								<div className="h-4 w-[1px] bg-black"></div>
							</div>
						</div>
						<img
							src={solutionLeft}
							style={{ width: "50px", height: "50px" }}
							alt=""
						/>
					</div>
					<ColorComponent />
				</div>
			</motion.div>
		</>
	);
};

export default Room;
