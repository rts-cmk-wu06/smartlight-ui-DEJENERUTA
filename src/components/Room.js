import React, { useState } from "react";
import LightComponent from "./LightComponent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import arrowBack from "../assets/back-arrow.svg";
import surfaceImage from "../assets/surface.svg";
import furnitureImage from "../assets/furniture-household.svg";
import bedLilleImage from "../assets/bed-lille.svg";
import powerOff from "../assets/poweroff.svg";
import solutionRight from "../assets/solutionright.svg";
import LightBulb from "./LightBulb";
import Slider from "react-input-slider";
import ColorComponent from "./ColorComponent";
import ScenesComponent from "./ScenesComponent";
import scenesImage from "../assets/scenes-light.svg";
import Lamp from "./Lamp";
import * as Sentry from "@sentry/react";

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
	type: "spring" /* I chabge tween to spring */,
	ease: "anticipate",
	duration: 0.5,
};
const Room = () => {
	const [brightness, setBrightness] = useState(100);
	const [isTurnedOn, setIsTurnedOn] = useState(true);
	const [tone, setTone] = useState(41);
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
						<h1 className="room-title p-8 pb-2 text-3xl">
							<span className="arrow">
								<img
									src={arrowBack}
									style={{
										width: "20px",
										height: "20px",
										display: "inline-block",
										verticalAlign: "middle",
										marginRight: "5px",
									}}
									alt=""
								/>
							</span>
							Bed
							<span className="room block">Room</span>
						</h1>
						<p className="text-goldenYello p-8 pt-0 pb-2 ">4 Lights</p>
					</Link>
					<Lamp isTurnedOn={isTurnedOn} brightness={brightness} tone={tone} />
				</div>
				<div className="flex justify-between items-center p-8 pb-2">
					<LightComponent image={surfaceImage} txt="Main Lights" />
					<LightComponent image={furnitureImage} txt="Desk lights" />
					<LightComponent image={bedLilleImage} txt="Bed" />
				</div>
			</motion.div>
			<Sentry.ErrorBoundary fallback={<p>An error occured</p>}>
				<motion.div
					className="white-panel bg-gray rounded-t-3xl flex justify-between relative"
					initial="initial"
					animate="in"
					exit="out"
					variants={whitePanelVariants}
					transition={pageTransition}
				>
					<button
						className={`power-button ${isTurnedOn ? "on" : "off"}`}
						onClick={() => {
							setIsTurnedOn(!isTurnedOn);
						}}
					>
						<img
							className="absolute -top-6 right-4"
							src={powerOff}
							style={{ width: "50px", height: "50px" }}
							alt=""
						/>
					</button>
					<div className="w-full">
						<h1 className="p-8 pb-2">Intensity</h1>
						<div className="lights flex justify-between items-end w-full p-8 pb-0 pt-0">
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
									x={brightness}
									onChange={({ x }) => setBrightness(x)}
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
							<LightBulb brightness={brightness} />
						</div>
						<ColorComponent setTone={setTone} />
						<h1 className="p-8 pb-4">Scenes</h1>
						<div className=" grid grid-cols-2 gap-4 p-8 pt-0">
							<ScenesComponent image={scenesImage} txt="BirthDay" />
							<ScenesComponent image={scenesImage} txt="Party" />
							<ScenesComponent image={scenesImage} txt="Relax" />
							<ScenesComponent image={scenesImage} txt="Fun" />
						</div>
					</div>
				</motion.div>
			</Sentry.ErrorBoundary>
		</>
	);
};

export default Room;
