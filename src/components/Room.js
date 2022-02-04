import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Avatar from "@material-ui/core/Avatar";
import profileImage from "../assets/profile.jpg";
/* import backArrowImage from "../assets/back-arrow.svg";
import Avatar from "@material-ui/core/Avatar"; */

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
						</h1>
					</Link>
					<Avatar
						className="b-1 rounded-full p-8"
						src={profileImage}
						style={{ width: "100px", height: "100px" }}
						alt="profile"
					/>
				</div>
			</motion.div>
			<motion.div
				className="white-panel bg-white rounded-t-3xl"
				initial="initial"
				animate="in"
				exit="out"
				variants={whitePanelVariants}
				transition={pageTransition}
			>
				<h1 className="p-8">BedRoom</h1>
			</motion.div>
		</>
	);
};

export default Room;
