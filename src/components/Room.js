import React from "react";
import LightComponent from "./LightComponent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Avatar from "@material-ui/core/Avatar";
import lightBulbImage from "../assets/light-bulb.jpg";
import surfaceImage from "../assets/surface.svg";
import furnitureImage from "../assets/furniture-household.svg";
import bedLilleImage from "../assets/bed-lille.svg";

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
							<span className="arrow">⬅️</span> Bed
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
				className="white-panel bg-gray rounded-t-3xl"
				initial="initial"
				animate="in"
				exit="out"
				variants={whitePanelVariants}
				transition={pageTransition}
			></motion.div>
		</>
	);
};

export default Room;
